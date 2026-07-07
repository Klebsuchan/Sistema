import fs from 'fs';

let content = fs.readFileSync('src/components/AmplifierForm.tsx', 'utf8');

content = content.replace(
  "import { Amplifier } from '../data';",
  "import { Amplifier, AppSettings } from '../data';"
);

content = content.replace(
  "interface AmplifierFormProps {\n  onSave: (amp: Amplifier) => void;\n  initialData?: Amplifier | null;\n  onCancel?: () => void;\n}",
  "interface AmplifierFormProps {\n  onSave: (amp: Amplifier) => void;\n  initialData?: Amplifier | null;\n  onCancel?: () => void;\n  settings: AppSettings;\n}"
);

content = content.replace(
  "export function AmplifierForm({ onSave, initialData, onCancel }: AmplifierFormProps) {",
  "export function AmplifierForm({ onSave, initialData, onCancel, settings }: AmplifierFormProps) {"
);

content = content.replace(
  /<option value="online\/sincronizado">Online \/ Sincronizado<\/option>\s*<option value="offline">Offline<\/option>\s*<option value="erro">Erro<\/option>/g,
  '{settings.amplifierStatuses.map(s => <option key={s} value={s.toLowerCase()}>{s}</option>)}'
);

fs.writeFileSync('src/components/AmplifierForm.tsx', content);
console.log('AmplifierForm patched');
