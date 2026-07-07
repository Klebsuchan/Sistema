import fs from 'fs';

let content = fs.readFileSync('src/components/EventForm.tsx', 'utf8');

content = content.replace(
  "import { EventData } from '../data';",
  "import { EventData, AppSettings } from '../data';"
);

content = content.replace(
  "interface EventFormProps {\n  onSave: (event: EventData) => void;\n  initialData?: EventData;\n  onCancel?: () => void;\n}",
  "interface EventFormProps {\n  onSave: (event: EventData) => void;\n  initialData?: EventData;\n  onCancel?: () => void;\n  settings: AppSettings;\n}"
);

content = content.replace(
  "export function EventForm({ onSave, initialData, onCancel }: EventFormProps) {",
  "export function EventForm({ onSave, initialData, onCancel, settings }: EventFormProps) {"
);

content = content.replace(
  "  const BUILDINGS = ['CD', 'RAD', 'PA', 'CDR', 'CES'];\n  const REASONS = ['Bateria Baixa', 'Equipamento Removido', 'Fumaça', 'Teste'];\n  const OS_STATUSES = ['Aberta e Concluída', 'Aberta e Não Concluída', 'Não Aberta'];\n",
  ""
);

content = content.replace(/BUILDINGS/g, "settings.buildings");
content = content.replace(/REASONS/g, "settings.reasons");
content = content.replace(/OS_STATUSES/g, "settings.osStatuses");

content = content.replace(
  /<option value="Baixa">Baixa<\/option>\s*<option value="Média">Média<\/option>\s*<option value="Alta">Alta<\/option>\s*<option value="Crítica">Crítica<\/option>/,
  "{settings.priorities.map(p => <option key={p} value={p}>{p}</option>)}"
);

fs.writeFileSync('src/components/EventForm.tsx', content);
console.log('EventForm patched');
