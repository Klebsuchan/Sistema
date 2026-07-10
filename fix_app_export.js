import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// remove onExport={(exts) => ...} 
code = code.replace(/onExport=\{\([^)]+\) => exportToStructuredExcel[^}]+\}/g, '');

fs.writeFileSync('src/App.tsx', code);
console.log("App.tsx export props removed");
