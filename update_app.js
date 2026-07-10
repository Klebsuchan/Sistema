import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Add imports
code = code.replace(
  `import { Layout } from "./components/Layout";`,
  `import { Layout } from "./components/Layout";\nimport toast, { Toaster } from 'react-hot-toast';\nimport { ConfirmModal } from './components/ConfirmModal';`
);

// Replace safeAlert definition
code = code.replace(
  /const safeAlert = \(msg: string\) => \{[\s\S]*?\};/,
  `const safeAlert = (msg: string) => { toast(msg); };`
);

// We should replace safeAlert('Salvo com sucesso!') with toast.success(...)
code = code.replace(/safeAlert\('([^']+sucesso[^']+)'\)/gi, "toast.success('$1')");
code = code.replace(/safeAlert\('([^']+erro[^']+)'\)/gi, "toast.error('$1')");
code = code.replace(/safeAlert\(/g, "toast.success("); // default for others like 'Excluído'

// Fix the settings toast
code = code.replace(
  `alert('Configurações salvas com sucesso!');`,
  `toast.success('Configurações salvas com sucesso!');`
);

fs.writeFileSync('src/App.tsx', code);
console.log("App.tsx updated for toast");
