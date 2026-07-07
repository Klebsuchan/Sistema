import fs from 'fs';

let content = fs.readFileSync('src/components/EventForm.tsx', 'utf8');

// The file might use BUILDINGS, REASONS, SECTORS. Let's find where they are defined or used.
content = content.replace(
  /\{BUILDINGS\.map/g,
  "{(settings?.buildings || ['CD', 'Edifício Sede', 'Anexo', 'Geral']).map"
);
content = content.replace(
  /\{REASONS\.map/g,
  "{(settings?.reasons || ['Bateria Baixa', 'Fumaça', 'Teste', 'Manutenção']).map"
);

// Remove the import or constant definitions if they exist
content = content.replace(/const BUILDINGS = \[.*?\];/g, '');
content = content.replace(/const REASONS = \[.*?\];/g, '');

fs.writeFileSync('src/components/EventForm.tsx', content);
console.log('EventForm patched');
