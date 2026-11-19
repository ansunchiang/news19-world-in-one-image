import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sourceImage = fileURLToPath(new URL("./entry.png", import.meta.url));

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(sourceImage, join(outputDirectory, "entry.png"));
