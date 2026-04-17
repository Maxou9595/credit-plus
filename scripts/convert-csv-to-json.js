import { readFileSync, writeFileSync } from "fs"
import { join } from "path"

/**
 * Script to convert INSEE CSV data to JSON format for city pages
 *
 * Expected CSV format (with headers):
 * nom_commune,code_postal,nom_departement,code_departement,nom_region,population,latitude,longitude
 *
 * Example:
 * Strasbourg,67000,Bas-Rhin,67,Grand Est,280966,48.5734,7.7521
 *
 * Usage:
 * 1. Place your CSV file in the data folder as "cities-input.csv"
 * 2. Run: node scripts/convert-csv-to-json.js
 * 3. Output will be generated in data/cities.json
 */

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
}

function parseCSVLine(line) {
  const values = []
  let current = ""
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === "," && !inQuotes) {
      values.push(current.trim())
      current = ""
    } else {
      current += char
    }
  }
  values.push(current.trim())

  return values
}

function convertCSVToJSON() {
  try {
    // Read CSV file
    const csvPath = join(process.cwd(), "data", "cities-input.csv")
    const csvContent = readFileSync(csvPath, "utf-8")

    // Split into lines and remove empty lines
    const lines = csvContent.split("\n").filter((line) => line.trim())

    if (lines.length < 2) {
      throw new Error("CSV file must contain at least a header row and one data row")
    }

    // Parse header
    const headers = parseCSVLine(lines[0])
    console.log("[v0] CSV Headers:", headers)

    // Parse data rows
    const cities = []
    const seenSlugs = new Set()

    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i])

      if (values.length !== headers.length) {
        console.warn(
          `[v0] Warning: Line ${i + 1} has ${values.length} values but expected ${headers.length}. Skipping.`,
        )
        continue
      }

      const cityName = values[0]
      const slug = slugify(cityName)

      // Handle duplicate slugs
      if (seenSlugs.has(slug)) {
        console.warn(`[v0] Warning: Duplicate slug "${slug}" for city "${cityName}". Skipping.`)
        continue
      }
      seenSlugs.add(slug)

      const city = {
        slug,
        name: cityName,
        postalCode: values[1],
        department: values[2],
        departmentCode: values[3],
        region: values[4],
        population: Number.parseInt(values[5], 10) || 0,
        latitude: Number.parseFloat(values[6]) || 0,
        longitude: Number.parseFloat(values[7]) || 0,
      }

      cities.push(city)
    }

    // Sort by population (descending)
    cities.sort((a, b) => b.population - a.population)

    // Write JSON file
    const jsonPath = join(process.cwd(), "data", "cities.json")
    writeFileSync(jsonPath, JSON.stringify(cities, null, 2), "utf-8")

    console.log(`[v0] ✓ Successfully converted ${cities.length} cities`)
    console.log(`[v0] ✓ Output written to: ${jsonPath}`)
    console.log(`[v0] ✓ Top 5 cities by population:`)
    cities.slice(0, 5).forEach((city, index) => {
      console.log(`   ${index + 1}. ${city.name} (${city.population.toLocaleString()} hab.)`)
    })
  } catch (error) {
    console.error("[v0] Error converting CSV to JSON:", error.message)
    process.exit(1)
  }
}

// Run the conversion
convertCSVToJSON()
