import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  "const getTabTitle = () => {",
  "const handleLogout = () => {\n    setIsAuthenticated(false);\n    setLoginPassword('');\n  };\n\n  const getTabTitle = () => {"
);

fs.writeFileSync('src/App.tsx', content);
console.log('handleLogout added');
