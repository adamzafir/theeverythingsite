import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const toolsDir = path.join(root, 'tools');
const tools = readdirSync(toolsDir).filter((n)=>n.endsWith('.json')).map((name)=>JSON.parse(readFileSync(path.join(toolsDir, name), 'utf8'))).sort((a,b)=>a.name.localeCompare(b.name));
const out = 'export const tools = ' + JSON.stringify(tools, null, 2) + ';\n';
writeFileSync(path.join(root, 'src/generated/tools-manifest.js'), out);
