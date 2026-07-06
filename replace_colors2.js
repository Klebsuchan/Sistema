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
  
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-(blue)-([0-9]+)(\/[0-9]+)?\b/g, function(match, prefix, color, shade, alpha) {
    alpha = alpha || '';
    shade = parseInt(shade);
    if (shade < 400 && prefix === 'bg') return `${prefix}-brand-light${alpha}`;
    if (shade < 400 && prefix === 'border') return `${prefix}-brand-light${alpha}`;
    if (shade < 400 && prefix === 'divide') return `${prefix}-brand-light${alpha}`;
    if (shade === 50 || shade === 100) return `${prefix}-brand-light${alpha}`;
    return `${prefix}-brand-blue${alpha}`;
  });

  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-(red)-([0-9]+)(\/[0-9]+)?\b/g, function(match, prefix, color, shade, alpha) {
    alpha = alpha || '';
    shade = parseInt(shade);
    if (shade < 300 && prefix === 'bg') return `${prefix}-brand-light${alpha}`;
    if (shade < 300 && prefix === 'border') return `${prefix}-brand-light${alpha}`;
    return `${prefix}-brand-red${alpha}`;
  });

  fs.writeFileSync(file, content);
});
console.log("Colors updated!");
