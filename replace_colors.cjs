const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace colors
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-neutral-/g, '$1-blue-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-gray-/g, '$1-blue-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-emerald-/g, '$1-blue-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-green-/g, '$1-blue-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-yellow-/g, '$1-red-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-amber-/g, '$1-red-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-orange-/g, '$1-red-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-zinc-/g, '$1-blue-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow|divide)-slate-/g, '$1-blue-');

  fs.writeFileSync(file, content);
});

console.log("Colors replaced!");
