import fs from 'fs';

let content = fs.readFileSync('src/components/DataView.tsx', 'utf8');

content = content.replace(
  "import React from 'react';",
  "import React, { useState, useMemo } from 'react';"
);

content = content.replace(
  "import { FileText, Database, Edit, Trash2, History, Clock } from 'lucide-react';",
  "import { FileText, Database, Edit, Trash2, History, Clock, Search } from 'lucide-react';"
);

content = content.replace(
  "export function DataView({ eventsData, onEdit, onDelete, onClearAll, onClearHistory, auditLogs = [] }: DataViewProps) {",
  `export function DataView({ eventsData, onEdit, onDelete, onClearAll, onClearHistory, auditLogs = [] }: DataViewProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = useMemo(() => {
    if (!searchTerm) return eventsData;
    const lowerTerm = searchTerm.toLowerCase();
    return eventsData.filter(event => 
      (event.building && event.building.toLowerCase().includes(lowerTerm)) ||
      (event.atendimentoFinal && event.atendimentoFinal.toLowerCase().includes(lowerTerm)) ||
      (event.reason && event.reason.toLowerCase().includes(lowerTerm)) ||
      (event.sector && event.sector.toLowerCase().includes(lowerTerm))
    );
  }, [eventsData, searchTerm]);`
);

content = content.replace(
  /<div className="px-6 py-5 border-b border-brand-light flex items-center justify-between">\s*<div className="flex items-center gap-2">\s*<FileText className="h-5 w-5 text-brand-blue" \/>\s*<h4 className="font-semibold text-brand-blue">Visualização de Dados<\/h4>\s*<\/div>\s*\{eventsData\.length > 0 && \(\s*<button\s*onClick=\{onClearAll\}\s*className="px-3 py-1.5 text-sm font-medium text-brand-blue bg-brand-light hover:bg-brand-light rounded-lg transition-colors flex items-center gap-1.5"\s*>\s*<Trash2 className="w-4 h-4" \/>\s*Apagar Todos os Eventos\s*<\/button>\s*\)\}\s*<\/div>/g,
  `<div className="px-6 py-5 border-b border-brand-light flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-brand-blue" />
            <h4 className="font-semibold text-brand-blue whitespace-nowrap">Visualização de Dados</h4>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-gray" />
              <input
                type="text"
                placeholder="Pesquisar por descrição ou setor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-brand-light border border-brand-light rounded-lg text-sm text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            {eventsData.length > 0 && (
              <button 
                onClick={onClearAll}
                className="px-3 py-2 sm:py-1.5 text-sm font-medium text-brand-blue bg-brand-light hover:opacity-80 rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Trash2 className="w-4 h-4" />
                <span>Apagar Todos</span>
              </button>
            )}
          </div>
        </div>`
);

content = content.replace(
  "{eventsData.map((row) => {",
  "{filteredEvents.map((row) => {"
);

content = content.replace(
  "              {eventsData.length === 0 && (\n                <tr>\n                  <td colSpan={7} className=\"px-6 py-8 text-center text-brand-blue\">\n                    Nenhum evento registrado.\n                  </td>\n                </tr>\n              )}",
  `              {filteredEvents.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-brand-blue">
                    {eventsData.length === 0 ? "Nenhum evento registrado." : "Nenhum evento encontrado para a pesquisa."}
                  </td>
                </tr>
              )}`
);

fs.writeFileSync('src/components/DataView.tsx', content);
console.log("DataView.tsx patched successfully!");
