import fs from 'fs';

const files = [
  'src/components/ExtinguishersView.tsx',
  'src/components/HosesView.tsx',
  'src/components/DetectorsView.tsx',
  'src/components/AmplifiersView.tsx',
  'src/components/InspecoesAntigasView.tsx',
  'src/components/BrigadaView.tsx'
];

files.forEach(file => {
  let code = fs.readFileSync(file, 'utf-8');
  
  // Remove from interface
  code = code.replace(/onExport:\s*\([^)]*\)\s*=>\s*void;/, '');
  
  // Remove from destructuring
  code = code.replace(/onDelete,\s*onExport/g, 'onDelete');
  code = code.replace(/onDelete\s*,\s*onExport/g, 'onDelete');
  
  fs.writeFileSync(file, code);
  console.log(`${file} interfaces fixed`);
});
