import { execSync } from "child_process"

try {
  console.log("[v0] Starting CSV to JSON conversion...")
  execSync("node scripts/convert-csv-to-json.js", { stdio: "inherit" })
  console.log("[v0] Conversion completed successfully!")
} catch (error) {
  console.error("[v0] Error running conversion:", error.message)
}
