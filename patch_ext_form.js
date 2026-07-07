import fs from 'fs';

let content = fs.readFileSync('src/components/ExtinguisherForm.tsx', 'utf8');

content = content.replace(
  /\{BUILDINGS\.map/g,
  "{(settings?.buildings || ['CD', 'Edifício Sede', 'Anexo', 'Geral']).map"
);

content = content.replace(
  /<select value=\{formData\.tipo\}.*?>[\s\S]*?<\/select>/,
  `<select value={formData.tipo} onChange={e => setFormData({ ...formData, tipo: e.target.value })}
              className="w-full px-4 py-2 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none">
              {(settings?.extinguisherTypes || ['ABC', 'CO2', 'AP', 'BC']).map((t: string) => <option key={t} value={t}>{t}</option>)}
            </select>`
);

content = content.replace(/const BUILDINGS = \[.*?\];/g, '');

fs.writeFileSync('src/components/ExtinguisherForm.tsx', content);
console.log('ExtinguisherForm patched');
