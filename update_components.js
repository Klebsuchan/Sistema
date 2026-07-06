import fs from 'fs';
import path from 'path';

function walkSync(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      filelist = walkSync(p, filelist);
    }
    else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filelist.push(p);
      }
    }
  });
  return filelist;
}

const files = walkSync('./src/components');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace colors
  content = content.replace(/\bbg-blue-700\b/g, 'bg-brand-blue');
  content = content.replace(/\btext-blue-700\b/g, 'text-brand-blue');
  content = content.replace(/\btext-blue-800\b/g, 'text-brand-blue');
  content = content.replace(/\btext-blue-900\b/g, 'text-brand-blue');
  
  content = content.replace(/\bbg-blue-600\b/g, 'bg-brand-blue');
  content = content.replace(/\bhover:bg-blue-700\b/g, 'hover:opacity-90'); // simplify hover state
  
  content = content.replace(/\bbg-red-500\b/g, 'bg-brand-red');
  content = content.replace(/\bbg-red-600\b/g, 'bg-brand-red');
  content = content.replace(/\bhover:bg-red-700\b/g, 'hover:opacity-90'); // simplify hover state
  
  content = content.replace(/\btext-red-900\b/g, 'text-white');
  content = content.replace(/\btext-red-700\b/g, 'text-brand-red');
  content = content.replace(/\btext-red-600\b/g, 'text-brand-red');
  
  content = content.replace(/\bbg-blue-50\b/g, 'bg-brand-light');

  fs.writeFileSync(file, content);
});

console.log("Components updated!");
