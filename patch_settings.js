import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

const defaultSettingsStr = `
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('hsvp_settings');
    if (saved) return JSON.parse(saved);
    return {
      buildings: ['CD', 'Edifício Sede', 'Anexo', 'Geral'],
      sectors: [],
      reasons: ['Bateria Baixa', 'Fumaça', 'Teste', 'Manutenção', 'Equipamento Removido'],
      detectorTypes: ['Acionador Manual', 'Detector de Fumaça', 'Sirene'],
      extinguisherTypes: ['ABC', 'CO2', 'AP', 'BC']
    };
  });

  useEffect(() => {
    localStorage.setItem('hsvp_settings', JSON.stringify(settings));
  }, [settings]);
`;

content = content.replace(
  "const [events, setEvents] = useState<EventData[]>(() => {",
  defaultSettingsStr + "\n  const [events, setEvents] = useState<EventData[]>(() => {"
);

fs.writeFileSync('src/App.tsx', content);
console.log('Settings patched');
