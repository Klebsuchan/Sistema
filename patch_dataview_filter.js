import fs from 'fs';

let content = fs.readFileSync('src/components/DataView.tsx', 'utf8');

content = content.replace(
  "const [searchTerm, setSearchTerm] = useState('');",
  "const [searchTerm, setSearchTerm] = useState('');\n  const [selectedBuilding, setSelectedBuilding] = useState('Todos');"
);

content = content.replace(
  "  const filteredEvents = useMemo(() => {",
  `  const filteredEvents = useMemo(() => {
    let filtered = eventsData;
    if (selectedBuilding !== 'Todos') {
      filtered = filtered.filter(event => event.building === selectedBuilding);
    }
    if (!searchTerm) return filtered;
    const lowerTerm = searchTerm.toLowerCase();
    return filtered.filter(event => 
      (event.building && event.building.toLowerCase().includes(lowerTerm)) ||
      (event.atendimentoFinal && event.atendimentoFinal.toLowerCase().includes(lowerTerm)) ||
      (event.reason && event.reason.toLowerCase().includes(lowerTerm)) ||
      (event.sector && event.sector.toLowerCase().includes(lowerTerm))
    );
  }, [eventsData, searchTerm, selectedBuilding]);
  
  const uniqueBuildings = useMemo(() => {
    const buildings = new Set(eventsData.map(e => e.building).filter(Boolean));
    return Array.from(buildings).sort();
  }, [eventsData]);`
);

content = content.replace(
  "if (!searchTerm) return eventsData;\n    const lowerTerm = searchTerm.toLowerCase();\n    return eventsData.filter(event => \n      (event.building && event.building.toLowerCase().includes(lowerTerm)) ||\n      (event.atendimentoFinal && event.atendimentoFinal.toLowerCase().includes(lowerTerm)) ||\n      (event.reason && event.reason.toLowerCase().includes(lowerTerm)) ||\n      (event.sector && event.sector.toLowerCase().includes(lowerTerm))\n    );\n  }, [eventsData, searchTerm]);",
  ""
);

content = content.replace(
  /<div className="relative w-full sm:w-72">/g,
  `<div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={selectedBuilding}
                onChange={(e) => setSelectedBuilding(e.target.value)}
                className="px-3 py-2 bg-brand-light border border-brand-light rounded-lg text-sm text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="Todos">Todos os Locais</option>
                {uniqueBuildings.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="relative w-full sm:w-72">`
);

fs.writeFileSync('src/components/DataView.tsx', content);
console.log('DataView patched with building filter');
