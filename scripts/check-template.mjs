import { mkdtemp, readFile, readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlTargets = [
  "skills/card-summary/assets/card-summary-template.html",
  "plugins/card-summary/skills/card-summary/assets/card-summary-template.html",
  "docs/demo-session-note.html",
  "docs/demo-research-note.html",
  "examples/session-note-output.html",
  "examples/research-note-output.html"
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function checkHtml(relativePath) {
  const path = resolve(root, relativePath);
  assert(existsSync(path), `Missing ${relativePath}`);
  const html = await readFile(path, "utf8");
  assert(/<html[\s>]/i.test(html), `${relativePath}: missing <html>`);
  assert(/cardData|cards\s*=|const\s+docs/.test(html), `${relativePath}: missing data replacement surface`);
  assert(/function\s+(esc|escapeHtml)\b/.test(html), `${relativePath}: missing escape function`);
  const script = html.match(/<script[^>]*>([\s\S]*?)<\/script>/i)?.[1];
  assert(script, `${relativePath}: missing script`);
  const tempDir = await mkdtemp(join(tmpdir(), "card-summary-check-"));
  const jsPath = join(tempDir, "script.js");
  await writeFile(jsPath, script, "utf8");
  const result = spawnSync("node", ["--check", jsPath], { encoding: "utf8" });
  assert(result.status === 0, `${relativePath}: node --check failed\n${result.stderr}`);
}

for (const target of htmlTargets) {
  await checkHtml(target);
}

console.log(`Checked ${htmlTargets.length} HTML files.`);
