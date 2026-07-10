import fs from 'fs';

let code = fs.readFileSync('src/components/Dashboard.tsx', 'utf-8');

code = code.replace(
  `      {/* KPI Cards */}`,
  `      {totalEvents === 0 ? (
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-brand-light flex flex-col items-center justify-center text-center mt-6">
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-4 text-brand-blue">
            <Activity className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-brand-blue mb-2">Nenhum registro para exibir</h3>
          <p className="text-brand-gray">Não foram encontradas ocorrências neste período. Altere os filtros ou adicione novos registros.</p>
        </div>
      ) : (
        <>
          {/* KPI Cards */}`
);

code = code.replace(
  `    </div>\n  );\n}`,
  `        </>\n      )}\n    </div>\n  );\n}`
);

fs.writeFileSync('src/components/Dashboard.tsx', code);
console.log("Dashboard.tsx updated");
