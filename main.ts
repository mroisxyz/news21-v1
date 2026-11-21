import { mkdirSync, copyFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Front page: Saturday 21 November 2026 news infographic, 1024x1024.
// Leads: COP31 talks in overtime, Saudi missiles, and the Peru quake.
// 35 numbered stories paired with a UTC timeline and numbered map.
// A date-check panel and source legend make every item verifiable.
// Editorial summary tile built for the make.fun news-image bounty.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const scriptDir = dirname(fileURLToPath(import.meta.url));

function describeOutput(outDir, size) {
  return `Output directory: ${outDir}\nentry.png: ${size} bytes`;
}

mkdirSync(outDir, { recursive: true });

const src = join(scriptDir, 'entry.png');
const dest = join(outDir, 'entry.png');

copyFileSync(src, dest);

const size = statSync(dest).size;

process.stderr.write(describeOutput(outDir, size) + '\n');
