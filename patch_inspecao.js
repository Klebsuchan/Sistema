import fs from 'fs';

let content = fs.readFileSync('src/components/InspecaoForm.tsx', 'utf8');

content = content.replace(
  "import { InspecaoAntiga } from '../data';",
  "import { InspecaoAntiga, AppSettings } from '../data';"
);

content = content.replace(
  "interface InspecaoFormProps {\n  onSave: (inspecao: InspecaoAntiga) => void;\n  initialData?: InspecaoAntiga | null;\n  onCancel?: () => void;\n}",
  "interface InspecaoFormProps {\n  onSave: (inspecao: InspecaoAntiga) => void;\n  initialData?: InspecaoAntiga | null;\n  onCancel?: () => void;\n  settings: AppSettings;\n}"
);

content = content.replace(
  "export function InspecaoForm({ onSave, initialData, onCancel }: InspecaoFormProps) {",
  "export function InspecaoForm({ onSave, initialData, onCancel, settings }: InspecaoFormProps) {"
);

content = content.replace(
  "  const BUILDINGS = ['CD', 'RAD', 'PA', 'CDR', 'CES'];\n",
  ""
);

content = content.replace(
  /\{BUILDINGS\.map\(b => <option key=\{b\} value=\{b\}>\{b\}<\/option>\)\}/g,
  "{settings.buildings.map(b => <option key={b} value={b}>{b}</option>)}"
);

fs.writeFileSync('src/components/InspecaoForm.tsx', content);
console.log('InspecaoForm patched');
