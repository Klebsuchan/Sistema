import fs from 'fs';

let content = fs.readFileSync('src/components/ExtinguisherForm.tsx', 'utf8');

content = content.replace(
  "import { Extinguisher } from '../data';",
  "import { Extinguisher, AppSettings } from '../data';"
);

content = content.replace(
  "interface ExtinguisherFormProps {\n  onSave: (extinguisher: Extinguisher) => void;\n  initialData?: Extinguisher | null;\n  onCancel?: () => void;\n}",
  "interface ExtinguisherFormProps {\n  onSave: (extinguisher: Extinguisher) => void;\n  initialData?: Extinguisher | null;\n  onCancel?: () => void;\n  settings: AppSettings;\n}"
);

content = content.replace(
  "export function ExtinguisherForm({ onSave, initialData, onCancel }: ExtinguisherFormProps) {",
  "export function ExtinguisherForm({ onSave, initialData, onCancel, settings }: ExtinguisherFormProps) {"
);

content = content.replace(
  "  const BUILDINGS = ['CD', 'RAD', 'PA', 'CDR', 'CES'];\n",
  ""
);

content = content.replace(
  /\{BUILDINGS\.map\(b => <option key=\{b\} value=\{b\}>\{b\}<\/option>\)\}/g,
  "{settings.buildings.map(b => <option key={b} value={b}>{b}</option>)}"
);

content = content.replace(
  /<option value="ABC">ABC<\/option>\s*<option value="CO2">CO2<\/option>\s*<option value="AP">AP<\/option>\s*<option value="BC">BC<\/option>/g,
  "{settings.extinguisherTypes.map(t => <option key={t} value={t}>{t}</option>)}"
);

fs.writeFileSync('src/components/ExtinguisherForm.tsx', content);
console.log('ExtinguisherForm patched');
