import fs from 'fs';
import PDFParser from 'pdf2json';

const pdfParser = new PDFParser();

pdfParser.on('pdfParser_dataError', errData => console.error(errData.parserError));
pdfParser.on('pdfParser_dataReady', pdfData => {
    fs.writeFileSync('brigade_content.json', JSON.stringify(pdfData, null, 2));
    
    // Also try to extract pure text roughly
    let text = '';
    for (const page of pdfData.Pages) {
      for (const textItem of page.Texts) {
        let t = textItem.R[0].T;
        try { t = decodeURIComponent(t); } catch(e) {}
        text += t + ' ';
      }
      text += '\n';
    }
    fs.writeFileSync('brigade_content.txt', text);
    console.log('Parsed successfully. Text length:', text.length);
});

pdfParser.loadPDF('CURSO BRIGADA DE INCENDIO2026 - 08_01_26 BRIGADA.pdf');
