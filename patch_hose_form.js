import fs from 'fs';
let content = fs.readFileSync('src/components/InspecaoForm.tsx', 'utf8');

content = content.replace(
  /\{BUILDINGS\.map/g,
  "{(settings?.buildings || ['CD', 'Edifício Sede', 'Anexo', 'Geral']).map"
);
content = content.replace(/const BUILDINGS = \[.*?\];/g, '');

fs.writeFileSync('src/components/InspecaoForm.tsx', content);
