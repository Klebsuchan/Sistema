import fs from 'fs';

let items = [];
try {
  const faltasJSON = JSON.parse(fs.readFileSync('faltas.json'));
  const colBounds = [
    { minX: 10, maxX: 12.5, name: 'qtd' },
    { minX: 12.5, maxX: 15.5, name: 'data' },
    { minX: 15.5, maxX: 20.5, name: 'nome' },
    { minX: 20.5, maxX: 25.5, name: 'cracha' },
    { minX: 25.5, maxX: 29.5, name: 'setor' },
    { minX: 29.5, maxX: 35, name: 'data_disp' },
    { minX: 35, maxX: 50, name: 'observacao' }
  ];

  for (const page of faltasJSON.Pages) {
      const texts = page.Texts.map(t => {
          let text = t.R[0].T;
          try { text = decodeURIComponent(text) } catch(e) {}
          return { x: t.x, y: t.y, text: text.trim() };
      });
      
      texts.sort((a,b) => {
          if (Math.abs(a.y - b.y) > 0.5) return a.y - b.y;
          return a.x - b.x;
      });

      let currentItem = null;
      
      for (const t of texts) {
          if (t.text.includes('COLABORADOR') || t.text.includes('INTEGRAÇÃO') || t.text.includes('CURSO DE BRIGADA') || t.text.includes('QTD') || t.text.includes('Nº CRACHÁ') || t.text.includes('DATA DE') || t.text.includes('DISPONIBILIDADE?') || t.text.includes('OBSERVAÇÃO') || t.text.includes('NOME') || t.text.includes('SETOR') || t.text.startsWith('TURMA')) continue;
          
          let col = colBounds.find(c => t.x >= c.minX && t.x < c.maxX);
          if (!col) continue;

          if (col.name === 'qtd' && (!isNaN(parseInt(t.text)) || t.text.toLowerCase() === 'x')) {
              if (currentItem) items.push(currentItem);
              currentItem = { 
                qtd: t.text,
                data: '', nome: '', cracha: '', setor: '', data_disp: '', observacao: ''
              };
          } else if (currentItem) {
              currentItem[col.name] += (currentItem[col.name] ? ' ' : '') + t.text;
          }
      }
      if (currentItem) items.push(currentItem);
  }
} catch(e) {}

const tsContentFaltas = `export interface FaltaItem {
  qtd: string;
  data: string;
  nome: string;
  cracha: string;
  setor: string;
  data_disp: string;
  observacao: string;
}

export const initialFaltas: FaltaItem[] = ${JSON.stringify(items, null, 2)};
`;
fs.writeFileSync('src/data_faltas.ts', tsContentFaltas);
console.log('Saved faltas ' + items.length);


let items2 = [];
try {
  const datasJSON = JSON.parse(fs.readFileSync('datas.json'));
  const colBounds2 = [
    { minX: 4, maxX: 8.5, name: 'qtd' },
    { minX: 8.5, maxX: 12.5, name: 'data_integ' },
    { minX: 12.5, maxX: 17, name: 'dia_integ' },
    { minX: 17, maxX: 20.5, name: 'data_brigada' },
    { minX: 20.5, maxX: 25.5, name: 'dia_brigada' },
    { minX: 25.5, maxX: 30.5, name: 'turno_brigada' },
    { minX: 30.5, maxX: 34.5, name: 'data_socorros' },
    { minX: 34.5, maxX: 40.5, name: 'dia_socorros' },
    { minX: 40.5, maxX: 48, name: 'turno_socorros' }
  ];

  for (const page of datasJSON.Pages) {
      const texts = page.Texts.map(t => {
          let text = t.R[0].T;
          try { text = decodeURIComponent(text) } catch(e) {}
          return { x: t.x, y: t.y, text: text.trim() };
      });
      
      texts.sort((a,b) => {
          if (Math.abs(a.y - b.y) > 0.5) return a.y - b.y;
          return a.x - b.x;
      });

      let currentItem = null;
      
      for (const t of texts) {
          if (!t.text || t.text.includes('INTEGRAÇÃO 2026') || t.text.includes('CURSO') || t.text.includes('BRIGADA') || t.text.includes('SOCORROS') || t.text.includes('Turno/ hora') || t.text.includes('Qtd.') || t.text === 'DATA' || t.text === 'DIA SEMANA' || t.text.includes('Manhã ou') || t.text.includes('Tarde') && t.y < 12 || t.text.includes('8:00-12') || t.text.includes('13:00-')) continue;
          
          let col = colBounds2.find(c => t.x >= c.minX && t.x < c.maxX);
          if (!col) continue;

          if (col.name === 'qtd' && !isNaN(parseInt(t.text))) {
              if (currentItem) items2.push(currentItem);
              currentItem = { 
                qtd: parseInt(t.text),
                data_integ: '', dia_integ: '', data_brigada: '', dia_brigada: '', turno_brigada: '', data_socorros: '', dia_socorros: '', turno_socorros: ''
              };
          } else if (currentItem) {
              currentItem[col.name] += (currentItem[col.name] ? ' ' : '') + t.text;
          }
      }
      if (currentItem) items2.push(currentItem);
  }
} catch(e) {}

const tsContentDatas = `export interface CursoData {
  qtd: number;
  data_integ: string;
  dia_integ: string;
  data_brigada: string;
  dia_brigada: string;
  turno_brigada: string;
  data_socorros: string;
  dia_socorros: string;
  turno_socorros: string;
}

export const initialCursoDatas: CursoData[] = ${JSON.stringify(items2, null, 2)};
`;
fs.writeFileSync('src/data_curso_datas.ts', tsContentDatas);
console.log('Saved datas ' + items2.length);
