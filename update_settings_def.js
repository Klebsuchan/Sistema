import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf8');

content = content.replace(
  "export interface AppSettings {\n  buildings: string[];\n  reasons: string[];\n  osStatuses: string[];\n  priorities: string[];\n}",
  "export interface AppSettings {\n  buildings: string[];\n  reasons: string[];\n  osStatuses: string[];\n  priorities: string[];\n  extinguisherTypes: string[];\n  amplifierStatuses: string[];\n}"
);

content = content.replace(
  "  priorities: ['Baixa', 'Média', 'Alta', 'Crítica']\n};",
  "  priorities: ['Baixa', 'Média', 'Alta', 'Crítica'],\n  extinguisherTypes: ['ABC', 'CO2', 'AP', 'BC'],\n  amplifierStatuses: ['Online / Sincronizado', 'Offline', 'Erro']\n};"
);

fs.writeFileSync('src/data.ts', content);
console.log('Updated data.ts for new settings');
