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
  
  // Replace colors
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-(gray|neutral|slate|zinc|stone|emerald|green|amber|yellow|orange|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-/g, function(match, prefix, color) {
    if (['emerald', 'green', 'teal', 'cyan', 'sky', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'].includes(color)) return `${prefix}-blue-`;
    if (['gray', 'neutral', 'slate', 'zinc', 'stone'].includes(color)) return `${prefix}-blue-`;
    if (['amber', 'yellow', 'orange'].includes(color)) return `${prefix}-red-`;
    return match;
  });

  fs.writeFileSync(file, content);
});

console.log("Colors replaced!");
