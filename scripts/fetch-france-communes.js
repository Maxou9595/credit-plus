const fs = require("fs")
const path = require("path")

const CSV_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donnees_communes-nThYuWLWKfuRyAFKlPKr4BJKp2rmRK.csv"

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
}

async function fetchAndConvertCommunes() {
  try {
    console.log("[v0] Fetching communes data from Vercel Blob Storage...")

    const response = await fetch(CSV_URL)
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`)
    }

    const csvContent = await response.text()
    console.log("[v0] CSV data fetched successfully")

    // Split into lines and remove empty lines
    const lines = csvContent.split("\n").filter((line) => line.trim())
    console.log(`[v0] Processing ${lines.length} lines...`)

    const communes = []
    const seenSlugs = new Set()
    const regionMap = new Map()
    const departmentMap = new Map()

    // Skip header line and process data
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line) continue

      // Split by semicolon
      const parts = line.split(";")

      if (parts.length < 11) {
        console.warn(`[v0] Warning: Line ${i + 1} has insufficient data. Skipping.`)
        continue
      }

      const [regCode, regionName, depCode, , , , comCode, communeName, pmun, , ptot] = parts

      const slug = slugify(communeName)

      // Handle duplicate slugs by appending department code
      let finalSlug = slug
      if (seenSlugs.has(slug)) {
        finalSlug = `${slug}-${depCode}`
        console.log(`[v0] Duplicate slug "${slug}" -> "${finalSlug}" for ${communeName}`)
      }
      seenSlugs.add(finalSlug)

      const population = Number.parseInt(ptot, 10) || 0

      // Skip communes with 0 population
      if (population === 0) {
        continue
      }

      const commune = {
        slug: finalSlug,
        name: communeName,
        postalCode: comCode.substring(0, 2) + "000", // Approximate postal code
        department: "", // Will be filled from department map
        departmentCode: depCode,
        region: regionName,
        regionCode: regCode,
        population: population,
        latitude: 0, // Not available in this dataset
        longitude: 0, // Not available in this dataset
      }

      communes.push(commune)

      // Track regions and departments
      if (!regionMap.has(regCode)) {
        regionMap.set(regCode, regionName)
      }
      if (!departmentMap.has(depCode)) {
        departmentMap.set(depCode, [])
      }
      departmentMap.get(depCode).push(finalSlug)
    }

    // Sort by population (descending)
    communes.sort((a, b) => b.population - a.population)

    console.log(`[v0] ✓ Successfully processed ${communes.length} communes`)
    console.log(`[v0] ✓ Regions: ${regionMap.size}`)
    console.log(`[v0] ✓ Departments: ${departmentMap.size}`)

    // Write JSON file
    const jsonPath = path.join(process.cwd(), "data", "cities.json")
    fs.writeFileSync(jsonPath, JSON.stringify(communes, null, 2), "utf-8")
    console.log(`[v0] ✓ Output written to: ${jsonPath}`)

    // Show top 10 communes
    console.log(`[v0] ✓ Top 10 communes by population:`)
    communes.slice(0, 10).forEach((commune, index) => {
      console.log(`   ${index + 1}. ${commune.name} (${commune.population.toLocaleString()} hab.) - ${commune.region}`)
    })

    // Write department mapping
    const deptMapPath = path.join(process.cwd(), "data", "departments.json")
    const deptMapData = Array.from(departmentMap.entries()).map(([code, cities]) => ({
      code,
      cities,
    }))
    fs.writeFileSync(deptMapPath, JSON.stringify(deptMapData, null, 2), "utf-8")
    console.log(`[v0] ✓ Department mapping written to: ${deptMapPath}`)
  } catch (error) {
    console.error("[v0] Error:", error.message)
    process.exit(1)
  }
}

// Run the script
fetchAndConvertCommunes()
