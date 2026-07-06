const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  files = fs.readdirSync(dir);
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
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow)-neutral-/g, '$1-blue-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow)-gray-/g, '$1-blue-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow)-emerald-/g, '$1-blue-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow)-green-/g, '$1-blue-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow)-yellow-/g, '$1-red-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow)-amber-/g, '$1-red-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow)-orange-/g, '$1-red-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow)-zinc-/g, '$1-blue-');
  content = content.replace(/\b(text|bg|border|ring|fill|stroke|shadow)-slate-/g, '$1-blue-');

  fs.writeFileSync(file, content);
});

console.log("Colors replaced!");
