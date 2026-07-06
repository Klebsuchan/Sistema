const fs = require('fs');
const pdf = require('pdf-parse');

async function extract() {
  const dataBuffer = fs.readFileSync('src/components/NOVA PLANILHA DE EVENTOS.pdf');
  console.log('pdf export:', pdf);
  const parser = new pdf.PDFParse(dataBuffer); console.log(parser);
}
extract().catch(console.error);
