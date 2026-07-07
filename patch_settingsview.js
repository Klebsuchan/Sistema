import fs from 'fs';

let content = fs.readFileSync('src/components/SettingsView.tsx', 'utf8');

content = content.replace(
  "priorities: ''\n  });",
  "priorities: '',\n    extinguisherTypes: '',\n    amplifierStatuses: ''\n  });"
);

content = content.replace(
  "import { Settings, Plus, Trash2, Save, Building, AlertCircle, FileText, Activity } from 'lucide-react';",
  "import { Settings, Plus, Trash2, Save, Building, AlertCircle, FileText, Activity, Droplets, Speaker } from 'lucide-react';"
);

const newSections = `        {renderSection('Prioridades', 'priorities', <Activity className="w-5 h-5 text-brand-blue" />, 'Adicionar prioridade...')}
        {renderSection('Tipos de Extintor', 'extinguisherTypes', <Droplets className="w-5 h-5 text-brand-blue" />, 'Adicionar tipo...')}
        {renderSection('Status de Amplificador', 'amplifierStatuses', <Speaker className="w-5 h-5 text-brand-blue" />, 'Adicionar status...')}`;

content = content.replace(
  "{renderSection('Prioridades', 'priorities', <Activity className=\"w-5 h-5 text-brand-blue\" />, 'Adicionar prioridade...')}",
  newSections
);

fs.writeFileSync('src/components/SettingsView.tsx', content);
console.log('SettingsView patched');
