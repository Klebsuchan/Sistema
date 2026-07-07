import fs from 'fs';

const filesToPatch = [
  'src/components/ExtinguisherForm.tsx',
  'src/components/HoseForm.tsx',
  'src/components/DetectorForm.tsx',
  'src/components/AmplifierForm.tsx',
  'src/components/InspecaoForm.tsx',
  'src/components/EventForm.tsx'
];

filesToPatch.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add settings?: any to the interface
    if (content.includes('interface ')) {
      content = content.replace(
        /interface (\w+Props) \{/,
        "interface $1 {\n  settings?: any;"
      );
    }

    // Add settings to the component props destructuring
    const functionRegex = /export function (\w+)\(\s*\{\s*(.*?)\s*\}\s*:\s*\w+Props\s*\)/;
    const match = content.match(functionRegex);
    if (match) {
      if (!match[2].includes('settings')) {
        content = content.replace(functionRegex, `export function $1({ settings, $2 }: $1Props)`);
      }
    }
    
    fs.writeFileSync(file, content);
    console.log(`Patched ${file}`);
  }
});
