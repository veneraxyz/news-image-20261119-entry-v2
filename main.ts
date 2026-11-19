// news-image-20261119 v2: copy the pre-drawn entry image to the output dir.
// The image is held in this repo as entry.png; the program only copies it.
import { dirname, join } from "node:path";
import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), target);
