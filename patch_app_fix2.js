import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const mainInjection = "{activeTab === 'register' && <EventForm onSave={handleAddOrUpdateEvent} settings={settings} />}";
const mainInjectionWithSettings = mainInjection + "\\n        {activeTab === 'settings' && <SettingsView settings={settings} onSave={(newSettings) => { setSettings(newSettings); alert('Configurações salvas com sucesso!'); }} />}";

content = content.replace(mainInjection, mainInjectionWithSettings);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx fix 2 applied');
