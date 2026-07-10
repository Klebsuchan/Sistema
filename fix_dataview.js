import fs from 'fs';

let code = fs.readFileSync('src/components/DataView.tsx', 'utf-8');

code = code.replace(
  `              }))}\n              {filteredEvents.length === 0 && (\n                <tr>\n                  <td colSpan={7} className="px-6 py-8 text-center text-brand-blue">\n                    {eventsData.length === 0 ? "Nenhum evento registrado." : "Nenhum evento encontrado para a pesquisa."}\n                  </td>\n                </tr>\n              )}`,
  `              })}\n`
);

fs.writeFileSync('src/components/DataView.tsx', code);
console.log("DataView.tsx fixed");
