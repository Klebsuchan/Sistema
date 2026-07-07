import fs from 'fs';

let content = fs.readFileSync('src/components/DetectorsView.tsx', 'utf8');

content = content.replace(
  "const [tipoFilter, setTipoFilter] = useState('Todos');",
  "const [tipoFilter, setTipoFilter] = useState('Todos');\n  const [filterPredio, setFilterPredio] = useState('TODOS');"
);

content = content.replace(
  "const matchesTipo = tipoFilter === 'Todos' || det.tipo === tipoFilter;",
  "const matchesTipo = tipoFilter === 'Todos' || det.tipo === tipoFilter;\n      const matchesPredio = filterPredio === 'TODOS' || det.predio === filterPredio;"
);

content = content.replace(
  "return matchesSearch && matchesTipo;",
  "return matchesSearch && matchesTipo && matchesPredio;"
);

content = content.replace(
  "const uniqueTipos = useMemo(() => {",
  `const uniquePredios = useMemo(() => {
    const list = Array.from(new Set(detectors.map(e => e.predio).filter(Boolean))) as string[];
    return list.sort();
  }, [detectors]);\n\n  const uniqueTipos = useMemo(() => {`
);

content = content.replace(
  /<select\s*value=\{tipoFilter\}/,
  `<select 
              value={filterPredio}
              onChange={(e) => setFilterPredio(e.target.value)}
              className="px-3 py-2 bg-white border border-brand-light rounded-xl text-sm text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm"
            >
              <option value="TODOS">Todos os Prédios</option>
              {uniquePredios.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <select 
              value={tipoFilter}`
);

fs.writeFileSync('src/components/DetectorsView.tsx', content);
console.log('DetectorsView patched');
