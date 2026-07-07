import fs from 'fs';

let content = fs.readFileSync('src/components/DetectorForm.tsx', 'utf8');

content = content.replace(
  /<select\s*className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"\s*value=\{formData\.predio\}\s*onChange=\{e => setFormData\(\{...formData, predio: e\.target\.value\}\)\}\s*>[\s\S]*?<\/select>/,
  `<select
              className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={formData.predio}
              onChange={e => setFormData({...formData, predio: e.target.value})}
            >
              {(settings?.buildings || ['Geral', 'CD', 'Edifício Sede']).map((b: string) => <option key={b} value={b}>{b}</option>)}
            </select>`
);

content = content.replace(
  /<select\s*className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"\s*value=\{formData\.tipo\}\s*onChange=\{e => setFormData\(\{...formData, tipo: e\.target\.value\}\)\}\s*>[\s\S]*?<\/select>/,
  `<select
              className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              value={formData.tipo}
              onChange={e => setFormData({...formData, tipo: e.target.value})}
            >
              {(settings?.detectorTypes || ['Acionador Manual', 'Detector de Fumaça', 'Sirene']).map((t: string) => <option key={t} value={t}>{t}</option>)}
            </select>`
);

fs.writeFileSync('src/components/DetectorForm.tsx', content);
console.log('DetectorForm patched');
