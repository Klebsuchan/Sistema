import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { EventData } from '../data';
import { Extinguisher } from '../data_extintores';
import { Hose } from '../data_hoses';
import { Detector } from '../data_detectors';
import { Amplifier } from '../data_amplificadores';

export async function exportEventsToExcel(events: EventData[]) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Ocorrências');

  worksheet.columns = [
    { header: 'Data', key: 'date', width: 12 },
    { header: 'Prédio', key: 'building', width: 15 },
    { header: 'Setor', key: 'sector', width: 20 },
    { header: 'Motivo', key: 'reason', width: 25 },
    { header: 'Status O.S', key: 'osStatus', width: 15 },
    { header: 'Nº O.S', key: 'numeroOS', width: 15 },
    { header: 'Prioridade', key: 'priority', width: 12 },
    { header: 'Atendimento Final', key: 'atendimentoFinal', width: 40 }
  ];

  events.forEach(e => {
    worksheet.addRow({
      date: e.date,
      building: e.building,
      sector: e.sector,
      reason: e.reason,
      osStatus: e.osStatus,
      numeroOS: e.numeroOS,
      priority: e.priority,
      atendimentoFinal: e.atendimentoFinal
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), 'Ocorrencias.xlsx');
}

export async function exportEventsToPDF(events: EventData[]) {
  const doc = new jsPDF('landscape');
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("RELATÓRIO DE OCORRÊNCIAS", 14, 20);
  
  const tableData = events.map(e => [
    e.date,
    e.building,
    e.sector,
    e.reason,
    e.numeroOS || '',
    e.osStatus,
    e.atendimentoFinal || ''
  ]);
  
  autoTable(doc, {
    startY: 30,
    head: [['DATA', 'PRÉDIO', 'SETOR', 'MOTIVO', 'Nº O.S', 'STATUS', 'ATENDIMENTO FINAL']],
    body: tableData,
    theme: 'grid',
    headStyles: { fillColor: [230, 230, 230], textColor: [0, 0, 0], fontStyle: 'bold' },
    styles: { fontSize: 8, cellPadding: 2 }
  });
  
  doc.save('Ocorrencias.pdf');
}

export async function exportExtinguishersToExcel(data: Extinguisher[]) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Extintores');
  worksheet.columns = [
    { header: 'Nº Extintor', key: 'num_extintor', width: 15 },
    { header: 'Patrimônio', key: 'patrim', width: 15 },
    { header: 'Prédio', key: 'predio', width: 15 },
    { header: 'Localização', key: 'localizacao', width: 25 },
    { header: 'Tipo', key: 'tipo', width: 15 },
    { header: 'Capacidade', key: 'cap', width: 15 },
    { header: 'Próx. Recarga', key: 'prox_recarga', width: 15 },
    { header: 'Próx. Teste', key: 'prox_teste', width: 15 }
  ];
  data.forEach(e => worksheet.addRow(e));
  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), 'Extintores.xlsx');
}

export async function exportHosesToExcel(data: Hose[]) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Mangueiras');
  worksheet.columns = [
    { header: 'Nº Mangueira', key: 'num_mangueira', width: 15 },
    { header: 'Patrimônio', key: 'patrim', width: 15 },
    { header: 'Prédio', key: 'predio', width: 15 },
    { header: 'Localização', key: 'localizacao', width: 25 },
    { header: 'Tipo', key: 'tipo', width: 15 },
    { header: 'Capacidade', key: 'cap', width: 15 },
    { header: 'Próx. Recarga', key: 'prox_recarga', width: 15 },
    { header: 'Próx. Teste', key: 'prox_teste', width: 15 }
  ];
  data.forEach(e => worksheet.addRow(e));
  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), 'Mangueiras.xlsx');
}

export async function exportDetectorsToExcel(data: Detector[]) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Detectores');
  worksheet.columns = [
    { header: 'Número', key: 'numero', width: 15 },
    { header: 'Endereço MAC', key: 'endereco_mac', width: 20 },
    { header: 'Tipo', key: 'tipo', width: 15 },
    { header: 'Prédio', key: 'predio', width: 15 },
    { header: 'Localização', key: 'localizacao', width: 25 }
  ];
  data.forEach(e => worksheet.addRow(e));
  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), 'Detectores.xlsx');
}

export async function exportAmplifiersToExcel(data: Amplifier[]) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Amplificadores');
  worksheet.columns = [
    { header: 'Código MAC', key: 'codigo_mac', width: 20 },
    { header: 'Status', key: 'status', width: 15 },
    { header: 'Grupo', key: 'grupo', width: 15 },
    { header: 'Localização', key: 'localizacao', width: 25 },
    { header: 'Data/Hora', key: 'data_hora', width: 20 }
  ];
  data.forEach(e => worksheet.addRow(e));
  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), 'Amplificadores.xlsx');
}

export async function exportInspecoesToExcel(data: any[]) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Inspeções');
  worksheet.columns = [
    { header: 'Data', key: 'data', width: 15 },
    { header: 'Turno', key: 'turno', width: 15 },
    { header: 'Inspetor', key: 'inspetor', width: 25 },
    { header: 'Itens Inspecionados', key: 'itens', width: 30 }
  ];
  data.forEach(e => worksheet.addRow(e));
  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), 'Inspecoes.xlsx');
}

export async function exportInspecoesToPDF(data: any[]) {
  const doc = new jsPDF('landscape');
  doc.setFontSize(14);
  doc.text("RELATÓRIO DE INSPEÇÕES ANTIGAS", 14, 20);
  const tableData = data.map(e => [e.data, e.turno, e.inspetor, e.itens]);
  autoTable(doc, {
    startY: 30,
    head: [['DATA', 'TURNO', 'INSPETOR', 'ITENS INSPECIONADOS']],
    body: tableData,
    theme: 'grid'
  });
  doc.save('Inspecoes.pdf');
}

export async function exportBrigadaToExcel(data: any[]) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Brigada');
  worksheet.columns = [
    { header: 'Nome', key: 'nome', width: 25 },
    { header: 'Prédio', key: 'predio', width: 15 },
    { header: 'Setor', key: 'setor', width: 20 },
    { header: 'Status EAD', key: 'status_ead', width: 15 },
    { header: 'Status Prática', key: 'status_pratica', width: 15 }
  ];
  data.forEach(e => worksheet.addRow(e));
  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), 'Brigada.xlsx');
}

export async function exportBrigadaToPDF(data: any[]) {
  const doc = new jsPDF('landscape');
  doc.setFontSize(14);
  doc.text("RELATÓRIO DA BRIGADA", 14, 20);
  const tableData = data.map(e => [e.nome, e.predio, e.setor, e.status_ead, e.status_pratica]);
  autoTable(doc, {
    startY: 30,
    head: [['NOME', 'PRÉDIO', 'SETOR', 'EAD', 'PRÁTICA']],
    body: tableData,
    theme: 'grid'
  });
  doc.save('Brigada.pdf');
}
