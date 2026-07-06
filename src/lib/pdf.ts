import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Extinguisher } from '../data_extintores';
import { Hose } from '../data_hoses';
import { Detector } from '../data_detectors';
import { Amplifier } from '../data_amplificadores';

export async function exportExtinguishersToPDF(extinguishers: Extinguisher[]) {
  const doc = new jsPDF('landscape');
  
  // Custom headers simulating the uploaded PDF
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("JMC COMERCIO DE EQUIP. CONTRA INCENDIO LTDA", 14, 20);
  
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text("RUA RUFINO DOS SANTOS, 112 - SAO CRISTOVAO - PASSO FUNDO - RS - CEP: 99060-320", 14, 26);
  doc.text("(54) 99151-4797 | administrativo@jmcextincendio.com.br", 14, 30);

  const predio = extinguishers[0]?.predio;
  let clienteText = "14615 - ASSOC HOSP BENEF SAO VICENTE DE PAULO - RAD"; // Default
  if (predio === 'PA') {
    clienteText = "14361 - ASSOC HOSP BENEF SAO VICENTE DE PAULO - PRE";
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Cliente:", 14, 40);
  doc.setFont("helvetica", "normal");
  doc.text(clienteText, 28, 40);

  doc.setFont("helvetica", "bold");
  doc.text("Endereço:", 14, 45);
  doc.setFont("helvetica", "normal");
  doc.text("RUA TEIXEIRA SOARES, 808 - CENTRO - PASSO FUNDO | RS", 32, 45);

  doc.setFont("helvetica", "bold");
  doc.text("Contato:", 14, 50);
  doc.setFont("helvetica", "normal");
  doc.text("ALEX", 28, 50);

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("RELATÓRIO DE EXTINTORES", 14, 60);

  const tableData = extinguishers.map(ext => [
    ext.patrim,
    ext.num_extintor,
    ext.tipo,
    ext.cap,
    ext.prox_recarga,
    ext.prox_teste,
    ext.ano_fab || '',
    ext.fabricante || '',
    ext.localizacao,
    ext.selo || ''
  ]);

  autoTable(doc, {
    startY: 65,
    head: [['PATRIM.', 'Nº DE EXTINTOR', 'TIPO', 'CAP.', 'PROX. RECARGA', 'PRÓX.TESTE', 'ANO FAB.', 'FABRICANTE', 'LOCALIZAÇÃO', 'SELO']],
    body: tableData,
    theme: 'grid',
    headStyles: {
      fillColor: [230, 230, 230],
      textColor: [0, 0, 0],
      fontStyle: 'bold',
    },
    styles: {
      fontSize: 8,
      cellPadding: 2,
    },
  });

  doc.save('Relatorio_Extintores.pdf');
}

export async function exportHosesToPDF(hoses: Hose[]) {
  const doc = new jsPDF('landscape');
  
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("RELATÓRIO DE MANGUEIRAS", 14, 20);

  const tableData = hoses.map(ext => [
    ext.predio || '',
    ext.num_mangueira,
    ext.tipo,
    ext.cap,
    ext.prox_recarga,
    ext.prox_teste,
    ext.localizacao
  ]);

  autoTable(doc, {
    startY: 30,
    head: [['PRÉDIO', 'Nº MANGUEIRA', 'TIPO', 'CAPACIDADE', 'REC.', 'TESTE', 'LOCALIZAÇÃO']],
    body: tableData,
    theme: 'grid',
    headStyles: {
      fillColor: [230, 230, 230],
      textColor: [0, 0, 0],
      fontStyle: 'bold',
    },
    styles: {
      fontSize: 8,
      cellPadding: 2,
    },
  });

  doc.save('Relatorio_Mangueiras.pdf');
}

export async function exportDetectorsToPDF(detectors: Detector[]) {
  const doc = new jsPDF('landscape');
  
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("RELATÓRIO DE DETECTORES E ACIONADORES", 14, 20);

  const tableData = detectors.map(det => [
    det.predio || 'Geral',
    det.numero,
    det.endereco_mac,
    det.tipo,
    det.localizacao
  ]);

  autoTable(doc, {
    startY: 30,
    head: [['PRÉDIO', 'NÚMERO', 'ENDEREÇO MAC', 'TIPO', 'LOCALIZAÇÃO']],
    body: tableData,
    theme: 'grid',
    headStyles: {
      fillColor: [230, 230, 230],
      textColor: [0, 0, 0],
      fontStyle: 'bold',
    },
    styles: {
      fontSize: 8,
      cellPadding: 2,
    },
  });

  doc.save('Relatorio_Detectores.pdf');
}

export async function exportAmplifiersToPDF(amplifiers: Amplifier[]) {
  const doc = new jsPDF('landscape');
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('RELATÓRIO DE AMPLIFICADORES', 14, 20);

  const tableData = amplifiers.map(amp => [
    amp.codigo_mac,
    amp.status,
    amp.grupo,
    amp.localizacao,
    amp.data_hora
  ]);

  autoTable(doc, {
    startY: 30,
    head: [['CÓD MAC', 'STATUS', 'GRUPO', 'LOCALIZAÇÃO', 'DATA/HORA']],
    body: tableData,
    theme: 'grid',
    headStyles: {
      fillColor: [230, 230, 230],
      textColor: [0, 0, 0],
      fontStyle: 'bold',
    },
    styles: {
      fontSize: 8,
      cellPadding: 2,
    },
  });

  doc.save('Relatorio_Amplificadores.pdf');
}
