import fs from 'fs';

const comps = [
  { file: 'src/components/InspecoesAntigasView.tsx', pdfFn: 'exportInspecoesToPDF', excelFn: 'exportInspecoesToExcel', type: 'InspecaoAntiga[]' },
  { file: 'src/components/BrigadaView.tsx', pdfFn: 'exportBrigadaToPDF', excelFn: 'exportBrigadaToExcel', type: 'BrigadaItem[]' }
];

comps.forEach(c => {
  let code = fs.readFileSync(c.file, 'utf-8');
  
  if (!code.includes(c.pdfFn)) {
    code = code.replace(
      `import React, { useState, useMemo } from 'react';`,
      `import React, { useState, useMemo } from 'react';\nimport { ${c.pdfFn}, ${c.excelFn} } from '../lib/exportUtils';`
    );
  }

  const exportBtnRegex = /<button[\s\S]*?onClick=\{\(\) => onExport\(filtered\)\}[\s\S]*?<\/button>/;
  
  const newButtons = `<button
              onClick={() => ${c.pdfFn}(filtered)}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-brand-light text-brand-blue rounded-xl hover:bg-brand-light transition-colors shadow-sm text-sm font-medium whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">PDF</span>
            </button>
            <button
              onClick={() => ${c.excelFn}(filtered)}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-brand-light text-brand-blue rounded-xl hover:bg-brand-light transition-colors shadow-sm text-sm font-medium whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Excel</span>
            </button>`;
            
  if (code.match(exportBtnRegex)) {
    code = code.replace(exportBtnRegex, newButtons);
  }

  // Also remove onExport from the interface manually because we replaced it
  code = code.replace(/onExport,\s*/g, '');

  fs.writeFileSync(c.file, code);
  console.log(`${c.file} updated with PDF/Excel buttons`);
});
