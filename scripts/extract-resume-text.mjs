import fs from 'node:fs';
import path from 'node:path';

function decodeXml(s) {
  return s
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");
}

function main() {
  const projectRoot = process.cwd();
  const xmlPath = path.join(projectRoot, '.tmp', 'resume', 'word', 'document.xml');
  const outPath = path.join(projectRoot, '.tmp', 'resume', 'resume.txt');

  if (!fs.existsSync(xmlPath)) {
    console.error(`Missing extracted Word XML at: ${xmlPath}`);
    console.error(`Tip: extract the docx first to .tmp/resume (Expand-Archive).`);
    process.exit(1);
  }

  const xml = fs.readFileSync(xmlPath, 'utf8');
  const re = /<w:t[^>]*>([\s\S]*?)<\/w:t>/g;
  const runs = [];
  for (const m of xml.matchAll(re)) runs.push(decodeXml(m[1]));

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, runs.join('\n'), 'utf8');

  console.log(`Extracted ${runs.length} text runs to ${outPath}`);
  console.log('--- Preview ---');
  console.log(runs.slice(0, 160).join('\n'));
}

main();


