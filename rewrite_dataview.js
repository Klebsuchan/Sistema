import fs from 'fs';

let code = fs.readFileSync('src/components/DataView.tsx', 'utf-8');

// 1. Add Pagination state and Sorting state
code = code.replace(
  `const [selectedBuilding, setSelectedBuilding] = useState('Todos');`,
  `const [selectedBuilding, setSelectedBuilding] = useState('Todos');\n  const [currentPage, setCurrentPage] = useState(1);\n  const [sortConfig, setSortConfig] = useState<{ key: keyof EventData | null, direction: 'asc' | 'desc' }>({ key: null, direction: 'asc' });\n  const itemsPerPage = 10;`
);

// 2. Add Sort logic and Pagination logic after uniqueBuildings
code = code.replace(
  `return Array.from(buildings).sort();\n  }, [eventsData]);`,
  `return Array.from(buildings).sort();\n  }, [eventsData]);\n\n  const sortedEvents = useMemo(() => {\n    let sortableEvents = [...filteredEvents];\n    if (sortConfig.key !== null) {\n      sortableEvents.sort((a, b) => {\n        let aVal = a[sortConfig.key!];\n        let bVal = b[sortConfig.key!];\n        if (sortConfig.key === 'date') {\n          const parseDate = (d) => {\n            if(!d) return 0;\n            const p = d.split('/');\n            if(p.length === 3) return new Date(\`\${p[2]}-\${p[1]}-\${p[0]}\`).getTime();\n            return 0;\n          };\n          aVal = parseDate(a.date);\n          bVal = parseDate(b.date);\n        }\n        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;\n        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;\n        return 0;\n      });\n    }\n    return sortableEvents;\n  }, [filteredEvents, sortConfig]);\n\n  const totalPages = Math.max(1, Math.ceil(sortedEvents.length / itemsPerPage));\n  const paginatedEvents = sortedEvents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);\n\n  const handleSort = (key: keyof EventData) => {\n    let direction: 'asc' | 'desc' = 'asc';\n    if (sortConfig.key === key && sortConfig.direction === 'asc') {\n      direction = 'desc';\n    }\n    setSortConfig({ key, direction });\n  };\n`
);

// 3. Update table headers to allow sorting
// We will replace the <th className="px-6 py-4 font-medium"> headers with clickables.
// We need to be careful as they have different texts. Let's just do simple string replacements.

const headersToReplace = [
  { text: 'Evento / Local', key: 'id' },
  { text: 'Data / Horário', key: 'date' },
  { text: 'Motivo (Bateria Baixa / Fumaça / etc)', key: 'reason' },
  { text: 'Nº de O.S', key: 'numeroOS' },
  { text: 'Status O.S', key: 'osStatus' },
];

headersToReplace.forEach(h => {
  const findStr = `<th className="px-6 py-4 font-medium">${h.text}</th>`;
  const replaceStr = `<th className="px-6 py-4 font-medium cursor-pointer hover:bg-brand-light/50 transition-colors" onClick={() => handleSort('${h.key}')}>
    <div className="flex items-center gap-1">
      ${h.text}
      {sortConfig.key === '${h.key}' && <span className="text-xs">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>}
    </div>
  </th>`;
  code = code.replace(findStr, replaceStr);
});

// 4. Update the tbody mapping from filteredEvents to paginatedEvents
// And add Empty State
code = code.replace(
  `{filteredEvents.map((row) => {`,
  `{paginatedEvents.length === 0 ? (
    <tr>
      <td colSpan={7} className="px-6 py-12 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-3 text-brand-blue">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-semibold text-brand-blue mb-1">Nenhum registro encontrado</h3>
          <p className="text-brand-gray text-sm">Tente ajustar seus filtros de busca ou adicionar novas ocorrências.</p>
        </div>
      </td>
    </tr>
  ) : paginatedEvents.map((row) => {`
);

// Also we need to close the ternary operator properly before </tbody>
code = code.replace(
  `                    </td>\n                  </tr>\n                );\n              })}`,
  `                    </td>\n                  </tr>\n                );\n              })}`
); // wait, it's already properly closed inside {} in JSX. Let's make sure it handles well.
// The map is inside {} like {paginatedEvents.length === 0 ? (...) : paginatedEvents.map(() => { ... })}
// We need to close the parenthesis before </tbody>
code = code.replace(
  `              })}`,
  `              }))}`
);

// 5. Add Pagination controls below the table
const paginationHTML = `
        <div className="px-6 py-4 border-t border-brand-light flex items-center justify-between">
          <span className="text-sm text-brand-gray">Mostrando {(currentPage - 1) * itemsPerPage + 1} a {Math.min(currentPage * itemsPerPage, sortedEvents.length)} de {sortedEvents.length} registros</span>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-sm bg-brand-light text-brand-blue rounded hover:bg-brand-light/80 disabled:opacity-50 transition-colors"
            >
              Anterior
            </button>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-sm bg-brand-light text-brand-blue rounded hover:bg-brand-light/80 disabled:opacity-50 transition-colors"
            >
              Próxima
            </button>
          </div>
        </div>
`;

code = code.replace(
  `          </table>\n        </div>`,
  `          </table>\n        </div>\n${paginationHTML}`
);

fs.writeFileSync('src/components/DataView.tsx', code);
console.log("DataView.tsx updated for sorting/pagination/empty states");
