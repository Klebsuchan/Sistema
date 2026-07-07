import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  "import { EventData, Extinguisher, Hose, Detector, Amplifier, InspecaoAntiga, BrigadaItem, FaltaItem, CursoData, AuditLog, initialEvents, initialExtinguishers, initialHoses, initialDetectors, initialAmplifiers, initialInspecoes, initialBrigada } from './data';",
  "import { EventData, Extinguisher, Hose, Detector, Amplifier, InspecaoAntiga, BrigadaItem, FaltaItem, CursoData, AuditLog, AppSettings, defaultSettings, initialEvents, initialExtinguishers, initialHoses, initialDetectors, initialAmplifiers, initialInspecoes, initialBrigada } from './data';"
);

content = content.replace(
  "  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(() => {",
  `  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('fireApp_settings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('fireApp_settings', JSON.stringify(settings));
  }, [settings]);

  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(() => {`
);

content = content.replace(
  "| 'falta_form' | 'curso_form' | 'register'>('dashboard');",
  "| 'falta_form' | 'curso_form' | 'register' | 'settings'>('dashboard');"
);

content = content.replace(
  "<EventForm onSave={handleAddOrUpdateEvent} />",
  "<EventForm onSave={handleAddOrUpdateEvent} settings={settings} />"
);

content = content.replace(
  /<EventForm \s*initialData=\{editingEvent\} \s*onSave=\{handleAddOrUpdateEvent\} \s*onCancel=\{\(\) => setEditingEvent\(null\)\} \s*\/>/g,
  `<EventForm \n                 initialData={editingEvent} \n                 onSave={handleAddOrUpdateEvent} \n                 onCancel={() => setEditingEvent(null)} \n                 settings={settings}\n               />`
);

content = content.replace(
  "import { Settings, LogOut, Menu, UserCircle, Download, Activity, Box, Radio, Speaker, ShieldAlert, ClipboardList, Users, CalendarClock } from 'lucide-react';",
  "import { Settings, LogOut, Menu, UserCircle, Download, Activity, Box, Radio, Speaker, ShieldAlert, ClipboardList, Users, CalendarClock, SlidersHorizontal } from 'lucide-react';"
);

const navBarContent = `            <button
              onClick={() => setActiveTab('settings')}
              className={\`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors \${activeTab === 'settings' ? 'bg-brand-light text-brand-blue font-medium' : 'text-brand-gray hover:text-brand-blue hover:bg-brand-light/50'}\`}
            >
              <SlidersHorizontal className="h-4 w-4" /> Configurações
            </button>
            <button
              onClick={handleLogout}`;

content = content.replace(
  "            <button\n              onClick={handleLogout}",
  navBarContent
);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx patched for settings');
