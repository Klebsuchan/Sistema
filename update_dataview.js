import fs from 'fs';

let code = fs.readFileSync('src/components/DataView.tsx', 'utf-8');

// 1. Imports
code = code.replace(
  `import { FileText, Database, Edit, Trash2, History, Clock, Search } from 'lucide-react';`,
  `import { FileText, Database, Edit, Trash2, History, Clock, Search, Download } from 'lucide-react';\nimport { exportEventsToExcel, exportEventsToPDF } from '../lib/exportUtils';`
);

// 2. Add Export Buttons next to Trash2 in Header
code = code.replace(
  `            {eventsData.length > 0 && (
              <button 
                onClick={onClearAll}`,
  `            <button onClick={() => exportEventsToPDF(filteredEvents)} className="px-3 py-2 text-sm font-medium text-brand-blue border border-brand-light hover:bg-brand-light rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"><Download className="w-4 h-4"/> PDF</button>
            <button onClick={() => exportEventsToExcel(filteredEvents)} className="px-3 py-2 text-sm font-medium text-brand-blue border border-brand-light hover:bg-brand-light rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"><Download className="w-4 h-4"/> Excel</button>
            {eventsData.length > 0 && (
              <button 
                onClick={onClearAll}`
);

// 3. Desktop view wrapper
code = code.replace(
  `        <div className="overflow-x-auto">`,
  `        <div className="hidden md:block overflow-x-auto">`
);

// 4. Mobile view wrapper
const mobileHTML = `
        <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-50/50">
          {paginatedEvents.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-brand-light text-center">
              <Search className="w-8 h-8 text-brand-blue mb-3 opacity-50" />
              <h3 className="font-semibold text-brand-blue">Nenhum registro</h3>
              <p className="text-sm text-brand-gray mt-1">Nenhum evento encontrado.</p>
            </div>
          ) : paginatedEvents.map((row) => {
            let priorityColor = 'bg-brand-light text-brand-blue';
            if (row.priority === 'Crítica') priorityColor = 'bg-red-100 text-red-700';
            else if (row.priority === 'Alta') priorityColor = 'bg-orange-100 text-orange-700';
            else if (row.priority === 'Média') priorityColor = 'bg-yellow-100 text-yellow-700';

            return (
              <div key={row.id} className="bg-white p-4 rounded-xl shadow-sm border border-brand-light flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-brand-blue text-lg">{row.id}</div>
                    <div className="text-sm text-brand-gray">{row.date} • {row.time}</div>
                  </div>
                  <span className={\`px-2 py-1 rounded text-xs font-bold \${priorityColor}\`}>
                    {row.priority}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col">
                    <span className="text-brand-gray text-xs uppercase tracking-wide">Prédio/Local</span>
                    <span className="font-medium text-brand-blue">{row.building} {row.floor ? \`- \${row.floor}\` : ''}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-brand-gray text-xs uppercase tracking-wide">Setor</span>
                    <span className="font-medium text-brand-blue">{row.sector}</span>
                  </div>
                </div>

                <div className="flex flex-col text-sm bg-brand-light/30 p-2 rounded-lg">
                  <span className="text-brand-gray text-xs uppercase tracking-wide mb-1">Motivo</span>
                  <span className="text-brand-blue">{row.reason}</span>
                </div>

                <div className="flex flex-col text-sm">
                  <span className="text-brand-gray text-xs uppercase tracking-wide">Status O.S</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={\`w-2 h-2 rounded-full \${row.osStatus === 'Concluída' ? 'bg-green-500' : 'bg-yellow-500'}\`}></span>
                    <span className="font-medium text-brand-blue">{row.osStatus} {row.numeroOS && \`(#\${row.numeroOS})\`}</span>
                  </div>
                </div>

                <div className="flex flex-col text-sm bg-brand-light/30 p-2 rounded-lg">
                  <span className="text-brand-gray text-xs uppercase tracking-wide mb-1">Atendimento</span>
                  <span className="text-brand-blue truncate max-w-full" title={row.atendimentoFinal}>{row.atendimentoFinal || '-'}</span>
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-brand-light mt-1">
                  {onEdit && (
                    <button onClick={() => onEdit(row)} className="p-2 text-brand-blue bg-brand-light hover:bg-brand-blue hover:text-white rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                  )}
                  {onDelete && (
                    <button onClick={() => onDelete(row.id)} className="p-2 text-brand-red bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
`;

code = code.replace(
  `        <div className="px-6 py-4 border-t border-brand-light flex flex-col sm:flex-row items-center justify-between gap-4">`,
  `${mobileHTML}\n        <div className="px-6 py-4 border-t border-brand-light flex flex-col sm:flex-row items-center justify-between gap-4">`
);

fs.writeFileSync('src/components/DataView.tsx', code);
console.log("DataView.tsx updated for exports and mobile");
