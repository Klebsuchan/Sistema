import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Add state for ConfirmModal
code = code.replace(
  `const [activeTab, setActiveTab] = useState('dashboard');`,
  `const [activeTab, setActiveTab] = useState('dashboard');\n  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', message: '', onConfirm: () => {} });\n  const confirmAction = (title: string, message: string, onConfirm: () => void) => { setConfirmDialog({ isOpen: true, title, message, onConfirm }); };`
);

// Add Toaster and ConfirmModal to layout
code = code.replace(
  `return (`,
  `return (\n    <>\n      <Toaster position="top-right" toastOptions={{ duration: 4000, style: { background: '#1B2042', color: '#fff' }, success: { style: { background: '#059669' } }, error: { style: { background: '#A51D1A' } } }} />\n      <ConfirmModal isOpen={confirmDialog.isOpen} title={confirmDialog.title} message={confirmDialog.message} onConfirm={confirmDialog.onConfirm} onCancel={() => setConfirmDialog(prev => ({ ...prev, isOpen: false }))} />`
);

// Close Fragment
code = code.replace(
  `</Layout>\n  );`,
  `</Layout>\n    </>\n  );`
);

// Replace window.confirm calls
const confirmRegex = /if\s*\(\s*window\.confirm\('([^']+)'\)\s*\)\s*\{([\s\S]*?)\}/g;
code = code.replace(confirmRegex, (match, message, body) => {
  return `confirmAction('Confirmação', '${message}', () => {${body}});`;
});

fs.writeFileSync('src/App.tsx', code);
console.log("App.tsx updated for modal");
