import fs from 'fs';

let code = fs.readFileSync('src/components/AmplifiersView.tsx', 'utf-8');

code = code.replace(
  `        <div className="overflow-x-auto">`,
  `        <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-50/50">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-brand-light text-center">
              <Search className="w-8 h-8 text-brand-blue mb-3 opacity-50" />
              <h3 className="font-semibold text-brand-blue">Nenhum registro</h3>
              <p className="text-sm text-brand-gray mt-1">Nenhum amplificador encontrado com os filtros atuais.</p>
            </div>
          ) : filtered.map((a) => (
            <div key={a.id} className="bg-white p-4 rounded-xl shadow-sm border border-brand-light flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-brand-blue text-lg">{a.codigo_mac}</div>
                  <div className="text-sm text-brand-gray">Sincronização: {a.data_hora}</div>
                </div>
                <span className={\`px-2 py-1 rounded text-xs font-bold \${a.status === 'Online' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}\`}>
                  {a.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm bg-brand-light/30 p-2 rounded-lg">
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Grupo</span>
                  <span className="font-medium text-brand-blue">{a.grupo}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Itens Associados</span>
                  <span className="font-medium text-brand-blue">{a.quantidade_itens || '0'} itens</span>
                </div>
              </div>
              
              <div className="flex flex-col text-sm p-2">
                <span className="text-brand-gray text-xs uppercase tracking-wide">Localização</span>
                <span className="font-medium text-brand-blue">{a.localizacao}</span>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-brand-light mt-1">
                <button onClick={() => onEdit(a)} className="p-2 text-brand-blue bg-brand-light hover:bg-brand-blue hover:text-white rounded-lg transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => onDelete(a.id)} className="p-2 text-brand-red bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block overflow-x-auto">`
);

fs.writeFileSync('src/components/AmplifiersView.tsx', code);
console.log("Amplifiers updated for mobile");
