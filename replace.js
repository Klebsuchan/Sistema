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
  
  // Replace standard tailwind colors with our brand colors
  // blue -> brand-blue
  // red, amber, yellow, orange -> brand-red
  // neutral, gray, slate, zinc, stone -> brand-gray / white / brand-light depending on shade
  
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-(gray|neutral|slate|zinc|stone|emerald|green|amber|yellow|orange|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose|blue|red)-([0-9]+)(\/[0-9]+)?\b/g, function(match, prefix, color, shade, alpha) {
    alpha = alpha || '';
    shade = parseInt(shade);
    
    // Convert all colors to either brand-blue, brand-red, white, or transparent
    if (['emerald', 'green', 'teal', 'cyan', 'sky', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'blue'].includes(color)) {
      if (shade < 400 && prefix === 'bg') return `${prefix}-brand-light${alpha}`;
      return `${prefix}-brand-blue${alpha}`;
    }
    
    if (['amber', 'yellow', 'orange', 'red'].includes(color)) {
      if (shade < 400 && prefix === 'bg') return `${prefix}-brand-light${alpha}`;
      return `${prefix}-brand-red${alpha}`;
    }
    
    if (['gray', 'neutral', 'slate', 'zinc', 'stone'].includes(color)) {
      if (shade < 200) return `${prefix}-brand-light${alpha}`;
      if (shade < 500) return `${prefix}-brand-gray${alpha}`;
      if (shade < 800) return `${prefix}-brand-blue${alpha}`;
      return `${prefix}-brand-blue${alpha}`; // use brand-blue for very dark grays
    }

    return match;
  });

  fs.writeFileSync(file, content);
});

console.log("Colors replaced!");
