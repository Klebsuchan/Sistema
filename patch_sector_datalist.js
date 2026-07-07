import fs from 'fs';

let content = fs.readFileSync('src/components/EventForm.tsx', 'utf8');

content = content.replace(
  /<input required type="text" placeholder="Ex: Oncologia" value=\{sector\} onChange=\{\(e\) => setSector\(e\.target\.value\)\}\s*className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"\s*\/>/,
  `<input required type="text" list="sectors-list" placeholder="Ex: Oncologia" value={sector} onChange={(e) => setSector(e.target.value)}
            className="w-full px-4 py-2.5 bg-brand-light border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none"
          />
          <datalist id="sectors-list">
            {(settings?.sectors || []).map((s: string) => <option key={s} value={s} />)}
          </datalist>`
);

fs.writeFileSync('src/components/EventForm.tsx', content);
console.log('Sector datalist patched');
