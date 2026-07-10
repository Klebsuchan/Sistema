import fs from 'fs';

let code = fs.readFileSync('src/components/HosesView.tsx', 'utf-8');

code = code.replace(
  `        <div className="overflow-x-auto">`,
  `        <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-50/50">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-brand-light text-center">
              <Search className="w-8 h-8 text-brand-blue mb-3 opacity-50" />
              <h3 className="font-semibold text-brand-blue">Nenhum registro</h3>
              <p className="text-sm text-brand-gray mt-1">Nenhuma mangueira encontrada com os filtros atuais.</p>
            </div>
          ) : filtered.map((h) => (
            <div key={h.id} className="bg-white p-4 rounded-xl shadow-sm border border-brand-light flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-brand-blue text-lg">Nº {h.num_mangueira}</div>
                  <div className="text-sm text-brand-gray">Patrimônio: {h.patrim}</div>
                </div>
                <div className="flex gap-1">
                  {h.checkEsguicho && <span className="w-3 h-3 rounded-full bg-brand-blue" title="Esguicho OK"></span>}
                  {h.checkEngate && <span className="w-3 h-3 rounded-full bg-brand-blue" title="Engate OK"></span>}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Prédio</span>
                  <span className="font-medium text-brand-blue">{h.predio || '-'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Localização</span>
                  <span className="font-medium text-brand-blue">{h.localizacao}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm bg-brand-light/30 p-2 rounded-lg">
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Tipo / Cap</span>
                  <span className="font-medium text-brand-blue">{h.tipo} • {h.cap}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Recarga / Teste</span>
                  <span className="font-medium text-brand-blue">{h.prox_recarga} / {h.prox_teste}</span>
                </div>
              </div>

              <div className="flex gap-2">
                {h.retiradoParaRecarga && <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">Recarga (Retirado)</span>}
                {h.coberturaNoLocal && <span className="px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-700">Cobertura Ativa</span>}
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-brand-light mt-1">
                <button onClick={() => onEdit(h)} className="p-2 text-brand-blue bg-brand-light hover:bg-brand-blue hover:text-white rounded-lg transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => onDelete(h.id)} className="p-2 text-brand-red bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block overflow-x-auto">`
);

fs.writeFileSync('src/components/HosesView.tsx', code);
console.log("Hoses updated for mobile");
