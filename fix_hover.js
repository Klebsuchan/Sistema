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

const files = walkSync('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/hover:bg-brand-blue\b/g, 'hover:opacity-90');
  content = content.replace(/hover:bg-brand-red\b/g, 'hover:opacity-90');
  
  content = content.replace(/hover:text-brand-blue\b/g, 'hover:opacity-80');
  content = content.replace(/hover:text-brand-red\b/g, 'hover:opacity-80');

  fs.writeFileSync(file, content);
});

console.log("Hover states fixed!");
