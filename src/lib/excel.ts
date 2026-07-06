import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { EventData, AuditLog } from '../data';
import { Extinguisher } from '../data_extintores';
import { Hose } from '../data_hoses';
import { Detector } from '../data_detectors';
import { Amplifier } from '../data_amplificadores';
import { InspecaoAntiga } from '../data_inspecoes';
import { BrigadaItem } from '../data_brigada';
import { FaltaItem } from '../data_faltas';
import { CursoData } from '../data_curso_datas';

export async function exportToStructuredExcel(
  eventsData: EventData[], 
  extinguishersData: Extinguisher[],
  hosesData: Hose[],
  detectorsData: Detector[],
  amplifiersData: Amplifier[],
  inspecoesData: InspecaoAntiga[],
  brigadaData: BrigadaItem[],
  auditLogsData: AuditLog[],
  faltasData: FaltaItem[],
  cursoDatas: CursoData[]
) {
  // CRIAÇÃO DA PLANILHA (WORKBOOK)
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Dashboard Automator';
  workbook.lastModifiedBy = 'Sistema Automação - Hospital';
  workbook.created = new Date();
  
  // ==========================================
  // PÁGINA 1: OCORRÊNCIAS
  // ==========================================
  const eventSheet = workbook.addWorksheet('Registro de Eventos');
  
  // Definindo as colunas
  eventSheet.columns = [
    { header: 'Data', key: 'data', width: 18 },
    { header: 'PRÉDIO E ANDAR', key: 'predio_andar', width: 20 },
    { header: 'LOCAL Quarto/Sala/Setor', key: 'local', width: 25 },
    { header: 'MOTIVO DO DISPARO\n(Bateria baixa registrar apenas os horários/ Fumaça tentar identificar oque ocasionou / Removido identificar o local)', key: 'motivo_desc', width: 35 },
    { header: 'Bateria baixa', key: 'bateria', width: 14 },
    { header: 'Reset Geral', key: 'reset', width: 14 },
    { header: 'Equipamento removido', key: 'removido', width: 16 },
    { header: 'Disparo de fumaça', key: 'fumaca', width: 16 },
    { header: 'Nome\n(HT7) de\nquem fica\nna portaria', key: 'ht7', width: 18 },
    { header: 'Nome do\nGuarda\n(HT9) circulante\nque atendeu', key: 'ht9', width: 18 },
    { header: 'SUPERVISÃO DO\nBOMBEIRO\n(ATUAÇÃO CORRETA DO HT07 E HT09)', key: 'supervisao', width: 25 },
    { header: 'QUAL PROTOCOLO\nSEGUIU', key: 'protocolo', width: 20 },
    { header: 'DECISÃO\nAPÓS\nATENDIMENTO\nDO EVENTO', key: 'decisao', width: 20 },
    { header: 'ATIVIDADE NECESSÁRIA\nA SER REALIZADA\nNO DISPOSITIVO DE\nPREVENÇÃO CONTRA\nINCENDIO', key: 'atividade', width: 25 },
    { header: 'RESULTADO\nFOI ABERTA O.S\nE FOI ATENDIDO\nPELA MANUNTEÇÃO', key: 'resultado', width: 25 },
    // Novas Funcionalidades Abaixo:
    { header: 'AÇÃO / ID', key: 'id', width: 15 },
    { header: 'PRIORIDADE', key: 'priority', width: 15 },
    { header: 'ALARME FALSO?', key: 'isFalseAlarm', width: 18 },
    { header: 'STATUS', key: 'attended', width: 15 },
  ];

  // Formatando o cabeçalho base
  const headerRow1 = eventSheet.getRow(1);
  headerRow1.height = 100; // Ajuste para o texto longo

  const greenFill: ExcelJS.Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFC6E0B4' } };
  const yellowFill: ExcelJS.Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFF00' } };
  const orangeFill: ExcelJS.Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFC000' } };
  const redFill: ExcelJS.Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF0000' } };
  const newFeatureFill: ExcelJS.Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0F172A' } };

  for (let i = 1; i <= 19; i++) {
    const cell = headerRow1.getCell(i);
    cell.font = { bold: true };
    cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    
    // Cores específicas por colunas (1 a 19)
    if (i >= 1 && i <= 4) cell.fill = greenFill;
    else if (i === 5 || i === 6) cell.fill = yellowFill;
    else if (i === 7) cell.fill = orangeFill;
    else if (i >= 8 && i <= 10) {
      cell.fill = redFill;
      cell.font = { bold: true, color: { argb: 'FFFFFFFF' } }; // Fonte branca no vermelho escuro
    }
    else if (i >= 11 && i <= 15) cell.fill = greenFill;
    else {
      // P, Q, R, S - Novas colunas adicionadas para features do sistema
      cell.fill = newFeatureFill;
      cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    }
    
    // Contorno/Border em todas as células do cabeçalho
    cell.border = {
      top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'}
    };
  }

  // Adicionando os dados
  eventsData.forEach((row, index) => {
    const rowIndex = index + 2;
    
    const reasonLower = row.reason.toLowerCase();
    const isBat = reasonLower.includes('bateria') ? 'VERDADEIRO' : 'FALSO';
    const isReset = reasonLower.includes('reset') ? 'VERDADEIRO' : 'FALSO';
    const isRemovido = reasonLower.includes('removido') ? 'VERDADEIRO' : 'FALSO';
    const isFumaca = reasonLower.includes('fumaça') || reasonLower.includes('fumaca') ? 'VERDADEIRO' : 'FALSO';

    eventSheet.addRow({
      data: `${row.date} ${row.time}`, // Col A
      predio_andar: `${row.building} - ${row.floor}`, // Col B
      local: row.sector, // Col C
      motivo_desc: row.reason, // Col D
      bateria: isBat, // Col E
      reset: isReset, // Col F
      removido: isRemovido, // Col G
      fumaca: isFumaca, // Col H
      ht7: row.ht7 || '', // Col I
      ht9: row.ht9 || '', // Col J
      supervisao: row.supervisao || '', // Col K
      protocolo: row.protocolo || '', // Col L
      decisao: row.decisao || '', // Col M
      atividade: row.atividade || '', // Col N
      resultado: row.resultado || '', // Col O
      id: row.id, // Col P
      priority: row.priority || 'Baixa', // Col Q
      isFalseAlarm: row.isFalseAlarm ? 'Sim' : 'Não', // Col R
      attended: row.attended ? 'Atendida' : 'NÃO Atendida' // Col S
    });

    const rowObj = eventSheet.getRow(rowIndex);
    
    // Alinhamento central para as colunas E, F, G, H
    for(let i = 5; i <= 8; i++) {
        rowObj.getCell(i).alignment = { horizontal: 'center' };
    }

    // Cores condicionais (Novas features: Q=17, R=18, S=19)
    if (row.priority === 'Crítica') {
      rowObj.getCell(17).font = { color: { argb: 'FFE11D48' }, bold: true };
    }
    
    if (row.isFalseAlarm) {
      rowObj.getCell(18).font = { color: { argb: 'FFD97706' }, bold: true }; 
    } else {
      rowObj.getCell(18).font = { color: { argb: 'FFE11D48' }, bold: true };
    }

    if (row.attended) {
      rowObj.getCell(19).font = { color: { argb: 'FF059669' }, bold: true }; 
    } else {
      rowObj.getCell(19).font = { color: { argb: 'FFDC2626' }, bold: true };
    }
  });

  // ==========================================
  // ADICIONAR VALIDAÇÃO DE DADOS (DROPDOWNS)
  // ==========================================
  // Isso permite que se o usuário adicionar uma linha nova no Excel, ele tenha as opções formatadas
  for (let i = 2; i <= 1000; i++) {
    eventSheet.getCell(`Q${i}`).dataValidation = {
      type: 'list', allowBlank: true, formulae: ['"Baixa,Média,Alta,Crítica"']
    };
    eventSheet.getCell(`R${i}`).dataValidation = {
      type: 'list', allowBlank: true, formulae: ['"Sim,Não"']
    };
    eventSheet.getCell(`S${i}`).dataValidation = {
      type: 'list', allowBlank: true, formulae: ['"Atendida,NÃO Atendida"']
    };
  }

  // ==========================================
  // PÁGINA 2: MÉTRICAS RESUMIDAS
  // ==========================================
  const metricsSheet = workbook.addWorksheet('Resumo Estatísticas');
  
  metricsSheet.columns = [
    { header: 'Métrica de Monitoramento', key: 'metric', width: 40 },
    { header: 'Quantidade / Valor', key: 'value', width: 25 }
  ];

  const headerRow2 = metricsSheet.getRow(1);
  headerRow2.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  headerRow2.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF334155' } };
  headerRow2.alignment = { vertical: 'middle', horizontal: 'center' };

  // Atualizando ponteiros de formulário da Planilha 2 para as colunas corretas (P, Q, R, S)
  metricsSheet.addRow({
    metric: 'A) Total de Ocorrências (Linhas)',
    value: { formula: `COUNTA('Registro de Eventos'!A:A) - 1` }
  });

  metricsSheet.addRow({
    metric: 'B) Alarmes Falsos (Qtd)',
    value: { formula: `COUNTIF('Registro de Eventos'!R:R, "Sim")` }
  });

  metricsSheet.addRow({
    metric: 'C) Ocorrências NÃO Atendidas',
    value: { formula: `COUNTIF('Registro de Eventos'!S:S, "NÃO Atendida")` }
  });

  metricsSheet.addRow({
    metric: 'D) Eventos Críticos',
    value: { formula: `COUNTIF('Registro de Eventos'!Q:Q, "Crítica")` }
  });

  metricsSheet.addRow({
    metric: 'E) Taxa de Alarmes Falsos',
    value: { formula: `IF(B2>0, B3/B2, 0)` }
  });
  metricsSheet.getRow(6).getCell(2).numFmt = '0.00%';

  metricsSheet.addRow({
    metric: 'F) Taxa de Ineficiência (Não Atendidas)',
    value: { formula: `IF(B2>0, B4/B2, 0)` }
  });
  metricsSheet.getRow(7).getCell(2).numFmt = '0.00%';

  // ==========================================
  // GRÁFICOS (Renderizados via QuickChart API e embutidos como Imagem)
  // ==========================================
  try {
    // 1. Agregação de dados
    const reasonsMap: Record<string, number> = {};
    const prioritiesMap: Record<string, number> = {};

    eventsData.forEach(event => {
      reasonsMap[event.reason] = (reasonsMap[event.reason] || 0) + 1;
      const priority = event.priority || 'Baixa';
      prioritiesMap[priority] = (prioritiesMap[priority] || 0) + 1;
    });

    const buildChartUrl = (type: string, labels: string[], data: number[], label: string) => {
        const chartData = {
          type: type,
          data: {
              labels: labels,
              datasets: [{
                  label: label,
                  data: data,
                  backgroundColor: ['#3b82f6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#F472B6', '#14B8A6']
              }]
          },
          options: {
              plugins: { 
                  legend: { position: 'bottom' },
                  title: { display: true, text: label }
              }
          }
        };
        return `https://quickchart.io/chart?w=500&h=300&c=${encodeURIComponent(JSON.stringify(chartData))}`;
    };

    const reasonsLabels = Object.keys(reasonsMap);
    const reasonsValues = Object.values(reasonsMap);
    const url1 = buildChartUrl('bar', reasonsLabels, reasonsValues, 'Eventos por Motivo');

    const prioritiesLabels = Object.keys(prioritiesMap);
    const prioritiesValues = Object.values(prioritiesMap);
    const url2 = buildChartUrl('pie', prioritiesLabels, prioritiesValues, 'Distribuição por Prioridade');

    // 2. Fetch das imagens
    const [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]);
    const [buf1, buf2] = await Promise.all([res1.arrayBuffer(), res2.arrayBuffer()]);

    // 3. Adicionar as imagens ao Workbook
    const imgId1 = workbook.addImage({
        buffer: buf1,
        extension: 'png',
    });
    const imgId2 = workbook.addImage({
        buffer: buf2,
        extension: 'png',
    });

    // 4. Inserir imagens na planilha de métricas (Gráficos)
    metricsSheet.addImage(imgId1, 'D2:I12');
    metricsSheet.addImage(imgId2, 'J2:O12');

  } catch(e) {
      console.warn("Não foi possível gerar as imagens dos gráficos.", e);
  }

  // ==========================================
  // PÁGINA 3: ORDEM DE SERVIÇO ABERTAS
  // ==========================================
  const osSheet = workbook.addWorksheet('ORDEM DE SERVIÇO ABERTAS');
  
  // O layout possui duas linhas de cabeçalho
  const osColsDef = [
    { header1: 'DATA DE', header2: 'INFORMAÇÕE', width: 14 },
    { header1: 'RESPONSÁVEL', header2: 'Quem abriu a O.S', width: 22 },
    { header1: 'PRÉDIOS', header2: 'RAD/CD/PA', width: 16 },
    { header1: 'ANDAR', header2: 'A', width: 14 },
    { header1: 'SETOR', header2: 'Sla. Quarto,', width: 25 },
    { header1: 'Dispositi', header2: 'Detector', width: 18 },
    { header1: '000.XXX.XX', header2: 'ID DO', width: 18 },
    { header1: 'XXXXXX', header2: 'Nº DA (OS)', width: 16 },
    { header1: 'DATA DO', header2: 'CONCERTO', width: 16 },
    { header1: 'Data da', header2: 'REMOVIDOS', width: 16 },
    { header1: 'PROFISSIONAL', header2: 'QUEM', width: 20 },
  ];

  osSheet.columns = osColsDef.map((col, idx) => ({ 
    header: col.header1, 
    key: `col${idx}`, 
    width: col.width 
  }));

  const osHeaderRow1 = osSheet.getRow(1);
  const osHeaderRow2 = osSheet.getRow(2);

  const osHeaderFill: ExcelJS.Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF9BC2E6' } }; // Light blue

  osColsDef.forEach((col, idx) => {
    // Linha 1
    const cell1 = osHeaderRow1.getCell(idx + 1);
    cell1.value = col.header1;
    cell1.font = { bold: true };
    cell1.fill = osHeaderFill;
    cell1.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
    
    // Linha 2
    const cell2 = osHeaderRow2.getCell(idx + 1);
    cell2.value = col.header2;
    cell2.font = { bold: false };
    cell2.fill = osHeaderFill;
    cell2.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
  });

  // Linha 3 conforme a imagem ("CENTRO DE")
  const osRow3 = osSheet.addRow([]);
  osRow3.getCell(3).value = 'CENTRO DE';
  osRow3.getCell(3).font = { bold: true, color: { argb: 'FFFF0000' } }; // Red
  
  const osDataFill: ExcelJS.Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFC6E0B4' } }; // Light green

  // Inserir os eventos na tabela de O.S (Filtrando os pertinentes, mas aqui enviaremos todos que não são Alarme falso e demandem check)
  // Ou enviaremos todos apenas como template. Vamos enviar todos como no mockup
  eventsData.forEach((row, index) => {
    const isMaintenance = row.reason.toLowerCase().includes('manutenção') || row.reason.toLowerCase().includes('removido');
    
    const osRowData = [
      row.date.slice(0, 5) + '/' + row.date.slice(8), // Ex: 07/01/26
      '?',
      row.building,
      row.floor,
      row.sector,
      'Sensores', // Default
      '##########', // Placeholder
      row.id.replace(/\D/g, '') + '00', // Mock OS number
      isMaintenance ? 'PENDENTE' : '', // Data do concerto mockup
      isMaintenance ? 'PENDENTE' : '', // Removidos mockup
      isMaintenance ? 'Nilton' : '' // Profissional mockup
    ];

    const addedRow = osSheet.addRow(osRowData);

    // Colorir linha e adicionar bordas
    for (let c = 1; c <= osColsDef.length; c++) {
      const cell = addedRow.getCell(c);
      cell.border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
      // Aplicar cor verde a colunas específicas (como na imagem, exceto B que parece branca e etc, mas vamos fazer verde onde tem dado mockado se for o padrão)
      // Baseado na imagem as colunas Data, Prédio, Andar, Setor, Disp. tem fundo verde.
      // E outras brancas dependendo da linha. Vamos colorir algumas para ficar parecido
      if (c === 1 || c === 3 || c === 4 || c === 5 || c === 6 || c === 9 || c === 10 || c === 11) {
         cell.fill = osDataFill;
      }
    }
  });

  // ==========================================
  // PÁGINA 4: EXTINTORES
  // ==========================================
  const extSheet = workbook.addWorksheet('Extintores');
  
  extSheet.columns = [
    { header: 'Patrimônio', key: 'patrim', width: 15 },
    { header: 'Nº de Extintor', key: 'num_extintor', width: 20 },
    { header: 'Tipo', key: 'tipo', width: 10 },
    { header: 'Capacidade', key: 'cap', width: 15 },
    { header: 'Próx. Recarga', key: 'prox_recarga', width: 15 },
    { header: 'Próx. Teste', key: 'prox_teste', width: 12 },
    { header: 'Ano Fab.', key: 'ano_fab', width: 10 },
    { header: 'Fabricante', key: 'fabricante', width: 20 },
    { header: 'Localização', key: 'localizacao', width: 35 },
    { header: 'Selo', key: 'selo', width: 15 },
    { header: 'Prédio', key: 'predio', width: 15 },
    { header: 'Retirado (Recarga)', key: 'retiradoParaRecarga', width: 20 },
    { header: 'Cobertura no Local', key: 'coberturaNoLocal', width: 20 },
    { header: 'Lacre/Pino', key: 'checkLacre', width: 15 },
    { header: 'Pressurização', key: 'checkPressurizacao', width: 15 },
    { header: 'Mangueira', key: 'checkMagueira', width: 15 },
    { header: 'Sinalização', key: 'checkSinalizacao', width: 15 },
    { header: 'Prédio', key: 'predio', width: 10 },
  ];

  const extHeaderRow = extSheet.getRow(1);
  extHeaderRow.font = { bold: true };
  const extHeaderFill: ExcelJS.Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF97316' } }; // Orange
  for (let i = 1; i <= 11; i++) {
    const cell = extHeaderRow.getCell(i);
    cell.fill = extHeaderFill;
    cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    cell.alignment = { horizontal: 'center' };
  }

  extinguishersData.forEach(row => {
    extSheet.addRow({
      patrim: row.patrim,
      num_extintor: row.num_extintor,
      tipo: row.tipo,
      cap: row.cap,
      prox_recarga: row.prox_recarga,
      prox_teste: parseInt(row.prox_teste, 10) || row.prox_teste,
      ano_fab: row.ano_fab,
      fabricante: row.fabricante,
      localizacao: row.localizacao,
      selo: row.selo,
      predio: row.predio
    });
  });

  // ==========================================
  // PÁGINA 5: MANGUEIRAS
  // ==========================================
  const hoseSheet = workbook.addWorksheet('Mangueiras');
  hoseSheet.columns = [
    { header: 'Patrimônio', key: 'patrim', width: 15 },
    { header: 'Nº Mangueira', key: 'num_mangueira', width: 15 },
    { header: 'Tipo', key: 'tipo', width: 10 },
    { header: 'Capacidade', key: 'cap', width: 15 },
    { header: 'Próx. Recarga', key: 'prox_recarga', width: 15 },
    { header: 'Próx. Teste', key: 'prox_teste', width: 12 },
    { header: 'Ano Fab.', key: 'ano_fab', width: 10 },
    { header: 'Fabricante', key: 'fabricante', width: 20 },
    { header: 'Localização', key: 'localizacao', width: 35 },
    { header: 'Selo', key: 'selo', width: 15 },
    { header: 'Prédio', key: 'predio', width: 15 },
    { header: 'Retirado (Recarga)', key: 'retiradoParaRecarga', width: 20 },
    { header: 'Cobertura no Local', key: 'coberturaNoLocal', width: 20 },
    { header: 'Lacre/Pino', key: 'checkLacre', width: 15 },
    { header: 'Pressurização', key: 'checkPressurizacao', width: 15 },
    { header: 'Mangueira', key: 'checkMagueira', width: 15 },
    { header: 'Sinalização', key: 'checkSinalizacao', width: 15 },
    { header: 'Prédio', key: 'predio', width: 10 },
  ];
  const hoseHeaderRow = hoseSheet.getRow(1);
  hoseHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  for (let i = 1; i <= 11; i++) {
    const cell = hoseHeaderRow.getCell(i);
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0284C7' } }; // Blue
    cell.alignment = { horizontal: 'center' };
  }
  hosesData.forEach(row => hoseSheet.addRow(row));

  // ==========================================
  // PÁGINA 6: DETECTORES
  // ==========================================
  const detectorSheet = workbook.addWorksheet('Detectores');
  detectorSheet.columns = [
    { header: 'Prédio', key: 'predio', width: 15 },
    { header: 'Número', key: 'numero', width: 15 },
    { header: 'Endereço MAC', key: 'endereco_mac', width: 20 },
    { header: 'Tipo', key: 'tipo', width: 15 },
    { header: 'Localização', key: 'localizacao', width: 35 },
  ];
  const detectorHeaderRow = detectorSheet.getRow(1);
  detectorHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  for (let i = 1; i <= 5; i++) {
    const cell = detectorHeaderRow.getCell(i);
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF9333EA' } }; // Purple
    cell.alignment = { horizontal: 'center' };
  }
  detectorsData.forEach(row => detectorSheet.addRow(row));

  // ==========================================
  // PÁGINA 7: AMPLIFICADORES
  // ==========================================
  const amplifierSheet = workbook.addWorksheet('Amplificadores');
  amplifierSheet.columns = [
    { header: 'Código/MAC', key: 'codigo_mac', width: 20 },
    { header: 'Status', key: 'status', width: 20 },
    { header: 'Grupo', key: 'grupo', width: 25 },
    { header: 'Localização', key: 'localizacao', width: 35 },
    { header: 'Data/Hora', key: 'data_hora', width: 20 },
  ];
  const amplifierHeaderRow = amplifierSheet.getRow(1);
  amplifierHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  for (let i = 1; i <= 5; i++) {
    const cell = amplifierHeaderRow.getCell(i);
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFDC2626' } }; // Red
    cell.alignment = { horizontal: 'center' };
  }
  amplifiersData.forEach(row => amplifierSheet.addRow(row));

  // ==========================================
  // PÁGINA 8: INSPEÇÕES ANTIGAS
  // ==========================================
  const inspecoesSheet = workbook.addWorksheet('Histórico Inspeções');
  inspecoesSheet.columns = [
    { header: 'ID', key: 'id', width: 15 },
    { header: 'Prédio / Sheet', key: 'sheet', width: 20 },
    { header: 'Prédio', key: 'predio', width: 15 },
    { header: 'Andar', key: 'andar', width: 15 },
    { header: 'Local', key: 'local', width: 25 },
    { header: 'ID Equipamento', key: 'id_equipamento', width: 15 },
    { header: 'Tipo', key: 'tipo', width: 15 },
    { header: 'Testado Central?', key: 'testado_central', width: 15 },
    { header: 'Conforme?', key: 'conforme', width: 15 },
    { header: 'Não Conforme?', key: 'nao_conforme', width: 15 },
    { header: 'Observação', key: 'observacao', width: 35 },
    { header: 'OS', key: 'os', width: 15 },
    { header: 'Status', key: 'status', width: 15 },
    { header: 'Status O.S', key: 'osStatus', width: 25 },
  ];
  const inspecoesHeaderRow = inspecoesSheet.getRow(1);
  inspecoesHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  for (let i = 1; i <= 13; i++) {
    const cell = inspecoesHeaderRow.getCell(i);
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF475569' } }; // Slate
    cell.alignment = { horizontal: 'center' };
  }
  inspecoesData.forEach(row => {
    inspecoesSheet.addRow({
      id: row.id,
      sheet: row.sheet,
      predio: row.predio,
      andar: row.andar,
      local: row.local,
      id_equipamento: row.id_equipamento,
      tipo: row.tipo,
      testado_central: row.testado_central ? 'Sim' : 'Não',
      conforme: row.conforme ? 'Sim' : 'Não',
      nao_conforme: row.nao_conforme ? 'Sim' : 'Não',
      observacao: row.observacao,
      os: row.os,
      status: row.status
    });
  });

  // ==========================================
  // PÁGINA 9: BRIGADA EAD
  // ==========================================
  const brigadaSheet = workbook.addWorksheet('Brigada EAD');
  brigadaSheet.columns = [
    { header: 'QTD', key: 'qtd', width: 10 },
    { header: 'Colaborador(a)', key: 'nome', width: 40 },
    { header: 'Setor', key: 'setor', width: 25 },
    { header: 'Cargo', key: 'cargo', width: 25 },
    { header: 'Situação', key: 'situacao', width: 15 },
    { header: 'Prova Teórica', key: 'status_prova', width: 15 },
    { header: 'Status Módulo', key: 'status_modulo', width: 15 },
    { header: '% Aproveitamento', key: 'aproveitamento', width: 15 },
    { header: 'Frequência', key: 'frequencia', width: 15 },
    { header: 'Observação', key: 'observacao', width: 30 },
  ];
  const brigadaHeaderRow = brigadaSheet.getRow(1);
  brigadaHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  for (let i = 1; i <= 10; i++) {
    const cell = brigadaHeaderRow.getCell(i);
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF059669' } }; // Emerald
    cell.alignment = { horizontal: 'center' };
  }
  brigadaData.forEach(row => brigadaSheet.addRow(row));

  // ==========================================
  // PÁGINA 10: FALTAS DO CURSO
  // ==========================================
  const faltasSheet = workbook.addWorksheet('Faltas Brigada');
  faltasSheet.columns = [
    { header: 'QTD', key: 'qtd', width: 8 },
    { header: 'Data', key: 'data', width: 12 },
    { header: 'Colaborador(a)', key: 'nome', width: 35 },
    { header: 'Nº Crachá', key: 'cracha', width: 15 },
    { header: 'Setor', key: 'setor', width: 25 },
    { header: 'Data Disp.', key: 'data_disp', width: 15 },
    { header: 'Observação', key: 'observacao', width: 45 },
  ];
  const faltasHeaderRow = faltasSheet.getRow(1);
  faltasHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  for (let i = 1; i <= 7; i++) {
    const cell = faltasHeaderRow.getCell(i);
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE11D48' } }; // Rose
    cell.alignment = { horizontal: 'center' };
  }
  faltasData.forEach(row => faltasSheet.addRow(row));

  // ==========================================
  // PÁGINA 11: DATAS DOS CURSOS
  // ==========================================
  const datasSheet = workbook.addWorksheet('Datas dos Cursos');
  datasSheet.columns = [
    { header: 'Qtd.', key: 'qtd', width: 8 },
    { header: 'Integração Data', key: 'data_integ', width: 15 },
    { header: 'Integração Dia', key: 'dia_integ', width: 15 },
    { header: 'Brigada Data', key: 'data_brigada', width: 15 },
    { header: 'Brigada Dia', key: 'dia_brigada', width: 15 },
    { header: 'Brigada Turno', key: 'turno_brigada', width: 30 },
    { header: '1º Socorros Data', key: 'data_socorros', width: 15 },
    { header: '1º Socorros Dia', key: 'dia_socorros', width: 15 },
    { header: '1º Socorros Turno', key: 'turno_socorros', width: 30 },
  ];
  const datasHeaderRow = datasSheet.getRow(1);
  datasHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  for (let i = 1; i <= 9; i++) {
    const cell = datasHeaderRow.getCell(i);
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0284C7' } }; // Blue
    cell.alignment = { horizontal: 'center' };
  }
  cursoDatas.forEach(row => datasSheet.addRow(row));

  // ==========================================
  // PÁGINA 12: AUDITORIA (LOGS)
  // ==========================================
  const auditSheet = workbook.addWorksheet('Auditoria');
  auditSheet.columns = [
    { header: 'Data/Hora', key: 'timestamp', width: 25 },
    { header: 'Ação', key: 'action', width: 15 },
    { header: 'ID Evento', key: 'eventId', width: 15 },
    { header: 'Detalhes', key: 'details', width: 80 },
  ];
  const auditHeaderRow = auditSheet.getRow(1);
  auditHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  for (let i = 1; i <= 4; i++) {
    const cell = auditHeaderRow.getCell(i);
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F2937' } }; // Gray 800
    cell.alignment = { horizontal: 'center' };
  }
  auditLogsData.forEach(row => {
    auditSheet.addRow({
      timestamp: new Date(row.timestamp).toLocaleString('pt-BR'),
      action: row.action,
      eventId: row.eventId,
      details: row.eventDescription
    });
  });

  // GERAR E EXPORTAR O ARQUIVO PARA O NAVEGADOR
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `Relatório_Ocorrências_${new Date().toISOString().split('T')[0]}.xlsx`);
}
