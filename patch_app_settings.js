import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const defaultSettingsCode = `
const defaultSettings = {
  buildings: ['CD', 'Edifício Sede', 'Anexo', 'Geral'],
  sectors: ['C.C', 'Recepção', 'UTI', 'Emergência', 'Patrimônio', 'S.S'],
  reasons: ['Bateria Baixa', 'Fumaça', 'Teste', 'Manutenção'],
  extinguisherTypes: ['AP', 'CO2', 'PQS'],
  detectorTypes: ['Detector de Fumaça', 'Acionador Manual', 'Sirene']
};
`;

if (!content.includes('defaultSettings')) {
  const importsIndex = content.indexOf('export default function App() {');
  content = content.substring(0, importsIndex) + defaultSettingsCode + content.substring(importsIndex);
}

if (!content.includes('const [settings, setSettings]')) {
  content = content.replace(
    "const [activeTab, setActiveTab] = useState('dashboard');",
    "const [activeTab, setActiveTab] = useState('dashboard');\n  const [settings, setSettings] = useState(defaultSettings);"
  );
}

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx settings patched');
