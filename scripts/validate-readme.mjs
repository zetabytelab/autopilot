// Validates README.md structure and source discipline.
// Run by CI on every push/PR; exits non-zero with a list of problems.
import { readFileSync } from "node:fs";

const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");
const problems = [];

// 1. The generated-file banner must survive (edits belong in autopilotbiz/lib/data.ts).
if (!readme.slice(0, 200).includes("GENERATED FILE")) {
  problems.push("Missing GENERATED FILE banner at the top — edit autopilotbiz/lib/data.ts and run `npm run gen:index`, don't edit README.md directly.");
}

// 2. https-only links.
for (const m of readme.matchAll(/\]\((http:\/\/[^)]+)\)/g)) {
  problems.push(`Insecure link (https only): ${m[1]}`);
}

// 3. Required sections present.
for (const section of ["## The Index", "## 🔭 Watchlist", "## 🟥 Cautionary tales", "## 🧱 Part 2 — The Enablers", "### 🔄 The Switch Log"]) {
  if (!readme.includes(section)) problems.push(`Missing section: ${section}`);
}

// 4. Every Index row: 7 columns, a linked company name, a level, an evidence grade.
const indexSection = readme.split("## The Index")[1]?.split("\n## ")[0] ?? "";
const rows = indexSection.split("\n").filter((l) => l.startsWith("| ["));
if (rows.length < 3) problems.push(`Index table looks broken — only ${rows.length} company rows found.`);
for (const row of rows) {
  const cells = row.split("|").map((c) => c.trim()).filter(Boolean);
  if (cells.length !== 7) problems.push(`Index row needs 7 columns (has ${cells.length}): ${cells[0]}`);
  if (!/\*\*L[2-5]\*\*/.test(row)) problems.push(`Index row missing autonomy level (L2–L5): ${cells[0]}`);
  if (!/\| \*?\*?[A-D]\*?\*? \|/.test(row)) problems.push(`Index row missing evidence grade (A–D): ${cells[0]}`);
  if (!/^\| \[.+\]\(https:\/\/.+?\)/.test(row)) problems.push(`Index row company name must be a https link: ${cells[0]}`);
}

if (problems.length) {
  console.error(`README validation failed (${problems.length}):\n- ` + problems.join("\n- "));
  process.exit(1);
}
console.log(`README validation passed — ${rows.length} Index rows, all sections and link rules intact.`);
