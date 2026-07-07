import fs from 'fs';

let content = fs.readFileSync('src/components/HoseForm.tsx', 'utf8');

content = content.replace(
  "import { Hose } from '../data';",
  "import { Hose, AppSettings } from '../data';"
);

content = content.replace(
  "interface HoseFormProps {\n  onSave: (hose: Hose) => void;\n  initialData?: Hose | null;\n  onCancel?: () => void;\n}",
  "interface HoseFormProps {\n  onSave: (hose: Hose) => void;\n  initialData?: Hose | null;\n  onCancel?: () => void;\n  settings: AppSettings;\n}"
);

content = content.replace(
  "export function HoseForm({ onSave, initialData, onCancel }: HoseFormProps) {",
  "export function HoseForm({ onSave, initialData, onCancel, settings }: HoseFormProps) {"
);

content = content.replace(
  "  const BUILDINGS = ['CD', 'RAD', 'PA', 'CDR', 'CES'];\n",
  ""
);

content = content.replace(
  /\{BUILDINGS\.map\(b => <option key=\{b\} value=\{b\}>\{b\}<\/option>\)\}/g,
  "{settings.buildings.map(b => <option key={b} value={b}>{b}</option>)}"
);

fs.writeFileSync('src/components/HoseForm.tsx', content);
console.log('HoseForm patched');
