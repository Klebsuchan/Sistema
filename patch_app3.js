import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<ExtinguisherForm\s*initialData=\{editingExtinguisher\}\s*onSave=\{/g,
  '<ExtinguisherForm settings={settings} initialData={editingExtinguisher} onSave={'
);

content = content.replace(
  /<HoseForm\s*initialData=\{editingHose\}\s*onSave=\{/g,
  '<HoseForm settings={settings} initialData={editingHose} onSave={'
);

content = content.replace(
  /<DetectorForm\s*initialData=\{editingDetector\}\s*onSave=\{/g,
  '<DetectorForm settings={settings} initialData={editingDetector} onSave={'
);

content = content.replace(
  /<AmplifierForm\s*initialData=\{editingAmplifier\}\s*onSave=\{/g,
  '<AmplifierForm settings={settings} initialData={editingAmplifier} onSave={'
);

content = content.replace(
  /<InspecaoForm\s*initialData=\{editingInspecao\}\s*onSave=\{/g,
  '<InspecaoForm settings={settings} initialData={editingInspecao} onSave={'
);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx patched for sub-forms settings');
