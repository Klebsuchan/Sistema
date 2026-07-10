import fs from 'fs';

const comps = [
  { file: 'src/components/ExtinguishersView.tsx', pdfFn: 'exportExtinguishersToPDF', excelFn: 'exportExtinguishersToExcel', label: 'Exportar PDF', type: 'Extinguisher[]' },
  { file: 'src/components/HosesView.tsx', pdfFn: 'exportHosesToPDF', excelFn: 'exportHosesToExcel', label: 'Exportar PDF', type: 'Hose[]' },
  { file: 'src/components/DetectorsView.tsx', pdfFn: 'exportDetectorsToPDF', excelFn: 'exportDetectorsToExcel', label: 'Exportar PDF', type: 'Detector[]' },
  { file: 'src/components/AmplifiersView.tsx', pdfFn: 'exportAmplifiersToPDF', excelFn: 'exportAmplifiersToExcel', label: 'Exportar PDF', type: 'Amplifier[]' },
];

comps.forEach(c => {
  let code = fs.readFileSync(c.file, 'utf-8');
  
  // Add imports if missing
  if (!code.includes(c.pdfFn)) {
    code = code.replace(
      `import React, { useState, useMemo } from 'react';`,
      `import React, { useState, useMemo } from 'react';\nimport { ${c.pdfFn} } from '../lib/pdf';\nimport { ${c.excelFn} } from '../lib/exportUtils';`
    );
  }

  // Replace Export button with two buttons
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

  fs.writeFileSync(c.file, code);
  console.log(`${c.file} updated with PDF/Excel buttons`);
});

