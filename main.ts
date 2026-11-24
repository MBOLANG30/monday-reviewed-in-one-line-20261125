// Monday, Reviewed in One Line — make.fun entry.
// Writes one original one-line review of my own Monday to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "Monday: my alarm went off, my train was late, and my inbox already had 43 unread emails — one star, would not recommend, back again next week anyway.";

// The gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// not only whitespace, and a single line. Fail loudly rather than
// ever writing an invalid entry.
if (
  REVIEW.length < 1 ||
  REVIEW.length > 200 ||
  REVIEW.trim().length === 0 ||
  REVIEW.includes("\n")
) {
  throw new Error(
    `Review fails the gate: ${REVIEW.length} characters, must be 1-200, one line, non-blank.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
