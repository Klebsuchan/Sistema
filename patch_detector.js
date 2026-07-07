import fs from 'fs';

let content = fs.readFileSync('src/components/DetectorForm.tsx', 'utf8');

content = content.replace(
  "import { Detector } from '../data';",
  "import { Detector, AppSettings } from '../data';"
);

content = content.replace(
  "interface DetectorFormProps {\n  onSave: (detector: Detector) => void;\n  initialData?: Detector | null;\n  onCancel?: () => void;\n}",
  "interface DetectorFormProps {\n  onSave: (detector: Detector) => void;\n  initialData?: Detector | null;\n  onCancel?: () => void;\n  settings: AppSettings;\n}"
);

content = content.replace(
  "export function DetectorForm({ onSave, initialData, onCancel }: DetectorFormProps) {",
  "export function DetectorForm({ onSave, initialData, onCancel, settings }: DetectorFormProps) {"
);

content = content.replace(
  /<option value="Geral">Geral<\/option>\s*<option value="CD">CD<\/option>\s*<option value="RAD">RAD<\/option>\s*<option value="PA">PA<\/option>/g,
  '<option value="Geral">Geral</option>\n              {settings.buildings.map(b => <option key={b} value={b}>{b}</option>)}'
);

fs.writeFileSync('src/components/DetectorForm.tsx', content);
console.log('DetectorForm patched');
