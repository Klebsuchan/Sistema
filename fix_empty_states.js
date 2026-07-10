import fs from 'fs';

const files = [
  'src/components/ExtinguishersView.tsx',
  'src/components/HosesView.tsx',
  'src/components/DetectorsView.tsx',
  'src/components/AmplifiersView.tsx',
  'src/components/BrigadaView.tsx'
];

files.forEach(file => {
  let code = fs.readFileSync(file, 'utf-8');
  
  // They all use 'filtered.length === 0 && (' or 'filteredBrigada.length === 0 && ('
  const arrayNameMatch = code.match(/\{([a-zA-Z]+)\.length === 0 && \(/);
  
  if (arrayNameMatch) {
    const arrayName = arrayNameMatch[1];
    
    // Create new empty state HTML
    const emptyStateHTML = `{${arrayName}.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-3 text-brand-blue">
                        <Search className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-blue mb-1">Nenhum registro encontrado</h3>
                      <p className="text-brand-gray text-sm">Não foram encontrados dados com os filtros atuais.</p>
                    </div>
                  </td>
                </tr>
              )}`;
              
    code = code.replace(
      new RegExp(`\\{${arrayName}\\.length === 0 && \\([\\s\\S]*?<td[\\s\\S]*?</td>\\s*</tr>\\s*\\)\\}`),
      emptyStateHTML
    );
    
    fs.writeFileSync(file, code);
    console.log(`${file} updated`);
  }
});
