import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf-8');

const insertStr = `
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', message: '', onConfirm: () => {} });
  const confirmAction = (title: string, message: string, onConfirm: () => void) => { setConfirmDialog({ isOpen: true, title, message, onConfirm }); };
`;

code = code.replace(
  `  const [isExporting, setIsExporting] = useState(false);`,
  `  const [isExporting, setIsExporting] = useState(false);${insertStr}`
);

fs.writeFileSync('src/App.tsx', code);
console.log("App.tsx fixed state");
