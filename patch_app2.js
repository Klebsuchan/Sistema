import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

if (!content.includes('import { SettingsView }')) {
  content = content.replace(
    "import { EventForm } from './components/EventForm';",
    "import { EventForm } from './components/EventForm';\nimport { SettingsView } from './components/SettingsView';"
  );
}

const renderSettings = `        {activeTab === 'settings' && (
          <SettingsView 
            settings={settings} 
            onSave={(newSettings) => {
              setSettings(newSettings);
              safeAlert('Configurações salvas com sucesso!');
            }} 
          />
        )}
        {activeTab === 'register'`;

content = content.replace(
  "{activeTab === 'register'",
  renderSettings
);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx patched to render SettingsView');
