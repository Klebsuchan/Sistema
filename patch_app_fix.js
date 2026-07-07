import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// First remove the bad insertion inside the h2 tag
const badPart = `        {activeTab === 'settings' && (
          <SettingsView 
            settings={settings} 
            onSave={(newSettings) => {
              setSettings(newSettings);
              safeAlert('Configurações salvas com sucesso!');
            }} 
          />
        )}
        {activeTab === 'register' && 'Cadastrar Nova Ocorrência'}`;

content = content.replace(badPart, "{activeTab === 'register' && 'Cadastrar Nova Ocorrência'}");

// Now let's inject a proper Settings title and description
const headerInjection = `            {activeTab === 'falta_form' && (editingFalta ? 'Editar Registro de Falta/Curso' : 'Novo Registro de Falta/Curso')}
            {activeTab === 'settings' && 'Configurações'}`;

content = content.replace(
  "{activeTab === 'falta_form' && (editingFalta ? 'Editar Registro de Falta/Curso' : 'Novo Registro de Falta/Curso')}",
  headerInjection
);

const descInjection = `            {activeTab === 'register' && 'Preecha os dados abaixo. Após salvar, o app sincroniza o dashboard e o sistema de exportação do Excel.'}
            {activeTab === 'settings' && 'Gerencie as opções de seleção do sistema: prédios, setores, status, etc.'}`;

content = content.replace(
  "{activeTab === 'register' && 'Preecha os dados abaixo. Após salvar, o app sincroniza o dashboard e o sistema de exportação do Excel.'}",
  descInjection
);

// Now inject SettingsView in the main block
const mainInjection = `        {activeTab === 'register' && <EventForm \n                 initialData={editingEvent} \n                 onSave={handleAddOrUpdateEvent} \n                 onCancel={() => setEditingEvent(null)} \n                 settings={settings}\n               />}`;
const mainInjectionWithSettings = `        {activeTab === 'register' && <EventForm \n                 initialData={editingEvent} \n                 onSave={handleAddOrUpdateEvent} \n                 onCancel={() => setEditingEvent(null)} \n                 settings={settings}\n               />}\n        {activeTab === 'settings' && <SettingsView settings={settings} onSave={(newSettings) => { setSettings(newSettings); alert('Configurações salvas com sucesso!'); }} />}`;

content = content.replace(mainInjection, mainInjectionWithSettings);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx fix applied');
