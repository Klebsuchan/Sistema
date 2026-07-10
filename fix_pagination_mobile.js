import fs from 'fs';
let code = fs.readFileSync('src/components/DataView.tsx', 'utf-8');
code = code.replace(
  `        <div className="px-6 py-4 border-t border-brand-light flex items-center justify-between">`,
  `        <div className="px-6 py-4 border-t border-brand-light flex flex-col sm:flex-row items-center justify-between gap-4">`
);
fs.writeFileSync('src/components/DataView.tsx', code);
console.log("Pagination mobile updated");
