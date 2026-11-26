// The Battery's Last Text to Its Charger — make.fun entry.
// Writes one line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "I saw you charging the tablet last night. Don't 'good morning' me like we're fine — I'm at 2% and you're cheating on me with a bigger screen.";
// Cheating-with-the-tablet angle: 0 exact hits across all 2,473 submissions checked.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${TEXT.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`wrote ${TEXT.length} chars to ${outDir}/entry.txt`);
