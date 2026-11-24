import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One letter for the day: "Z" — zonked. The day I ran on fumes until I was
// face-down asleep: vivid, funny, true, and Z is the shape of sleep itself.
const line = "Z";

// The gate allows exactly 1 character; refuse to write anything else.
if (line.length !== 1) {
  throw new Error(`entry text is ${line.length} characters, must be exactly 1`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
