// @ts-nocheck
declare const process: unknown;

/*import i from "./index";

if (process.argv.length < 2) {
  process.stdout.write("usage: generate-layers SOURCE_NAME THEME");
  process.exit(1);
}
const args = process.argv.slice(2);

process.stdout.write(JSON.stringify(i(args[0], args[1]), null, 2));
*/
import fs from 'fs';
import path from 'path';
import i from "./index";

if (process.argv.length < 5) {
  process.stdout.write("usage: generate-layers SOURCE_NAME THEME LANG VERSION");
  process.exit(1);
}
const args = process.argv.slice(2);
const [sourceName, theme, lang, version] = args;

if (!['fr', 'en'].includes(lang)) {
  process.stdout.write("LANG must be either 'fr' or 'en'");
  process.exit(1);
}

const output = i(sourceName, theme, lang);
const outputDir = path.join(__dirname, '..', 'exports');
const outputFileName = `${theme}_${lang}_v${version}.json`;
const outputPath = path.join(outputDir, outputFileName);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
process.stdout.write(`Output written to ${outputPath}`);