export interface Detector {
  id: string;
  numero: string;
  endereco_mac: string;
  tipo: string;
  localizacao: string;
  predio?: string;
}

export const initialDetectors: Detector[] = [
  {
    "id": "DET-0-01600000",
    "numero": "01600000",
    "endereco_mac": "000.122.047.103",
    "tipo": "Acionador Manual",
    "localizacao": "1 - TESTE",
    "predio": "Geral"
  },
  {
    "id": "DET-1-0001",
    "numero": "0001",
    "endereco_mac": "000.101.047.045",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.SUB.SOLO.1",
    "predio": "CD"
  },
  {
    "id": "DET-2-0002",
    "numero": "0002",
    "endereco_mac": "000.101.047.032",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.SUB.SOLO.2",
    "predio": "CD"
  },
  {
    "id": "DET-3-0003",
    "numero": "0003",
    "endereco_mac": "000.101.047.059",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.SUB.SOLO.3",
    "predio": "CD"
  },
  {
    "id": "DET-4-0004",
    "numero": "0004",
    "endereco_mac": "000.101.047.040",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.SUB.SOLO.4",
    "predio": "CD"
  },
  {
    "id": "DET-5-0005",
    "numero": "0005",
    "endereco_mac": "000.101.047.052",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.SUB.SOLO.5",
    "predio": "CD"
  },
  {
    "id": "DET-6-0006",
    "numero": "0006",
    "endereco_mac": "000.101.049.076",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.SUB.SOLO.6",
    "predio": "CD"
  },
  {
    "id": "DET-7-0007",
    "numero": "0007",
    "endereco_mac": "000.127.147.157",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD.SUB.SOLO.ESCA",
    "predio": "CD"
  },
  {
    "id": "DET-8-0008",
    "numero": "0008",
    "endereco_mac": "000.101.047.074",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD1AND.ROUP ARIA2",
    "predio": "CD"
  },
  {
    "id": "DET-9-0009",
    "numero": "0009",
    "endereco_mac": "000.101.049.092",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD1AND.ROUP ARIA1",
    "predio": "CD"
  },
  {
    "id": "DET-10-0010",
    "numero": "0010",
    "endereco_mac": "000.101.045.1 19",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD1AND.RESIDENCI",
    "predio": "CD"
  },
  {
    "id": "DET-11-0012",
    "numero": "0012",
    "endereco_mac": "000.101.070.064",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD1AND.SL.LAUDOS",
    "predio": "CD"
  },
  {
    "id": "DET-12-0013",
    "numero": "0013",
    "endereco_mac": "000.101.050.024",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD1AND.SL.ESPER1",
    "predio": "CD"
  },
  {
    "id": "DET-13-0014",
    "numero": "0014",
    "endereco_mac": "000.101.049.071",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - ?",
    "predio": "Geral"
  },
  {
    "id": "DET-14-0015",
    "numero": "0015",
    "endereco_mac": "000.101.049.107",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - SOT ON 7.2",
    "predio": "Geral"
  },
  {
    "id": "DET-15-0016",
    "numero": "0016",
    "endereco_mac": "000.101.049.090",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD1AND.EXA.SUPE2",
    "predio": "CD"
  },
  {
    "id": "DET-16-0017",
    "numero": "0017",
    "endereco_mac": "000.101.050.025",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD1AND.MAN.RADIO",
    "predio": "CD"
  },
  {
    "id": "DET-17-0018",
    "numero": "0018",
    "endereco_mac": "000.127.147.138",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 1AND.ELEV ADOR",
    "predio": "CD"
  },
  {
    "id": "DET-18-0019",
    "numero": "0019",
    "endereco_mac": "000.101.045.122",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD1AND.DESCAN.01",
    "predio": "CD"
  },
  {
    "id": "DET-19-0020",
    "numero": "0020",
    "endereco_mac": "000.101.049.084",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.1AND.BANCO1",
    "predio": "CD"
  },
  {
    "id": "DET-20-0021",
    "numero": "0021",
    "endereco_mac": "000.101.049.1 17",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD1AND.BANCO2",
    "predio": "CD"
  },
  {
    "id": "DET-21-0022",
    "numero": "0022",
    "endereco_mac": "000.101.047.069",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.1AND.DEPOSIT O",
    "predio": "CD"
  },
  {
    "id": "DET-22-0023",
    "numero": "0023",
    "endereco_mac": "000.101.049.081",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.ENFERM 01",
    "predio": "Geral"
  },
  {
    "id": "DET-23-0024",
    "numero": "0024",
    "endereco_mac": "000.101.049.053",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.QUAR T .250",
    "predio": "Geral"
  },
  {
    "id": "DET-24-0025",
    "numero": "0025",
    "endereco_mac": "000.101.047.026",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD2AND.HAL.EN.RX",
    "predio": "CD"
  },
  {
    "id": "DET-25-0026",
    "numero": "0026",
    "endereco_mac": "000.101.049.041",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD2AND.SL.RX",
    "predio": "CD"
  },
  {
    "id": "DET-26-0027",
    "numero": "0027",
    "endereco_mac": "000.101.047.038",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD2AND.VEST .P AC",
    "predio": "CD"
  },
  {
    "id": "DET-27-0028",
    "numero": "0028",
    "endereco_mac": "000.101.049.072",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD2AND.SL.T OMO",
    "predio": "CD"
  },
  {
    "id": "DET-28-0029",
    "numero": "0029",
    "endereco_mac": "000.101.047.078",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD2AND.SL.PREP",
    "predio": "CD"
  },
  {
    "id": "DET-29-0030",
    "numero": "0030",
    "endereco_mac": "000.101.048.043",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - T OMO.SL.LAUDO",
    "predio": "Geral"
  },
  {
    "id": "DET-30-0031",
    "numero": "0031",
    "endereco_mac": "000.101.049.074",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - T OMO.SL.COMANDO",
    "predio": "Geral"
  },
  {
    "id": "DET-31-0032",
    "numero": "0032",
    "endereco_mac": "000.101.047.055",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD2AND.T OMOGRAF",
    "predio": "CD"
  },
  {
    "id": "DET-32-0033",
    "numero": "0033",
    "endereco_mac": "000.101.049.096",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 2AND.SL DIGIT",
    "predio": "CD"
  },
  {
    "id": "DET-33-0034",
    "numero": "0034",
    "endereco_mac": "000.101.047.037",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD2AND.SL.MEDIC",
    "predio": "CD"
  },
  {
    "id": "DET-34-0035",
    "numero": "0035",
    "endereco_mac": "000.127.147.121",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD2AND.CORREDO",
    "predio": "CD"
  },
  {
    "id": "DET-35-0036",
    "numero": "0036",
    "endereco_mac": "000.127.147.098",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD2AND.ELEV ADOR",
    "predio": "CD"
  },
  {
    "id": "DET-36-0037",
    "numero": "0037",
    "endereco_mac": "000.101.049.120",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.2AND.SL.EXA.1",
    "predio": "CD"
  },
  {
    "id": "DET-37-0038",
    "numero": "0038",
    "endereco_mac": "000.101.049.1 16",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.2AND.SL.LAUDO",
    "predio": "CD"
  },
  {
    "id": "DET-38-0039",
    "numero": "0039",
    "endereco_mac": "000.101.049.035",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.2AND.SL.EXA.2",
    "predio": "CD"
  },
  {
    "id": "DET-39-0040",
    "numero": "0040",
    "endereco_mac": "000.101.049.077",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.2AND.SL.EXA.3",
    "predio": "CD"
  },
  {
    "id": "DET-40-0041",
    "numero": "0041",
    "endereco_mac": "000.101.047.071",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.2AND.SL.EXA.4",
    "predio": "CD"
  },
  {
    "id": "DET-41-0042",
    "numero": "0042",
    "endereco_mac": "000.101.049.108",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND SL.7",
    "predio": "CD"
  },
  {
    "id": "DET-42-0043",
    "numero": "0043",
    "endereco_mac": "000.101.049.043",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND SL 8",
    "predio": "CD"
  },
  {
    "id": "DET-43-0044",
    "numero": "0044",
    "endereco_mac": "000.101.048.1 10",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND.SL012",
    "predio": "CD"
  },
  {
    "id": "DET-44-0045",
    "numero": "0045",
    "endereco_mac": "000.101.049.122",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND SL.9",
    "predio": "CD"
  },
  {
    "id": "DET-45-0046",
    "numero": "0046",
    "endereco_mac": "000.101.048.1 13",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND.ESPE.CAR",
    "predio": "CD"
  },
  {
    "id": "DET-46-0047",
    "numero": "0047",
    "endereco_mac": "000.101.049.059",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND.SL.1 1",
    "predio": "CD"
  },
  {
    "id": "DET-47-0048",
    "numero": "0048",
    "endereco_mac": "000.101.047.030",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND.SL010",
    "predio": "CD"
  },
  {
    "id": "DET-48-0049",
    "numero": "0049",
    "endereco_mac": "000.101.049.040",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND.SL LANC",
    "predio": "CD"
  },
  {
    "id": "DET-49-0050",
    "numero": "0050",
    "endereco_mac": "000.101.049.105",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND SL.5",
    "predio": "CD"
  },
  {
    "id": "DET-50-0051",
    "numero": "0051",
    "endereco_mac": "000.101.049.067",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD3AND.ECOCARD4",
    "predio": "CD"
  },
  {
    "id": "DET-51-0052",
    "numero": "0052",
    "endereco_mac": "000.101.049.100",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND.CARDIO.3",
    "predio": "CD"
  },
  {
    "id": "DET-52-0053",
    "numero": "0053",
    "endereco_mac": "000.101.049.094",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND.SL01",
    "predio": "CD"
  },
  {
    "id": "DET-53-0054",
    "numero": "0054",
    "endereco_mac": "000.101.049.126",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD3AND.COLET A 01",
    "predio": "CD"
  },
  {
    "id": "DET-54-0055",
    "numero": "0055",
    "endereco_mac": "000.101.049.068",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD3AND.COLET A 02",
    "predio": "CD"
  },
  {
    "id": "DET-55-0056",
    "numero": "0056",
    "endereco_mac": "000.101.049.101",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD3AND.COLET A 03",
    "predio": "CD"
  },
  {
    "id": "DET-56-0057",
    "numero": "0057",
    "endereco_mac": "000.101.047.051",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD3AND.COLET A 04",
    "predio": "CD"
  },
  {
    "id": "DET-57-0058",
    "numero": "0058",
    "endereco_mac": "000.101.049.085",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD3AND SL ESPERA",
    "predio": "CD"
  },
  {
    "id": "DET-58-0059",
    "numero": "0059",
    "endereco_mac": "000.101.047.057",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND SL.MA T",
    "predio": "CD"
  },
  {
    "id": "DET-59-0060",
    "numero": "0060",
    "endereco_mac": "000.101.049.099",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND.LIMPEZA",
    "predio": "CD"
  },
  {
    "id": "DET-60-0061",
    "numero": "0061",
    "endereco_mac": "000.101.049.121",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND.LAUDOS",
    "predio": "CD"
  },
  {
    "id": "DET-61-0062",
    "numero": "0062",
    "endereco_mac": "000.101.047.024",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND SL.5",
    "predio": "CD"
  },
  {
    "id": "DET-62-0063",
    "numero": "0063",
    "endereco_mac": "000.101.049.070",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND SL.3",
    "predio": "CD"
  },
  {
    "id": "DET-63-0064",
    "numero": "0064",
    "endereco_mac": "000.101.050.023",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND ENDO.SL2",
    "predio": "CD"
  },
  {
    "id": "DET-64-0065",
    "numero": "0065",
    "endereco_mac": "000.101.049.1 18",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND SL.RECUP",
    "predio": "CD"
  },
  {
    "id": "DET-65-0066",
    "numero": "0066",
    "endereco_mac": "000.101.047.039",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND F A TURAM",
    "predio": "CD"
  },
  {
    "id": "DET-66-0067",
    "numero": "0067",
    "endereco_mac": "000.127.147.103",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 3AND CORREDOR",
    "predio": "CD"
  },
  {
    "id": "DET-67-0068",
    "numero": "0068",
    "endereco_mac": "000.127.147.158",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 3AND ELEV ADOR",
    "predio": "CD"
  },
  {
    "id": "DET-68-0069",
    "numero": "0069",
    "endereco_mac": "000.101.047.035",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND ECOC.SL2",
    "predio": "CD"
  },
  {
    "id": "DET-69-0070",
    "numero": "0070",
    "endereco_mac": "000.101.049.093",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.3AND.FONO1",
    "predio": "CD"
  },
  {
    "id": "DET-70-0071",
    "numero": "0071",
    "endereco_mac": "000.101.049.102",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.3AND.FONO2",
    "predio": "CD"
  },
  {
    "id": "DET-71-0072",
    "numero": "0072",
    "endereco_mac": "000.101.047.046",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND.SL.CIRUR2",
    "predio": "CD"
  },
  {
    "id": "DET-72-0073",
    "numero": "0073",
    "endereco_mac": "000.101.049.075",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND CTI.CARD1",
    "predio": "CD"
  },
  {
    "id": "DET-73-0074",
    "numero": "0074",
    "endereco_mac": "000.101.047.049",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND CTI.CARD2",
    "predio": "CD"
  },
  {
    "id": "DET-74-0075",
    "numero": "0075",
    "endereco_mac": "000.101.047.048",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND CTI.CARD3",
    "predio": "CD"
  },
  {
    "id": "DET-75-0076",
    "numero": "0076",
    "endereco_mac": "000.101.045.126",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND CTI.DESCA",
    "predio": "CD"
  },
  {
    "id": "DET-76-0077",
    "numero": "0077",
    "endereco_mac": "000.101.047.053",
    "tipo": "Detector de T emperatura",
    "localizacao": "1 - CD 4AND COP A",
    "predio": "CD"
  },
  {
    "id": "DET-77-0078",
    "numero": "0078",
    "endereco_mac": "000.101.049.1 10",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 4AND SL.EQUIP",
    "predio": "CD"
  },
  {
    "id": "DET-78-0079",
    "numero": "0079",
    "endereco_mac": "000.101.049.106",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 4AND VEST .FEM",
    "predio": "CD"
  },
  {
    "id": "DET-79-0080",
    "numero": "0080",
    "endereco_mac": "000.101.049.1 1 1",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND VEST .P ACI",
    "predio": "CD"
  },
  {
    "id": "DET-80-0081",
    "numero": "0081",
    "endereco_mac": "000.101.049.069",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND.REC HEMOD",
    "predio": "CD"
  },
  {
    "id": "DET-81-0082",
    "numero": "0082",
    "endereco_mac": "000.101.047.073",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 4AND.COMANDO",
    "predio": "CD"
  },
  {
    "id": "DET-82-0083",
    "numero": "0083",
    "endereco_mac": "000.101.049.073",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND.MA T .HEMO",
    "predio": "CD"
  },
  {
    "id": "DET-83-0084",
    "numero": "0084",
    "endereco_mac": "000.101.049.087",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 4AND CONSUL T",
    "predio": "CD"
  },
  {
    "id": "DET-84-0085",
    "numero": "0085",
    "endereco_mac": "000.101.047.047",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 4AND SL.LANCH",
    "predio": "CD"
  },
  {
    "id": "DET-85-0086",
    "numero": "0086",
    "endereco_mac": "000.101.045.124",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 4AND SL.CEC",
    "predio": "CD"
  },
  {
    "id": "DET-86-0087",
    "numero": "0087",
    "endereco_mac": "000.101.049.091",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND SL.UTILID",
    "predio": "CD"
  },
  {
    "id": "DET-87-0088",
    "numero": "0088",
    "endereco_mac": "000.101.049.083",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 4AND RAIO X",
    "predio": "CD"
  },
  {
    "id": "DET-88-0089",
    "numero": "0089",
    "endereco_mac": "000.101.049.089",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND SL.MA T .02",
    "predio": "CD"
  },
  {
    "id": "DET-89-0090",
    "numero": "0090",
    "endereco_mac": "000.101.047.067",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND SL.MA T .01",
    "predio": "CD"
  },
  {
    "id": "DET-90-0091",
    "numero": "0091",
    "endereco_mac": "000.101.049.124",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 4AND.VEST .FEM",
    "predio": "CD"
  },
  {
    "id": "DET-91-0092",
    "numero": "0092",
    "endereco_mac": "000.101.047.077",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND.VEST .MASC",
    "predio": "CD"
  },
  {
    "id": "DET-92-0093",
    "numero": "0093",
    "endereco_mac": "000.101.047.042",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND SAL LANCH",
    "predio": "CD"
  },
  {
    "id": "DET-93-0094",
    "numero": "0094",
    "endereco_mac": "000.101.049.061",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD4AND SL.CIR.01",
    "predio": "CD"
  },
  {
    "id": "DET-94-0095",
    "numero": "0095",
    "endereco_mac": "000.101.047.029",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 4AND CTI.CAR4",
    "predio": "CD"
  },
  {
    "id": "DET-95-0096",
    "numero": "0096",
    "endereco_mac": "000.127.147.130",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 4AND CORREDOR",
    "predio": "CD"
  },
  {
    "id": "DET-96-0097",
    "numero": "0097",
    "endereco_mac": "000.127.147.100",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 04AND.ELEV AD",
    "predio": "CD"
  },
  {
    "id": "DET-97-0098",
    "numero": "0098",
    "endereco_mac": "000.101.049.088",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD1AND.DESCAN.02",
    "predio": "CD"
  },
  {
    "id": "DET-98-0099",
    "numero": "0099",
    "endereco_mac": "000.101.047.022",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 05AND QUA.501",
    "predio": "CD"
  },
  {
    "id": "DET-99-0100",
    "numero": "0100",
    "endereco_mac": "000.101.049.079",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 05AND QUA.503",
    "predio": "CD"
  },
  {
    "id": "DET-100-0101",
    "numero": "0101",
    "endereco_mac": "000.101.049.095",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 05AND QUA.505",
    "predio": "CD"
  },
  {
    "id": "DET-101-0102",
    "numero": "0102",
    "endereco_mac": "000.101.050.022",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 05AND QUA.507",
    "predio": "CD"
  },
  {
    "id": "DET-102-0103",
    "numero": "0103",
    "endereco_mac": "000.101.049.125",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 05AND QUA.508",
    "predio": "CD"
  },
  {
    "id": "DET-103-0104",
    "numero": "0104",
    "endereco_mac": "000.101.047.043",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 05AND QUA.509",
    "predio": "CD"
  },
  {
    "id": "DET-104-0105",
    "numero": "0105",
    "endereco_mac": "000.101.049.1 19",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 05AND QUA.510",
    "predio": "CD"
  },
  {
    "id": "DET-105-0106",
    "numero": "0106",
    "endereco_mac": "000.101.049.1 13",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 05AND SL.MA T",
    "predio": "CD"
  },
  {
    "id": "DET-106-0107",
    "numero": "0107",
    "endereco_mac": "000.101.047.068",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - POST12.QUR T O.31 1",
    "predio": "Geral"
  },
  {
    "id": "DET-107-0108",
    "numero": "0108",
    "endereco_mac": "000.101.047.072",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 05AND QUA.502",
    "predio": "CD"
  },
  {
    "id": "DET-108-0109",
    "numero": "0109",
    "endereco_mac": "000.101.049.109",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 05AND QUA.504",
    "predio": "CD"
  },
  {
    "id": "DET-109-0120",
    "numero": "0120",
    "endereco_mac": "000.127.147.1 12",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 05AND CORREDO",
    "predio": "CD"
  },
  {
    "id": "DET-110-0121",
    "numero": "0121",
    "endereco_mac": "000.101.050.1 15",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.601",
    "predio": "CD"
  },
  {
    "id": "DET-111-0122",
    "numero": "0122",
    "endereco_mac": "000.101.051.070",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.603",
    "predio": "CD"
  },
  {
    "id": "DET-112-0123",
    "numero": "0123",
    "endereco_mac": "000.101.051.099",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.605",
    "predio": "CD"
  },
  {
    "id": "DET-113-0124",
    "numero": "0124",
    "endereco_mac": "000.101.051.022",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.602",
    "predio": "CD"
  },
  {
    "id": "DET-114-0125",
    "numero": "0125",
    "endereco_mac": "000.101.051.069",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.606",
    "predio": "CD"
  },
  {
    "id": "DET-115-0126",
    "numero": "0126",
    "endereco_mac": "000.101.051.026",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.607",
    "predio": "CD"
  },
  {
    "id": "DET-116-0127",
    "numero": "0127",
    "endereco_mac": "000.101.050.124",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.608",
    "predio": "CD"
  },
  {
    "id": "DET-117-0128",
    "numero": "0128",
    "endereco_mac": "000.101.050.126",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.609",
    "predio": "CD"
  },
  {
    "id": "DET-118-0129",
    "numero": "0129",
    "endereco_mac": "000.101.050.094",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.610",
    "predio": "CD"
  },
  {
    "id": "DET-119-0130",
    "numero": "0130",
    "endereco_mac": "000.101.052.034",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND.SL.MA TE",
    "predio": "CD"
  },
  {
    "id": "DET-120-0131",
    "numero": "0131",
    "endereco_mac": "000.101.052.021",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND.SL.LANC",
    "predio": "CD"
  },
  {
    "id": "DET-121-0132",
    "numero": "0132",
    "endereco_mac": "000.101.051.032",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND.POST .16",
    "predio": "CD"
  },
  {
    "id": "DET-122-0133",
    "numero": "0133",
    "endereco_mac": "000.101.052.069",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.61 1",
    "predio": "CD"
  },
  {
    "id": "DET-123-0134",
    "numero": "0134",
    "endereco_mac": "000.101.051.050",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.612",
    "predio": "CD"
  },
  {
    "id": "DET-124-0135",
    "numero": "0135",
    "endereco_mac": "000.101.052.049",
    "tipo": "Detector de T emperatura",
    "localizacao": "1 - CD 06AND COP A",
    "predio": "CD"
  },
  {
    "id": "DET-125-0136",
    "numero": "0136",
    "endereco_mac": "000.101.051.041",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.613",
    "predio": "CD"
  },
  {
    "id": "DET-126-0137",
    "numero": "0137",
    "endereco_mac": "000.101.051.039",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.614",
    "predio": "CD"
  },
  {
    "id": "DET-127-0138",
    "numero": "0138",
    "endereco_mac": "000.101.050.098",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.615",
    "predio": "CD"
  },
  {
    "id": "DET-128-0139",
    "numero": "0139",
    "endereco_mac": "000.101.052.026",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.616",
    "predio": "CD"
  },
  {
    "id": "DET-129-0140",
    "numero": "0140",
    "endereco_mac": "000.127.147.099",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 06AND ELEV ADO",
    "predio": "CD"
  },
  {
    "id": "DET-130-0141",
    "numero": "0141",
    "endereco_mac": "000.127.147.140",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 06AND CORREDO",
    "predio": "CD"
  },
  {
    "id": "DET-131-0142",
    "numero": "0142",
    "endereco_mac": "000.101.052.046",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.701",
    "predio": "CD"
  },
  {
    "id": "DET-132-0143",
    "numero": "0143",
    "endereco_mac": "000.101.052.067",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.703",
    "predio": "CD"
  },
  {
    "id": "DET-133-0144",
    "numero": "0144",
    "endereco_mac": "000.101.052.044",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.705",
    "predio": "CD"
  },
  {
    "id": "DET-134-0145",
    "numero": "0145",
    "endereco_mac": "000.101.052.033",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.708",
    "predio": "CD"
  },
  {
    "id": "DET-135-0146",
    "numero": "0146",
    "endereco_mac": "000.101.052.071",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.702",
    "predio": "CD"
  },
  {
    "id": "DET-136-0147",
    "numero": "0147",
    "endereco_mac": "000.101.052.035",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.704",
    "predio": "CD"
  },
  {
    "id": "DET-137-0148",
    "numero": "0148",
    "endereco_mac": "000.101.101.101",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - INA TIVO",
    "predio": "Geral"
  },
  {
    "id": "DET-138-0149",
    "numero": "0149",
    "endereco_mac": "000.101.052.042",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND P .17ENF",
    "predio": "CD"
  },
  {
    "id": "DET-139-0150",
    "numero": "0150",
    "endereco_mac": "000.101.051.053",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND SL MA TE",
    "predio": "CD"
  },
  {
    "id": "DET-140-0151",
    "numero": "0151",
    "endereco_mac": "000.101.052.076",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND SL.LANC",
    "predio": "CD"
  },
  {
    "id": "DET-141-0152",
    "numero": "0152",
    "endereco_mac": "000.101.052.058",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.71 1",
    "predio": "CD"
  },
  {
    "id": "DET-142-0153",
    "numero": "0153",
    "endereco_mac": "000.101.052.023",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.712",
    "predio": "CD"
  },
  {
    "id": "DET-143-0154",
    "numero": "0154",
    "endereco_mac": "000.101.052.060",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.713",
    "predio": "CD"
  },
  {
    "id": "DET-144-0155",
    "numero": "0155",
    "endereco_mac": "000.101.052.050",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.714",
    "predio": "CD"
  },
  {
    "id": "DET-145-0156",
    "numero": "0156",
    "endereco_mac": "000.101.052.048",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.715",
    "predio": "CD"
  },
  {
    "id": "DET-146-0157",
    "numero": "0157",
    "endereco_mac": "000.101.052.038",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.716",
    "predio": "CD"
  },
  {
    "id": "DET-147-0158",
    "numero": "0158",
    "endereco_mac": "000.101.052.068",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND COP A",
    "predio": "CD"
  },
  {
    "id": "DET-148-0159",
    "numero": "0159",
    "endereco_mac": "000.101.052.078",
    "tipo": "Detector de Fumaça",
    "localizacao": "000.127.147.146",
    "predio": "Geral"
  },
  {
    "id": "DET-149-0161",
    "numero": "0161",
    "endereco_mac": "000.127.147.108",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 07AND ELEV ADO",
    "predio": "CD"
  },
  {
    "id": "DET-150-0162",
    "numero": "0162",
    "endereco_mac": "000.101.051.122",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND QUA.707",
    "predio": "CD"
  },
  {
    "id": "DET-151-0163",
    "numero": "0163",
    "endereco_mac": "000.101.051.124",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.801",
    "predio": "CD"
  },
  {
    "id": "DET-152-0164",
    "numero": "0164",
    "endereco_mac": "000.101.052.056",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.803",
    "predio": "CD"
  },
  {
    "id": "DET-153-0165",
    "numero": "0165",
    "endereco_mac": "000.101.051.120",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.805",
    "predio": "CD"
  },
  {
    "id": "DET-154-0166",
    "numero": "0166",
    "endereco_mac": "000.101.052.077",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.807",
    "predio": "CD"
  },
  {
    "id": "DET-155-0167",
    "numero": "0167",
    "endereco_mac": "000.101.051.084",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.808",
    "predio": "CD"
  },
  {
    "id": "DET-156-0168",
    "numero": "0168",
    "endereco_mac": "000.101.052.028",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.809",
    "predio": "CD"
  },
  {
    "id": "DET-157-0169",
    "numero": "0169",
    "endereco_mac": "000.101.052.037",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.802",
    "predio": "CD"
  },
  {
    "id": "DET-158-0170",
    "numero": "0170",
    "endereco_mac": "000.101.051.1 19",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.804",
    "predio": "CD"
  },
  {
    "id": "DET-159-0171",
    "numero": "0171",
    "endereco_mac": "000.101.052.032",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD8AND POST EN18",
    "predio": "CD"
  },
  {
    "id": "DET-160-0172",
    "numero": "0172",
    "endereco_mac": "000.101.052.066",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND SL. MA T",
    "predio": "CD"
  },
  {
    "id": "DET-161-0173",
    "numero": "0173",
    "endereco_mac": "000.101.052.061",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD08AND SL LANCH",
    "predio": "CD"
  },
  {
    "id": "DET-162-0174",
    "numero": "0174",
    "endereco_mac": "000.101.052.043",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.81 1",
    "predio": "CD"
  },
  {
    "id": "DET-163-0175",
    "numero": "0175",
    "endereco_mac": "000.101.052.072",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.813",
    "predio": "CD"
  },
  {
    "id": "DET-164-0176",
    "numero": "0176",
    "endereco_mac": "000.101.050.120",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.814",
    "predio": "CD"
  },
  {
    "id": "DET-165-0177",
    "numero": "0177",
    "endereco_mac": "000.101.052.051",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.815",
    "predio": "CD"
  },
  {
    "id": "DET-166-0178",
    "numero": "0178",
    "endereco_mac": "000.101.051.123",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.816",
    "predio": "CD"
  },
  {
    "id": "DET-167-0179",
    "numero": "0179",
    "endereco_mac": "000.101.052.063",
    "tipo": "Detector de T emperatura",
    "localizacao": "1 - CD 08AND COP A",
    "predio": "CD"
  },
  {
    "id": "DET-168-0180",
    "numero": "0180",
    "endereco_mac": "000.101.052.040",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND QUA.810",
    "predio": "CD"
  },
  {
    "id": "DET-169-0181",
    "numero": "0181",
    "endereco_mac": "000.127.147.160",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 08AND CORREDO",
    "predio": "CD"
  },
  {
    "id": "DET-170-0182",
    "numero": "0182",
    "endereco_mac": "000.127.147.143",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 08AND ELEV ADO",
    "predio": "CD"
  },
  {
    "id": "DET-171-0183",
    "numero": "0183",
    "endereco_mac": "000.101.052.022",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 08AND.QUA.812",
    "predio": "CD"
  },
  {
    "id": "DET-172-0184",
    "numero": "0184",
    "endereco_mac": "000.101.052.108",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND.QUA.906",
    "predio": "CD"
  },
  {
    "id": "DET-173-0185",
    "numero": "0185",
    "endereco_mac": "000.101.052.096",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.901",
    "predio": "CD"
  },
  {
    "id": "DET-174-0186",
    "numero": "0186",
    "endereco_mac": "000.101.052.084",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.902",
    "predio": "CD"
  },
  {
    "id": "DET-175-0187",
    "numero": "0187",
    "endereco_mac": "000.101.052.080",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.903",
    "predio": "CD"
  },
  {
    "id": "DET-176-0188",
    "numero": "0188",
    "endereco_mac": "000.101.053.034",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.904",
    "predio": "CD"
  },
  {
    "id": "DET-177-0189",
    "numero": "0189",
    "endereco_mac": "000.101.052.091",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.905",
    "predio": "CD"
  },
  {
    "id": "DET-178-0190",
    "numero": "0190",
    "endereco_mac": "000.101.052.093",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.907",
    "predio": "CD"
  },
  {
    "id": "DET-179-0191",
    "numero": "0191",
    "endereco_mac": "000.101.052.086",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.908",
    "predio": "CD"
  },
  {
    "id": "DET-180-0192",
    "numero": "0192",
    "endereco_mac": "000.101.053.021",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.909",
    "predio": "CD"
  },
  {
    "id": "DET-181-0193",
    "numero": "0193",
    "endereco_mac": "000.101.052.101",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.910",
    "predio": "CD"
  },
  {
    "id": "DET-182-0194",
    "numero": "0194",
    "endereco_mac": "000.101.053.033",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.91 1",
    "predio": "CD"
  },
  {
    "id": "DET-183-0195",
    "numero": "0195",
    "endereco_mac": "000.101.053.036",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.912",
    "predio": "CD"
  },
  {
    "id": "DET-184-0196",
    "numero": "0196",
    "endereco_mac": "000.101.051.037",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.913",
    "predio": "CD"
  },
  {
    "id": "DET-185-0197",
    "numero": "0197",
    "endereco_mac": "000.101.050.1 18",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.914",
    "predio": "CD"
  },
  {
    "id": "DET-186-0198",
    "numero": "0198",
    "endereco_mac": "000.101.052.082",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 09AND QUA.916",
    "predio": "CD"
  },
  {
    "id": "DET-187-0199",
    "numero": "0199",
    "endereco_mac": "000.101.051.042",
    "tipo": "Detector de T emperatura",
    "localizacao": "1 - CD 09AND COP A",
    "predio": "CD"
  },
  {
    "id": "DET-188-0200",
    "numero": "0200",
    "endereco_mac": "000.101.050.104",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD9AND POST EN19",
    "predio": "CD"
  },
  {
    "id": "DET-189-0201",
    "numero": "0201",
    "endereco_mac": "000.101.053.037",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 9AND SL.LANCH",
    "predio": "CD"
  },
  {
    "id": "DET-190-0202",
    "numero": "0202",
    "endereco_mac": "000.127.147.127",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 09AND CORREDO",
    "predio": "CD"
  },
  {
    "id": "DET-191-0203",
    "numero": "0203",
    "endereco_mac": "000.101.052.1 14",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 9AND SL. MA TE",
    "predio": "CD"
  },
  {
    "id": "DET-192-0204",
    "numero": "0204",
    "endereco_mac": "000.101.051.048",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 10AND ADM",
    "predio": "CD"
  },
  {
    "id": "DET-193-0205",
    "numero": "0205",
    "endereco_mac": "000.101.051.049",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 06AND QUA.604",
    "predio": "CD"
  },
  {
    "id": "DET-194-0206",
    "numero": "0206",
    "endereco_mac": "000.101.048.120",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND HDI.PREP",
    "predio": "CD"
  },
  {
    "id": "DET-195-0207",
    "numero": "0207",
    "endereco_mac": "000.101.049.097",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 3AND SL.6",
    "predio": "CD"
  },
  {
    "id": "DET-196-0208",
    "numero": "0208",
    "endereco_mac": "000.101.049.027",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 2AND.COMANDO",
    "predio": "CD"
  },
  {
    "id": "DET-197-0209",
    "numero": "0209",
    "endereco_mac": "000.101.049.038",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 2AND.SL.MAQU",
    "predio": "CD"
  },
  {
    "id": "DET-198-0210",
    "numero": "0210",
    "endereco_mac": "000.101.047.054",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD.2AND.SL.A TEND",
    "predio": "CD"
  },
  {
    "id": "DET-199-0212",
    "numero": "0212",
    "endereco_mac": "000.101.053.027",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND.COMAN.02",
    "predio": "CD"
  },
  {
    "id": "DET-200-0213",
    "numero": "0213",
    "endereco_mac": "000.101.052.124",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND.COMAN.01",
    "predio": "CD"
  },
  {
    "id": "DET-201-0214",
    "numero": "0214",
    "endereco_mac": "000.101.052.122",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 10AND SL.REUN",
    "predio": "CD"
  },
  {
    "id": "DET-202-0215",
    "numero": "0215",
    "endereco_mac": "000.101.052.089",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 10AND.CONT AS",
    "predio": "CD"
  },
  {
    "id": "DET-203-0216",
    "numero": "0216",
    "endereco_mac": "000.101.050.1 12",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND SL.EXAMB",
    "predio": "CD"
  },
  {
    "id": "DET-204-0217",
    "numero": "0217",
    "endereco_mac": "000.101.050.1 13",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND SL.EXAMA",
    "predio": "CD"
  },
  {
    "id": "DET-205-0218",
    "numero": "0218",
    "endereco_mac": "000.101.050.102",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 10AND.PREP MA",
    "predio": "CD"
  },
  {
    "id": "DET-206-0219",
    "numero": "0219",
    "endereco_mac": "000.101.052.125",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 10AND LAUDOS",
    "predio": "CD"
  },
  {
    "id": "DET-207-0220",
    "numero": "0220",
    "endereco_mac": "000.101.052.079",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND EST OQ.01",
    "predio": "CD"
  },
  {
    "id": "DET-208-0221",
    "numero": "0221",
    "endereco_mac": "000.101.050.096",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND EST OQ.02",
    "predio": "CD"
  },
  {
    "id": "DET-209-0222",
    "numero": "0222",
    "endereco_mac": "000.101.051.038",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND VEST .FEM",
    "predio": "CD"
  },
  {
    "id": "DET-210-0223",
    "numero": "0223",
    "endereco_mac": "000.101.050.1 1 1",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 10AND REC FEM",
    "predio": "CD"
  },
  {
    "id": "DET-211-0224",
    "numero": "0224",
    "endereco_mac": "000.101.050.093",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 10AND DML",
    "predio": "CD"
  },
  {
    "id": "DET-212-0225",
    "numero": "0225",
    "endereco_mac": "000.101.051.052",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND REC MASC",
    "predio": "CD"
  },
  {
    "id": "DET-213-0226",
    "numero": "0226",
    "endereco_mac": "000.127.147.131",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD 10AND RECPCAO",
    "predio": "CD"
  },
  {
    "id": "DET-214-0227",
    "numero": "0227",
    "endereco_mac": "000.101.049.103",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - 1AND.CD.P AC.INJE",
    "predio": "CD"
  },
  {
    "id": "DET-215-0228",
    "numero": "0228",
    "endereco_mac": "000.101.052.103",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.PESQUIS2",
    "predio": "RAD"
  },
  {
    "id": "DET-216-0229",
    "numero": "0229",
    "endereco_mac": "000.101.053.035",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.PESQUIS1",
    "predio": "RAD"
  },
  {
    "id": "DET-217-0230",
    "numero": "0230",
    "endereco_mac": "000.101.050.056",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.SECRET2",
    "predio": "RAD"
  },
  {
    "id": "DET-218-0231",
    "numero": "0231",
    "endereco_mac": "000.101.050.046",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.SL.INFU3",
    "predio": "RAD"
  },
  {
    "id": "DET-219-0232",
    "numero": "0232",
    "endereco_mac": "000.101.053.023",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.SL.INFU2",
    "predio": "RAD"
  },
  {
    "id": "DET-220-0233",
    "numero": "0233",
    "endereco_mac": "000.101.053.032",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.SL.INFU1",
    "predio": "RAD"
  },
  {
    "id": "DET-221-0234",
    "numero": "0234",
    "endereco_mac": "000.101.052.105",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.SECRET1",
    "predio": "RAD"
  },
  {
    "id": "DET-222-0235",
    "numero": "0235",
    "endereco_mac": "000.101.052.107",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.A TENDIM",
    "predio": "RAD"
  },
  {
    "id": "DET-223-0236",
    "numero": "0236",
    "endereco_mac": "000.101.052.1 17",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.SL.ESPER",
    "predio": "RAD"
  },
  {
    "id": "DET-224-0237",
    "numero": "0237",
    "endereco_mac": "000.101.050.068",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.F ARMACIA",
    "predio": "RAD"
  },
  {
    "id": "DET-225-0238",
    "numero": "0238",
    "endereco_mac": "000.101.050.040",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.CONSUL T7",
    "predio": "RAD"
  },
  {
    "id": "DET-226-0239",
    "numero": "0239",
    "endereco_mac": "000.101.052.1 10",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.CONSUL T6",
    "predio": "RAD"
  },
  {
    "id": "DET-227-0240",
    "numero": "0240",
    "endereco_mac": "000.101.050.053",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.CONSUL T5",
    "predio": "RAD"
  },
  {
    "id": "DET-228-0241",
    "numero": "0241",
    "endereco_mac": "000.101.052.087",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.SL.REUNI",
    "predio": "RAD"
  },
  {
    "id": "DET-229-0242",
    "numero": "0242",
    "endereco_mac": "000.101.050.087",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.MUL T .DIS",
    "predio": "RAD"
  },
  {
    "id": "DET-230-0243",
    "numero": "0243",
    "endereco_mac": "000.127.147.129",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD1AND.CORREDOR",
    "predio": "RAD"
  },
  {
    "id": "DET-231-0244",
    "numero": "0244",
    "endereco_mac": "000.127.147.149",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD1AND.RECEPCAO",
    "predio": "RAD"
  },
  {
    "id": "DET-232-0245",
    "numero": "0245",
    "endereco_mac": "000.101.052.121",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.CONSU.01",
    "predio": "RAD"
  },
  {
    "id": "DET-233-0246",
    "numero": "0246",
    "endereco_mac": "000.101.052.1 16",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.CONSU.02",
    "predio": "RAD"
  },
  {
    "id": "DET-234-0247",
    "numero": "0247",
    "endereco_mac": "000.101.052.123",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.CONSU.03",
    "predio": "RAD"
  },
  {
    "id": "DET-235-0248",
    "numero": "0248",
    "endereco_mac": "000.101.052.1 18",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.PERMANEN",
    "predio": "RAD"
  },
  {
    "id": "DET-236-0249",
    "numero": "0249",
    "endereco_mac": "000.101.052.081",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.PROCEDIM",
    "predio": "RAD"
  },
  {
    "id": "DET-237-0250",
    "numero": "0250",
    "endereco_mac": "000.101.051.044",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .FISIC.MEDIC",
    "predio": "RAD"
  },
  {
    "id": "DET-238-0251",
    "numero": "0251",
    "endereco_mac": "000.101.050.050",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .OFICINA",
    "predio": "RAD"
  },
  {
    "id": "DET-239-0252",
    "numero": "0252",
    "endereco_mac": "000.101.050.028",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .EQUIP .MA TER",
    "predio": "RAD"
  },
  {
    "id": "DET-240-0253",
    "numero": "0253",
    "endereco_mac": "000.101.050.090",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .POST .ENFERM",
    "predio": "RAD"
  },
  {
    "id": "DET-241-0254",
    "numero": "0254",
    "endereco_mac": "000.101.050.082",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .CONSUL T .03",
    "predio": "RAD"
  },
  {
    "id": "DET-242-0255",
    "numero": "0255",
    "endereco_mac": "000.101.050.041",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .CONSUL T .01",
    "predio": "RAD"
  },
  {
    "id": "DET-243-0256",
    "numero": "0256",
    "endereco_mac": "000.101.050.045",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .RECUPERACAO",
    "predio": "RAD"
  },
  {
    "id": "DET-244-0257",
    "numero": "0257",
    "endereco_mac": "000.101.050.061",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .CONSUL T .02",
    "predio": "RAD"
  },
  {
    "id": "DET-245-0258",
    "numero": "0258",
    "endereco_mac": "000.101.052.120",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .POR T .RAD",
    "predio": "RAD"
  },
  {
    "id": "DET-246-0259",
    "numero": "0259",
    "endereco_mac": "000.101.050.088",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .RECEPCAO",
    "predio": "RAD"
  },
  {
    "id": "DET-247-0260",
    "numero": "0260",
    "endereco_mac": "000.101.052.085",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .SECRET ARIA",
    "predio": "RAD"
  },
  {
    "id": "DET-248-0261",
    "numero": "0261",
    "endereco_mac": "000.101.050.031",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .ARQUIVO",
    "predio": "RAD"
  },
  {
    "id": "DET-249-0262",
    "numero": "0262",
    "endereco_mac": "000.101.050.069",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .SL.ESPERA",
    "predio": "RAD"
  },
  {
    "id": "DET-250-0263",
    "numero": "0263",
    "endereco_mac": "000.101.050.072",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .VEST .M.F",
    "predio": "RAD"
  },
  {
    "id": "DET-251-0264",
    "numero": "0264",
    "endereco_mac": "000.101.050.079",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .CORREDOR.2",
    "predio": "RAD"
  },
  {
    "id": "DET-252-0265",
    "numero": "0265",
    "endereco_mac": "000.101.050.083",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .SL.COMANDO",
    "predio": "RAD"
  },
  {
    "id": "DET-253-0266",
    "numero": "0266",
    "endereco_mac": "000.101.050.035",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .COORDENACO",
    "predio": "RAD"
  },
  {
    "id": "DET-254-0267",
    "numero": "0267",
    "endereco_mac": "000.127.147.135",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RADT .POR T .RADIO",
    "predio": "RAD"
  },
  {
    "id": "DET-255-0268",
    "numero": "0268",
    "endereco_mac": "000.101.050.044",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .RX.02",
    "predio": "RAD"
  },
  {
    "id": "DET-256-0269",
    "numero": "0269",
    "endereco_mac": "000.101.050.066",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .RX.01",
    "predio": "RAD"
  },
  {
    "id": "DET-257-0270",
    "numero": "0270",
    "endereco_mac": "000.101.052.092",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.SUB.SOLO.05",
    "predio": "RAD"
  },
  {
    "id": "DET-258-0271",
    "numero": "0271",
    "endereco_mac": "000.101.050.073",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.SUB.SOLO.04",
    "predio": "RAD"
  },
  {
    "id": "DET-259-0272",
    "numero": "0272",
    "endereco_mac": "000.101.052.083",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.SUB.SOLO.03",
    "predio": "RAD"
  },
  {
    "id": "DET-260-0273",
    "numero": "0273",
    "endereco_mac": "000.101.052.1 15",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.SUB.SOLO.02",
    "predio": "RAD"
  },
  {
    "id": "DET-261-0274",
    "numero": "0274",
    "endereco_mac": "000.101.053.022",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.SUB.SOLO.01",
    "predio": "RAD"
  },
  {
    "id": "DET-262-0275",
    "numero": "0275",
    "endereco_mac": "000.127.147.128",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD.SUB.SOLO",
    "predio": "RAD"
  },
  {
    "id": "DET-263-0276",
    "numero": "0276",
    "endereco_mac": "000.101.051.045",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.NEO3",
    "predio": "RAD"
  },
  {
    "id": "DET-264-0277",
    "numero": "0277",
    "endereco_mac": "000.101.050.1 10",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.NEO2",
    "predio": "RAD"
  },
  {
    "id": "DET-265-0278",
    "numero": "0278",
    "endereco_mac": "000.101.050.1 17",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.NEO1",
    "predio": "RAD"
  },
  {
    "id": "DET-266-0279",
    "numero": "0279",
    "endereco_mac": "000.101.050.092",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.PLANT ON1",
    "predio": "RAD"
  },
  {
    "id": "DET-267-0280",
    "numero": "0280",
    "endereco_mac": "000.101.050.123",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.PRES.MED",
    "predio": "RAD"
  },
  {
    "id": "DET-268-0281",
    "numero": "0281",
    "endereco_mac": "000.101.051.034",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.ISOLAME3",
    "predio": "RAD"
  },
  {
    "id": "DET-269-0282",
    "numero": "0282",
    "endereco_mac": "000.101.051.035",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.PED1",
    "predio": "RAD"
  },
  {
    "id": "DET-270-0283",
    "numero": "0283",
    "endereco_mac": "000.101.051.031",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.PED2",
    "predio": "RAD"
  },
  {
    "id": "DET-271-0284",
    "numero": "0284",
    "endereco_mac": "000.101.051.028",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.NEO.DML",
    "predio": "RAD"
  },
  {
    "id": "DET-272-0285",
    "numero": "0285",
    "endereco_mac": "000.101.050.121",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.ISOLAME2",
    "predio": "RAD"
  },
  {
    "id": "DET-273-0286",
    "numero": "0286",
    "endereco_mac": "000.101.050.1 14",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.ISOLAME4",
    "predio": "RAD"
  },
  {
    "id": "DET-274-0287",
    "numero": "0287",
    "endereco_mac": "000.101.051.043",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.PREP .MA T",
    "predio": "RAD"
  },
  {
    "id": "DET-275-0288",
    "numero": "0288",
    "endereco_mac": "000.101.051.051",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.DML",
    "predio": "RAD"
  },
  {
    "id": "DET-276-0289",
    "numero": "0289",
    "endereco_mac": "000.101.050.106",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.NEO.ISO1",
    "predio": "RAD"
  },
  {
    "id": "DET-277-0290",
    "numero": "0290",
    "endereco_mac": "000.101.050.107",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.NEO.ISO2",
    "predio": "RAD"
  },
  {
    "id": "DET-278-0291",
    "numero": "0291",
    "endereco_mac": "000.101.050.101",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.NEO.PLAN",
    "predio": "RAD"
  },
  {
    "id": "DET-279-0292",
    "numero": "0292",
    "endereco_mac": "000.101.050.095",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.PLANT ON2",
    "predio": "RAD"
  },
  {
    "id": "DET-280-0293",
    "numero": "0293",
    "endereco_mac": "000.101.050.1 16",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.REUN",
    "predio": "RAD"
  },
  {
    "id": "DET-281-0294",
    "numero": "0294",
    "endereco_mac": "000.101.051.021",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.EQUI",
    "predio": "RAD"
  },
  {
    "id": "DET-282-0295",
    "numero": "0295",
    "endereco_mac": "000.101.053.038",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.COP2",
    "predio": "RAD"
  },
  {
    "id": "DET-283-0296",
    "numero": "0296",
    "endereco_mac": "000.101.050.122",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.DML",
    "predio": "RAD"
  },
  {
    "id": "DET-284-0297",
    "numero": "0297",
    "endereco_mac": "000.101.050.109",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.COP3",
    "predio": "RAD"
  },
  {
    "id": "DET-285-0298",
    "numero": "0298",
    "endereco_mac": "000.127.147.200",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD3AND.CORREDOR",
    "predio": "RAD"
  },
  {
    "id": "DET-286-0299",
    "numero": "0299",
    "endereco_mac": "000.101.051.025",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.COP1",
    "predio": "RAD"
  },
  {
    "id": "DET-287-0300",
    "numero": "0300",
    "endereco_mac": "000.101.050.1 19",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.NEOZINHO",
    "predio": "RAD"
  },
  {
    "id": "DET-288-0301",
    "numero": "0301",
    "endereco_mac": "000.101.050.100",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.CTI.INTE",
    "predio": "RAD"
  },
  {
    "id": "DET-289-0302",
    "numero": "0302",
    "endereco_mac": "000.101.050.105",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T437",
    "predio": "RAD"
  },
  {
    "id": "DET-290-0303",
    "numero": "0303",
    "endereco_mac": "000.101.050.058",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T436",
    "predio": "RAD"
  },
  {
    "id": "DET-291-0304",
    "numero": "0304",
    "endereco_mac": "000.101.052.052",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T435",
    "predio": "RAD"
  },
  {
    "id": "DET-292-0305",
    "numero": "0305",
    "endereco_mac": "000.101.050.052",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T434",
    "predio": "RAD"
  },
  {
    "id": "DET-293-0306",
    "numero": "0306",
    "endereco_mac": "000.101.050.085",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T433",
    "predio": "RAD"
  },
  {
    "id": "DET-294-0307",
    "numero": "0307",
    "endereco_mac": "000.101.050.071",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T432",
    "predio": "RAD"
  },
  {
    "id": "DET-295-0308",
    "numero": "0308",
    "endereco_mac": "000.101.050.042",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T431",
    "predio": "RAD"
  },
  {
    "id": "DET-296-0309",
    "numero": "0309",
    "endereco_mac": "000.101.050.026",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T430",
    "predio": "RAD"
  },
  {
    "id": "DET-297-0310",
    "numero": "0310",
    "endereco_mac": "000.101.050.063",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T429",
    "predio": "RAD"
  },
  {
    "id": "DET-298-0312",
    "numero": "0312",
    "endereco_mac": "000.101.050.043",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T427",
    "predio": "RAD"
  },
  {
    "id": "DET-299-0313",
    "numero": "0313",
    "endereco_mac": "000.101.050.099",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T426",
    "predio": "RAD"
  },
  {
    "id": "DET-300-0314",
    "numero": "0314",
    "endereco_mac": "000.101.050.032",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.P A TRIMON",
    "predio": "RAD"
  },
  {
    "id": "DET-301-0315",
    "numero": "0315",
    "endereco_mac": "000.101.050.086",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.QUAR T438",
    "predio": "RAD"
  },
  {
    "id": "DET-302-0316",
    "numero": "0316",
    "endereco_mac": "000.101.050.075",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.FRALDARI",
    "predio": "RAD"
  },
  {
    "id": "DET-303-0317",
    "numero": "0317",
    "endereco_mac": "000.101.050.029",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.OBSER V AC",
    "predio": "RAD"
  },
  {
    "id": "DET-304-0318",
    "numero": "0318",
    "endereco_mac": "000.101.050.067",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.ENFERMAG",
    "predio": "RAD"
  },
  {
    "id": "DET-305-0319",
    "numero": "0319",
    "endereco_mac": "000.101.051.093",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.HIGIENIZ",
    "predio": "RAD"
  },
  {
    "id": "DET-306-0320",
    "numero": "0320",
    "endereco_mac": "000.101.050.038",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.DML",
    "predio": "RAD"
  },
  {
    "id": "DET-307-0321",
    "numero": "0321",
    "endereco_mac": "000.101.051.056",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.SL.EXAME",
    "predio": "RAD"
  },
  {
    "id": "DET-308-0322",
    "numero": "0322",
    "endereco_mac": "000.101.051.1 12",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.SL.EST AR",
    "predio": "RAD"
  },
  {
    "id": "DET-309-0323",
    "numero": "0323",
    "endereco_mac": "000.101.051.083",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD4AND.SL.COLET",
    "predio": "RAD"
  },
  {
    "id": "DET-310-0324",
    "numero": "0324",
    "endereco_mac": "000.127.147.167",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD4AND.CORREDOR",
    "predio": "RAD"
  },
  {
    "id": "DET-311-0325",
    "numero": "0325",
    "endereco_mac": "000.127.147.151",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD4AND.ELEV ADOR",
    "predio": "RAD"
  },
  {
    "id": "DET-312-0326",
    "numero": "0326",
    "endereco_mac": "000.101.051.036",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD3AND.NEO.PREP",
    "predio": "RAD"
  },
  {
    "id": "DET-313-0327",
    "numero": "0327",
    "endereco_mac": "000.127.147.142",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RADT .POR T .CANCER",
    "predio": "RAD"
  },
  {
    "id": "DET-314-0328",
    "numero": "0328",
    "endereco_mac": "000.101.050.064",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RADT .CORREDOR.1",
    "predio": "RAD"
  },
  {
    "id": "DET-315-0329",
    "numero": "0329",
    "endereco_mac": "000.101.052.099",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.PRO.SANG",
    "predio": "RAD"
  },
  {
    "id": "DET-316-0330",
    "numero": "0330",
    "endereco_mac": "000.101.052.098",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.LIB.ROTU",
    "predio": "RAD"
  },
  {
    "id": "DET-317-0331",
    "numero": "0331",
    "endereco_mac": "000.101.050.081",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.RECUPER",
    "predio": "RAD"
  },
  {
    "id": "DET-318-0332",
    "numero": "0332",
    "endereco_mac": "000.101.051.057",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.AFER.DOA",
    "predio": "RAD"
  },
  {
    "id": "DET-319-0333",
    "numero": "0333",
    "endereco_mac": "000.101.051.095",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.TRI.HEM1",
    "predio": "RAD"
  },
  {
    "id": "DET-320-0334",
    "numero": "0334",
    "endereco_mac": "000.101.052.059",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.TRI.HEM2",
    "predio": "RAD"
  },
  {
    "id": "DET-321-0335",
    "numero": "0335",
    "endereco_mac": "000.101.051.058",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.SL.ADM",
    "predio": "RAD"
  },
  {
    "id": "DET-322-0336",
    "numero": "0336",
    "endereco_mac": "000.101.050.080",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.TRI.CLI1",
    "predio": "RAD"
  },
  {
    "id": "DET-323-0337",
    "numero": "0337",
    "endereco_mac": "000.101.051.091",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.TRI.CLI2",
    "predio": "RAD"
  },
  {
    "id": "DET-324-0338",
    "numero": "0338",
    "endereco_mac": "000.101.051.103",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.COO.SET O",
    "predio": "RAD"
  },
  {
    "id": "DET-325-0339",
    "numero": "0339",
    "endereco_mac": "000.101.050.057",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.CONS.IND",
    "predio": "RAD"
  },
  {
    "id": "DET-326-0340",
    "numero": "0340",
    "endereco_mac": "000.101.051.078",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.AFERESES",
    "predio": "RAD"
  },
  {
    "id": "DET-327-0341",
    "numero": "0341",
    "endereco_mac": "000.101.052.053",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.TRA.COLE",
    "predio": "RAD"
  },
  {
    "id": "DET-328-0342",
    "numero": "0342",
    "endereco_mac": "000.101.050.070",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.CO.MA TER",
    "predio": "RAD"
  },
  {
    "id": "DET-329-0343",
    "numero": "0343",
    "endereco_mac": "000.101.051.1 17",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.SL.LANCH",
    "predio": "RAD"
  },
  {
    "id": "DET-330-0344",
    "numero": "0344",
    "endereco_mac": "000.101.052.109",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.EST OQUE",
    "predio": "RAD"
  },
  {
    "id": "DET-331-0345",
    "numero": "0345",
    "endereco_mac": "000.101.052.095",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.QUALIDAD",
    "predio": "RAD"
  },
  {
    "id": "DET-332-0346",
    "numero": "0346",
    "endereco_mac": "000.101.052.1 13",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.TES.COMP",
    "predio": "RAD"
  },
  {
    "id": "DET-333-0347",
    "numero": "0347",
    "endereco_mac": "000.101.052.097",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.IMUNOHEM",
    "predio": "RAD"
  },
  {
    "id": "DET-334-0348",
    "numero": "0348",
    "endereco_mac": "000.101.052.1 1 1",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.SL.PLANT",
    "predio": "RAD"
  },
  {
    "id": "DET-335-0349",
    "numero": "0349",
    "endereco_mac": "000.101.053.026",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.DML",
    "predio": "RAD"
  },
  {
    "id": "DET-336-0350",
    "numero": "0350",
    "endereco_mac": "000.101.053.028",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.LA V AGEM",
    "predio": "RAD"
  },
  {
    "id": "DET-337-0351",
    "numero": "0351",
    "endereco_mac": "000.101.052.126",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.COP A",
    "predio": "RAD"
  },
  {
    "id": "DET-338-0352",
    "numero": "0352",
    "endereco_mac": "000.127.147.154",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD5AND.CORREDOR",
    "predio": "RAD"
  },
  {
    "id": "DET-339-0353",
    "numero": "0353",
    "endereco_mac": "000.127.147.155",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD5AND.ELEV ADOR",
    "predio": "RAD"
  },
  {
    "id": "DET-340-0354",
    "numero": "0354",
    "endereco_mac": "000.101.051.092",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.SL.DOADO",
    "predio": "RAD"
  },
  {
    "id": "DET-341-0355",
    "numero": "0355",
    "endereco_mac": "000.101.051.108",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD5AND.SOROTECA",
    "predio": "RAD"
  },
  {
    "id": "DET-342-0356",
    "numero": "0356",
    "endereco_mac": "000.101.050.049",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.APOIO.J1",
    "predio": "RAD"
  },
  {
    "id": "DET-343-0357",
    "numero": "0357",
    "endereco_mac": "000.101.050.055",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.DIRECAO",
    "predio": "RAD"
  },
  {
    "id": "DET-344-0358",
    "numero": "0358",
    "endereco_mac": "000.101.050.047",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.SL.LANCH",
    "predio": "RAD"
  },
  {
    "id": "DET-345-0359",
    "numero": "0359",
    "endereco_mac": "000.101.050.084",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND RECEPCAO",
    "predio": "RAD"
  },
  {
    "id": "DET-346-0360",
    "numero": "0360",
    "endereco_mac": "000.101.050.054",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AN.SL.ENSI05",
    "predio": "RAD"
  },
  {
    "id": "DET-347-0361",
    "numero": "0361",
    "endereco_mac": "000.101.050.077",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.RECEPCAO",
    "predio": "RAD"
  },
  {
    "id": "DET-348-0362",
    "numero": "0362",
    "endereco_mac": "000.101.051.024",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.MARKETIN",
    "predio": "RAD"
  },
  {
    "id": "DET-349-0363",
    "numero": "0363",
    "endereco_mac": "000.101.050.078",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.COORDENA",
    "predio": "RAD"
  },
  {
    "id": "DET-350-0364",
    "numero": "0364",
    "endereco_mac": "000.101.050.062",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.DIAGRAMA",
    "predio": "RAD"
  },
  {
    "id": "DET-351-0365",
    "numero": "0365",
    "endereco_mac": "000.101.050.033",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.C.INFEC4",
    "predio": "RAD"
  },
  {
    "id": "DET-352-0366",
    "numero": "0366",
    "endereco_mac": "000.101.050.030",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.C.INFEC3",
    "predio": "RAD"
  },
  {
    "id": "DET-353-0367",
    "numero": "0367",
    "endereco_mac": "000.101.050.036",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.C.INFEC2",
    "predio": "RAD"
  },
  {
    "id": "DET-354-0368",
    "numero": "0368",
    "endereco_mac": "000.101.050.048",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.C.INFEC1",
    "predio": "RAD"
  },
  {
    "id": "DET-355-0369",
    "numero": "0369",
    "endereco_mac": "000.101.052.104",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.SL.CPD1",
    "predio": "RAD"
  },
  {
    "id": "DET-356-0370",
    "numero": "0370",
    "endereco_mac": "000.101.053.029",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.CPD.3",
    "predio": "RAD"
  },
  {
    "id": "DET-357-0371",
    "numero": "0371",
    "endereco_mac": "000.101.052.090",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.CPD.2",
    "predio": "RAD"
  },
  {
    "id": "DET-358-0372",
    "numero": "0372",
    "endereco_mac": "000.101.050.089",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AN.CPD.SUPOR",
    "predio": "RAD"
  },
  {
    "id": "DET-359-0373",
    "numero": "0373",
    "endereco_mac": "000.101.050.051",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AN.SL.SE.ADM",
    "predio": "RAD"
  },
  {
    "id": "DET-360-0374",
    "numero": "0374",
    "endereco_mac": "000.101.071.078",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.SL.ENS.1",
    "predio": "RAD"
  },
  {
    "id": "DET-361-0375",
    "numero": "0375",
    "endereco_mac": "000.101.050.091",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AN.SL.ENSI02",
    "predio": "RAD"
  },
  {
    "id": "DET-362-0376",
    "numero": "0376",
    "endereco_mac": "000.101.052.100",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AN.SL.ENS03",
    "predio": "RAD"
  },
  {
    "id": "DET-363-0377",
    "numero": "0377",
    "endereco_mac": "000.127.147.147",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD6AN.CORREDOR",
    "predio": "RAD"
  },
  {
    "id": "DET-364-0378",
    "numero": "0378",
    "endereco_mac": "000.127.147.1 16",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD6AND.ELEV ADOR",
    "predio": "RAD"
  },
  {
    "id": "DET-365-0379",
    "numero": "0379",
    "endereco_mac": "000.101.053.031",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.COREME",
    "predio": "RAD"
  },
  {
    "id": "DET-366-0380",
    "numero": "0380",
    "endereco_mac": "000.101.050.034",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.6AND.BIBLIOT",
    "predio": "RAD"
  },
  {
    "id": "DET-367-0381",
    "numero": "0381",
    "endereco_mac": "000.101.051.029",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD6AND.IMPRESA",
    "predio": "RAD"
  },
  {
    "id": "DET-368-0382",
    "numero": "0382",
    "endereco_mac": "000.101.052.045",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.PSICOLOG",
    "predio": "RAD"
  },
  {
    "id": "DET-369-0383",
    "numero": "0383",
    "endereco_mac": "000.101.052.036",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.GER.RH",
    "predio": "RAD"
  },
  {
    "id": "DET-370-0384",
    "numero": "0384",
    "endereco_mac": "000.101.051.107",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.SELECAO",
    "predio": "RAD"
  },
  {
    "id": "DET-371-0385",
    "numero": "0385",
    "endereco_mac": "000.101.051.075",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.DESENVOL",
    "predio": "RAD"
  },
  {
    "id": "DET-372-0386",
    "numero": "0386",
    "endereco_mac": "000.101.051.073",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.RECPCAO",
    "predio": "RAD"
  },
  {
    "id": "DET-373-0387",
    "numero": "0387",
    "endereco_mac": "000.101.079.057",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7.SL.ENTREVIS",
    "predio": "RAD"
  },
  {
    "id": "DET-374-0388",
    "numero": "0388",
    "endereco_mac": "000.101.051.100",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.ESCR.QUA",
    "predio": "RAD"
  },
  {
    "id": "DET-375-0389",
    "numero": "0389",
    "endereco_mac": "000.101.051.062",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.SER.SOCI",
    "predio": "RAD"
  },
  {
    "id": "DET-376-0390",
    "numero": "0390",
    "endereco_mac": "000.101.051.254",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.RH",
    "predio": "RAD"
  },
  {
    "id": "DET-377-0391",
    "numero": "0391",
    "endereco_mac": "000.101.051.088",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.DEP AR T2",
    "predio": "RAD"
  },
  {
    "id": "DET-378-0392",
    "numero": "0392",
    "endereco_mac": "000.101.052.041",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.DEP AR T1",
    "predio": "RAD"
  },
  {
    "id": "DET-379-0393",
    "numero": "0393",
    "endereco_mac": "000.101.052.073",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.CONT ABIL",
    "predio": "RAD"
  },
  {
    "id": "DET-380-0394",
    "numero": "0394",
    "endereco_mac": "000.101.051.066",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.F A T .REUN",
    "predio": "RAD"
  },
  {
    "id": "DET-381-0395",
    "numero": "0395",
    "endereco_mac": "000.101.051.105",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.SL.CHEFI",
    "predio": "RAD"
  },
  {
    "id": "DET-382-0396",
    "numero": "0396",
    "endereco_mac": "000.101.051.086",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.F A TUR.01",
    "predio": "RAD"
  },
  {
    "id": "DET-383-0397",
    "numero": "0397",
    "endereco_mac": "000.101.051.054",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.F A TUR.02",
    "predio": "RAD"
  },
  {
    "id": "DET-384-0398",
    "numero": "0398",
    "endereco_mac": "000.101.051.098",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.F A TUR.04",
    "predio": "RAD"
  },
  {
    "id": "DET-385-0399",
    "numero": "0399",
    "endereco_mac": "000.101.051.102",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.F A TUR.03",
    "predio": "RAD"
  },
  {
    "id": "DET-386-0400",
    "numero": "0400",
    "endereco_mac": "000.101.052.027",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.SESM.SEG",
    "predio": "RAD"
  },
  {
    "id": "DET-387-0401",
    "numero": "0401",
    "endereco_mac": "000.101.051.109",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.SESM.REC",
    "predio": "RAD"
  },
  {
    "id": "DET-388-0402",
    "numero": "0402",
    "endereco_mac": "000.101.051.1 15",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.AMBUL",
    "predio": "RAD"
  },
  {
    "id": "DET-389-0403",
    "numero": "0403",
    "endereco_mac": "000.101.051.090",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.CONS.05",
    "predio": "RAD"
  },
  {
    "id": "DET-390-0404",
    "numero": "0404",
    "endereco_mac": "000.101.051.1 18",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.CONS.04",
    "predio": "RAD"
  },
  {
    "id": "DET-391-0405",
    "numero": "0405",
    "endereco_mac": "000.101.051.067",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.CONS.03",
    "predio": "RAD"
  },
  {
    "id": "DET-392-0406",
    "numero": "0406",
    "endereco_mac": "000.101.051.063",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.CONS.01",
    "predio": "RAD"
  },
  {
    "id": "DET-393-0407",
    "numero": "0407",
    "endereco_mac": "000.101.051.072",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.CONS.02",
    "predio": "RAD"
  },
  {
    "id": "DET-394-0408",
    "numero": "0408",
    "endereco_mac": "000.101.051.125",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD7AND.DML",
    "predio": "RAD"
  },
  {
    "id": "DET-395-0409",
    "numero": "0409",
    "endereco_mac": "000.127.147.164",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD7AND.F A TURAM",
    "predio": "RAD"
  },
  {
    "id": "DET-396-0410",
    "numero": "0410",
    "endereco_mac": "000.127.147.150",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD7AND.CORREDOR",
    "predio": "RAD"
  },
  {
    "id": "DET-397-0412",
    "numero": "0412",
    "endereco_mac": "000.101.051.1 14",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD8AND.CONS.03",
    "predio": "RAD"
  },
  {
    "id": "DET-398-0413",
    "numero": "0413",
    "endereco_mac": "000.127.147.124",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD8AND.CORREDOR",
    "predio": "RAD"
  },
  {
    "id": "DET-399-0414",
    "numero": "0414",
    "endereco_mac": "000.101.051.074",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.UTILIDA",
    "predio": "RAD"
  },
  {
    "id": "DET-400-0415",
    "numero": "0415",
    "endereco_mac": "000.101.052.065",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.ECOGR2",
    "predio": "RAD"
  },
  {
    "id": "DET-401-0416",
    "numero": "0416",
    "endereco_mac": "000.101.051.106",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.MA.DIG2",
    "predio": "RAD"
  },
  {
    "id": "DET-402-0417",
    "numero": "0417",
    "endereco_mac": "000.101.051.055",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.IMP .MAM",
    "predio": "RAD"
  },
  {
    "id": "DET-403-0418",
    "numero": "0418",
    "endereco_mac": "000.101.052.070",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.MA.DIG1",
    "predio": "RAD"
  },
  {
    "id": "DET-404-0419",
    "numero": "0419",
    "endereco_mac": "000.101.051.064",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.VESTIAR",
    "predio": "RAD"
  },
  {
    "id": "DET-405-0420",
    "numero": "0420",
    "endereco_mac": "000.101.052.030",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.A TENDIM",
    "predio": "RAD"
  },
  {
    "id": "DET-406-0421",
    "numero": "0421",
    "endereco_mac": "000.101.050.059",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.DIGIT02",
    "predio": "RAD"
  },
  {
    "id": "DET-407-0422",
    "numero": "0422",
    "endereco_mac": "000.101.051.080",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.CON2FET",
    "predio": "RAD"
  },
  {
    "id": "DET-408-0423",
    "numero": "0423",
    "endereco_mac": "000.101.051.101",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.CON1FET",
    "predio": "RAD"
  },
  {
    "id": "DET-409-0424",
    "numero": "0424",
    "endereco_mac": "000.101.051.1 10",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.REP .FET",
    "predio": "RAD"
  },
  {
    "id": "DET-410-0425",
    "numero": "0425",
    "endereco_mac": "000.101.051.126",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.CIT OGE3",
    "predio": "RAD"
  },
  {
    "id": "DET-411-0426",
    "numero": "0426",
    "endereco_mac": "000.101.051.094",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.CIT OGE4",
    "predio": "RAD"
  },
  {
    "id": "DET-412-0427",
    "numero": "0427",
    "endereco_mac": "000.101.052.075",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AN.TELECOM",
    "predio": "RAD"
  },
  {
    "id": "DET-413-0428",
    "numero": "0428",
    "endereco_mac": "000.101.051.1 13",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.CIT OME6",
    "predio": "RAD"
  },
  {
    "id": "DET-414-0429",
    "numero": "0429",
    "endereco_mac": "000.101.051.085",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.CIT OME3",
    "predio": "RAD"
  },
  {
    "id": "DET-415-0430",
    "numero": "0430",
    "endereco_mac": "000.101.051.1 1 1",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - AMER QUAR T O 5",
    "predio": "Geral"
  },
  {
    "id": "DET-416-0431",
    "numero": "0431",
    "endereco_mac": "000.101.051.089",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - SOT ON 1 1",
    "predio": "Geral"
  },
  {
    "id": "DET-417-0432",
    "numero": "0432",
    "endereco_mac": "000.101.051.077",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - AMER CX AGUA",
    "predio": "Geral"
  },
  {
    "id": "DET-418-0433",
    "numero": "0433",
    "endereco_mac": "000.127.147.1 14",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD.8AND.ELEV ADO",
    "predio": "RAD"
  },
  {
    "id": "DET-419-0434",
    "numero": "0434",
    "endereco_mac": "000.127.150.231",
    "tipo": "Acionador Manual",
    "localizacao": "2 - AMER CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-420-0435",
    "numero": "0435",
    "endereco_mac": "000.101.051.081",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.COP A",
    "predio": "RAD"
  },
  {
    "id": "DET-421-0436",
    "numero": "0436",
    "endereco_mac": "000.101.052.057",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.DML",
    "predio": "RAD"
  },
  {
    "id": "DET-422-0437",
    "numero": "0437",
    "endereco_mac": "000.101.051.1 16",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.ECOG.1",
    "predio": "RAD"
  },
  {
    "id": "DET-423-0438",
    "numero": "0438",
    "endereco_mac": "000.101.051.079",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.SL.DOUT",
    "predio": "RAD"
  },
  {
    "id": "DET-424-0439",
    "numero": "0439",
    "endereco_mac": "000.101.051.082",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.CON.MAM",
    "predio": "RAD"
  },
  {
    "id": "DET-425-0440",
    "numero": "0440",
    "endereco_mac": "000.101.051.061",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD8AND.INT .LAUD",
    "predio": "RAD"
  },
  {
    "id": "DET-426-0441",
    "numero": "0441",
    "endereco_mac": "000.101.052.047",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.RECUP",
    "predio": "RAD"
  },
  {
    "id": "DET-427-0442",
    "numero": "0442",
    "endereco_mac": "000.101.052.062",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.CIT O.02",
    "predio": "RAD"
  },
  {
    "id": "DET-428-0443",
    "numero": "0443",
    "endereco_mac": "000.101.051.065",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.CIT O.01",
    "predio": "RAD"
  },
  {
    "id": "DET-429-0444",
    "numero": "0444",
    "endereco_mac": "000.101.051.076",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.TECNICA",
    "predio": "RAD"
  },
  {
    "id": "DET-430-0445",
    "numero": "0445",
    "endereco_mac": "000.101.071.061",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.MACROSC",
    "predio": "RAD"
  },
  {
    "id": "DET-431-0446",
    "numero": "0446",
    "endereco_mac": "000.101.051.059",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.INTERP",
    "predio": "RAD"
  },
  {
    "id": "DET-432-0447",
    "numero": "0447",
    "endereco_mac": "000.101.052.054",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.REPCAO",
    "predio": "RAD"
  },
  {
    "id": "DET-433-0448",
    "numero": "0448",
    "endereco_mac": "000.101.051.087",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD.8AND.SL.ESP",
    "predio": "RAD"
  },
  {
    "id": "DET-434-0449",
    "numero": "0449",
    "endereco_mac": "000.101.078.079",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .07",
    "predio": "Geral"
  },
  {
    "id": "DET-435-0450",
    "numero": "0450",
    "endereco_mac": "000.101.078.097",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .04",
    "predio": "Geral"
  },
  {
    "id": "DET-436-0451",
    "numero": "0451",
    "endereco_mac": "000.101.043.101",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .ODONT OLOGIA1",
    "predio": "Geral"
  },
  {
    "id": "DET-437-0452",
    "numero": "0452",
    "endereco_mac": "000.101.046.035",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .18",
    "predio": "Geral"
  },
  {
    "id": "DET-438-0453",
    "numero": "0453",
    "endereco_mac": "000.101.043.072",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .RX.ODONT OLOG",
    "predio": "Geral"
  },
  {
    "id": "DET-439-0454",
    "numero": "0454",
    "endereco_mac": "000.101.043.103",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .27",
    "predio": "Geral"
  },
  {
    "id": "DET-440-0455",
    "numero": "0455",
    "endereco_mac": "000.101.046.061",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .19",
    "predio": "Geral"
  },
  {
    "id": "DET-441-0456",
    "numero": "0456",
    "endereco_mac": "000.101.046.069",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .20",
    "predio": "Geral"
  },
  {
    "id": "DET-442-0457",
    "numero": "0457",
    "endereco_mac": "000.101.046.057",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .21",
    "predio": "Geral"
  },
  {
    "id": "DET-443-0458",
    "numero": "0458",
    "endereco_mac": "000.101.044.1 14",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .24",
    "predio": "Geral"
  },
  {
    "id": "DET-444-0459",
    "numero": "0459",
    "endereco_mac": "000.101.043.107",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .ADMINISTR.25",
    "predio": "Geral"
  },
  {
    "id": "DET-445-0460",
    "numero": "0460",
    "endereco_mac": "000.101.046.067",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .17",
    "predio": "Geral"
  },
  {
    "id": "DET-446-0461",
    "numero": "0461",
    "endereco_mac": "000.101.046.045",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .16",
    "predio": "Geral"
  },
  {
    "id": "DET-447-0462",
    "numero": "0462",
    "endereco_mac": "000.101.044.021",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .14",
    "predio": "Geral"
  },
  {
    "id": "DET-448-0463",
    "numero": "0463",
    "endereco_mac": "000.101.046.022",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .26",
    "predio": "Geral"
  },
  {
    "id": "DET-449-0464",
    "numero": "0464",
    "endereco_mac": "000.101.046.034",
    "tipo": "Detector de T emperatura",
    "localizacao": "3 - UPF .COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-450-0465",
    "numero": "0465",
    "endereco_mac": "000.101.044.107",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .29.2",
    "predio": "Geral"
  },
  {
    "id": "DET-451-0466",
    "numero": "0466",
    "endereco_mac": "000.101.046.053",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .29.1",
    "predio": "Geral"
  },
  {
    "id": "DET-452-0467",
    "numero": "0467",
    "endereco_mac": "000.101.078.084",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .SL.CIRUR.30",
    "predio": "Geral"
  },
  {
    "id": "DET-453-0468",
    "numero": "0468",
    "endereco_mac": "000.101.078.090",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .SL.CIRUR.31",
    "predio": "Geral"
  },
  {
    "id": "DET-454-0469",
    "numero": "0469",
    "endereco_mac": "000.127.147.126",
    "tipo": "Acionador Manual",
    "localizacao": "3 - UPF .CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-455-0470",
    "numero": "0470",
    "endereco_mac": "000.101.046.071",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .13",
    "predio": "Geral"
  },
  {
    "id": "DET-456-0471",
    "numero": "0471",
    "endereco_mac": "000.101.078.095",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .12",
    "predio": "Geral"
  },
  {
    "id": "DET-457-0472",
    "numero": "0472",
    "endereco_mac": "000.101.078.108",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .1 1",
    "predio": "Geral"
  },
  {
    "id": "DET-458-0473",
    "numero": "0473",
    "endereco_mac": "000.101.078.101",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .09",
    "predio": "Geral"
  },
  {
    "id": "DET-459-0474",
    "numero": "0474",
    "endereco_mac": "000.101.078.075",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .08",
    "predio": "Geral"
  },
  {
    "id": "DET-460-0475",
    "numero": "0475",
    "endereco_mac": "000.101.078.089",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .03",
    "predio": "Geral"
  },
  {
    "id": "DET-461-0476",
    "numero": "0476",
    "endereco_mac": "000.101.078.102",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .SL.REUNI.2",
    "predio": "Geral"
  },
  {
    "id": "DET-462-0477",
    "numero": "0477",
    "endereco_mac": "000.101.078.076",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .ARQUIVO",
    "predio": "Geral"
  },
  {
    "id": "DET-463-0478",
    "numero": "0478",
    "endereco_mac": "000.101.045.077",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUA.RESID",
    "predio": "Geral"
  },
  {
    "id": "DET-464-0479",
    "numero": "0479",
    "endereco_mac": "000.101.043.081",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .15",
    "predio": "Geral"
  },
  {
    "id": "DET-465-0480",
    "numero": "0480",
    "endereco_mac": "000.101.078.092",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .05",
    "predio": "Geral"
  },
  {
    "id": "DET-466-0481",
    "numero": "0481",
    "endereco_mac": "000.101.078.1 14",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .06",
    "predio": "Geral"
  },
  {
    "id": "DET-467-0482",
    "numero": "0482",
    "endereco_mac": "000.101.078.081",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .10",
    "predio": "Geral"
  },
  {
    "id": "DET-468-0483",
    "numero": "0483",
    "endereco_mac": "000.101.046.036",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .ODONT OLOGIA2",
    "predio": "Geral"
  },
  {
    "id": "DET-469-0484",
    "numero": "0484",
    "endereco_mac": "000.101.046.064",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .22",
    "predio": "Geral"
  },
  {
    "id": "DET-470-0485",
    "numero": "0485",
    "endereco_mac": "000.101.043.064",
    "tipo": "Detector de Fumaça",
    "localizacao": "3 - UPF .CONSUL T .23",
    "predio": "Geral"
  },
  {
    "id": "DET-471-0486",
    "numero": "0486",
    "endereco_mac": "000.101.044.024",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.HIGIENIZAC1",
    "predio": "Geral"
  },
  {
    "id": "DET-472-0487",
    "numero": "0487",
    "endereco_mac": "000.101.043.024",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.ADM.QUALID",
    "predio": "Geral"
  },
  {
    "id": "DET-473-0488",
    "numero": "0488",
    "endereco_mac": "000.101.043.035",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.SL.REUNIAO",
    "predio": "Geral"
  },
  {
    "id": "DET-474-0489",
    "numero": "0489",
    "endereco_mac": "000.101.043.028",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.HEMA T OLOG",
    "predio": "Geral"
  },
  {
    "id": "DET-475-0490",
    "numero": "0490",
    "endereco_mac": "000.101.043.050",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.BIOQUIMICA",
    "predio": "Geral"
  },
  {
    "id": "DET-476-0491",
    "numero": "0491",
    "endereco_mac": "000.101.043.104",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.MICROSCOPIA",
    "predio": "Geral"
  },
  {
    "id": "DET-477-0492",
    "numero": "0492",
    "endereco_mac": "000.101.043.036",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.MICOLOGIA",
    "predio": "Geral"
  },
  {
    "id": "DET-478-0493",
    "numero": "0493",
    "endereco_mac": "000.101.043.059",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.ANA.URINARI",
    "predio": "Geral"
  },
  {
    "id": "DET-479-0494",
    "numero": "0494",
    "endereco_mac": "000.101.043.079",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.BACTEROLOGI",
    "predio": "Geral"
  },
  {
    "id": "DET-480-0495",
    "numero": "0495",
    "endereco_mac": "000.127.147.1 1 1",
    "tipo": "Acionador Manual",
    "localizacao": "4 - SANI.LABORA.SANI",
    "predio": "Geral"
  },
  {
    "id": "DET-481-0496",
    "numero": "0496",
    "endereco_mac": "000.101.043.056",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.HIGIENIZAC2",
    "predio": "Geral"
  },
  {
    "id": "DET-482-0497",
    "numero": "0497",
    "endereco_mac": "000.101.044.072",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.COLET A",
    "predio": "Geral"
  },
  {
    "id": "DET-483-0498",
    "numero": "0498",
    "endereco_mac": "000.101.043.061",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.VESTIARIO",
    "predio": "Geral"
  },
  {
    "id": "DET-484-0499",
    "numero": "0499",
    "endereco_mac": "000.101.049.049",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.LABORA T ORIO",
    "predio": "Geral"
  },
  {
    "id": "DET-485-0500",
    "numero": "0500",
    "endereco_mac": "000.101.043.046",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.SECRET ARIA1",
    "predio": "Geral"
  },
  {
    "id": "DET-486-0501",
    "numero": "0501",
    "endereco_mac": "000.101.043.060",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.SECRET ARIA2",
    "predio": "Geral"
  },
  {
    "id": "DET-487-0502",
    "numero": "0502",
    "endereco_mac": "000.101.043.054",
    "tipo": "Detector de Fumaça",
    "localizacao": "4 - SANI.REUN.NEUROL",
    "predio": "Geral"
  },
  {
    "id": "DET-488-0503",
    "numero": "0503",
    "endereco_mac": "000.101.048.032",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL17",
    "predio": "Geral"
  },
  {
    "id": "DET-489-0504",
    "numero": "0504",
    "endereco_mac": "000.101.045.098",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL18",
    "predio": "Geral"
  },
  {
    "id": "DET-490-0505",
    "numero": "0505",
    "endereco_mac": "000.101.045.069",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.LABORA T",
    "predio": "Geral"
  },
  {
    "id": "DET-491-0506",
    "numero": "0506",
    "endereco_mac": "000.101.045.031",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - SUS.MAGISTRAL.4",
    "predio": "Geral"
  },
  {
    "id": "DET-492-0507",
    "numero": "0507",
    "endereco_mac": "000.101.045.079",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL15",
    "predio": "Geral"
  },
  {
    "id": "DET-493-0508",
    "numero": "0508",
    "endereco_mac": "000.101.048.023",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL14",
    "predio": "Geral"
  },
  {
    "id": "DET-494-0509",
    "numero": "0509",
    "endereco_mac": "000.101.045.063",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL13",
    "predio": "Geral"
  },
  {
    "id": "DET-495-0510",
    "numero": "0510",
    "endereco_mac": "000.101.048.038",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL12",
    "predio": "Geral"
  },
  {
    "id": "DET-496-0512",
    "numero": "0512",
    "endereco_mac": "000.101.045.100",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.ENFERMAG",
    "predio": "Geral"
  },
  {
    "id": "DET-497-0513",
    "numero": "0513",
    "endereco_mac": "000.101.047.082",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL09",
    "predio": "Geral"
  },
  {
    "id": "DET-498-0514",
    "numero": "0514",
    "endereco_mac": "000.101.047.084",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.RACK",
    "predio": "Geral"
  },
  {
    "id": "DET-499-0515",
    "numero": "0515",
    "endereco_mac": "000.101.047.094",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONFOR T",
    "predio": "Geral"
  },
  {
    "id": "DET-500-0516",
    "numero": "0516",
    "endereco_mac": "000.101.045.101",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.ROUP ARIA",
    "predio": "Geral"
  },
  {
    "id": "DET-501-0517",
    "numero": "0517",
    "endereco_mac": "000.101.045.081",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-502-0518",
    "numero": "0518",
    "endereco_mac": "000.101.047.1 12",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.SL.UTIL",
    "predio": "Geral"
  },
  {
    "id": "DET-503-0519",
    "numero": "0519",
    "endereco_mac": "000.101.047.1 10",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - UTIC.LEIT O.9",
    "predio": "Geral"
  },
  {
    "id": "DET-504-0520",
    "numero": "0520",
    "endereco_mac": "000.101.045.067",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - SUS.CONSUL T .26",
    "predio": "Geral"
  },
  {
    "id": "DET-505-0521",
    "numero": "0521",
    "endereco_mac": "000.101.047.1 15",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.SL.ESP02",
    "predio": "Geral"
  },
  {
    "id": "DET-506-0522",
    "numero": "0522",
    "endereco_mac": "000.101.045.070",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.SL.ESP02",
    "predio": "Geral"
  },
  {
    "id": "DET-507-0523",
    "numero": "0523",
    "endereco_mac": "000.101.047.1 1 1",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.SECRET A",
    "predio": "Geral"
  },
  {
    "id": "DET-508-0524",
    "numero": "0524",
    "endereco_mac": "000.101.048.033",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.COLET A",
    "predio": "Geral"
  },
  {
    "id": "DET-509-0525",
    "numero": "0525",
    "endereco_mac": "000.101.044.106",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.PROCEDIM",
    "predio": "Geral"
  },
  {
    "id": "DET-510-0526",
    "numero": "0526",
    "endereco_mac": "000.101.045.034",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL02",
    "predio": "Geral"
  },
  {
    "id": "DET-511-0527",
    "numero": "0527",
    "endereco_mac": "000.101.045.084",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL03",
    "predio": "Geral"
  },
  {
    "id": "DET-512-0528",
    "numero": "0528",
    "endereco_mac": "000.101.070.089",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - SUS.CONSUL T .6",
    "predio": "Geral"
  },
  {
    "id": "DET-513-0529",
    "numero": "0529",
    "endereco_mac": "000.101.045.072",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL07",
    "predio": "Geral"
  },
  {
    "id": "DET-514-0530",
    "numero": "0530",
    "endereco_mac": "000.101.045.093",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL08",
    "predio": "Geral"
  },
  {
    "id": "DET-515-0531",
    "numero": "0531",
    "endereco_mac": "000.127.147.159",
    "tipo": "Acionador Manual",
    "localizacao": "5 - AMBUL P AR TICULAR",
    "predio": "Geral"
  },
  {
    "id": "DET-516-0532",
    "numero": "0532",
    "endereco_mac": "000.101.047.098",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL1 1",
    "predio": "Geral"
  },
  {
    "id": "DET-517-0533",
    "numero": "0533",
    "endereco_mac": "000.101.045.092",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL10",
    "predio": "Geral"
  },
  {
    "id": "DET-518-0534",
    "numero": "0534",
    "endereco_mac": "000.101.047.106",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL16",
    "predio": "Geral"
  },
  {
    "id": "DET-519-0535",
    "numero": "0535",
    "endereco_mac": "000.101.051.047",
    "tipo": "Detector de Fumaça",
    "localizacao": "6 - PV3.SL.ESP .NEO",
    "predio": "Geral"
  },
  {
    "id": "DET-520-0536",
    "numero": "0536",
    "endereco_mac": "000.127.147.1 13",
    "tipo": "Acionador Manual",
    "localizacao": "6 - RAD3AND HALL UTI",
    "predio": "RAD"
  },
  {
    "id": "DET-521-0537",
    "numero": "0537",
    "endereco_mac": "000.101.047.107",
    "tipo": "Detector de Fumaça",
    "localizacao": "7 - LACT A.SONDARIO5",
    "predio": "Geral"
  },
  {
    "id": "DET-522-0538",
    "numero": "0538",
    "endereco_mac": "000.101.044.048",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.SALA.1.3",
    "predio": "Geral"
  },
  {
    "id": "DET-523-0539",
    "numero": "0539",
    "endereco_mac": "000.101.044.069",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.OFICINA",
    "predio": "Geral"
  },
  {
    "id": "DET-524-0540",
    "numero": "0540",
    "endereco_mac": "000.101.044.076",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.SALA.1.4",
    "predio": "Geral"
  },
  {
    "id": "DET-525-0541",
    "numero": "0541",
    "endereco_mac": "000.101.044.034",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.STDAH",
    "predio": "Geral"
  },
  {
    "id": "DET-526-0542",
    "numero": "0542",
    "endereco_mac": "000.101.044.067",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.SALA.2",
    "predio": "Geral"
  },
  {
    "id": "DET-527-0543",
    "numero": "0543",
    "endereco_mac": "000.101.044.043",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.ALMOXARIF",
    "predio": "Geral"
  },
  {
    "id": "DET-528-0544",
    "numero": "0544",
    "endereco_mac": "000.101.044.030",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.COZINHA",
    "predio": "Geral"
  },
  {
    "id": "DET-529-0545",
    "numero": "0545",
    "endereco_mac": "000.101.044.045",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.TRE.P ACIEN",
    "predio": "Geral"
  },
  {
    "id": "DET-530-0546",
    "numero": "0546",
    "endereco_mac": "000.101.044.046",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.DIALI.PERI",
    "predio": "Geral"
  },
  {
    "id": "DET-531-0547",
    "numero": "0547",
    "endereco_mac": "000.101.044.075",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.RECUP .EME",
    "predio": "Geral"
  },
  {
    "id": "DET-532-0548",
    "numero": "0548",
    "endereco_mac": "000.101.044.063",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.SALA.3",
    "predio": "Geral"
  },
  {
    "id": "DET-533-0549",
    "numero": "0549",
    "endereco_mac": "000.101.044.041",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.ENFERM",
    "predio": "Geral"
  },
  {
    "id": "DET-534-0550",
    "numero": "0550",
    "endereco_mac": "000.101.048.069",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.SALA.1.2",
    "predio": "Geral"
  },
  {
    "id": "DET-535-0551",
    "numero": "0551",
    "endereco_mac": "000.101.044.040",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.LANCHE",
    "predio": "Geral"
  },
  {
    "id": "DET-536-0552",
    "numero": "0552",
    "endereco_mac": "000.101.044.082",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.SECRET AR",
    "predio": "Geral"
  },
  {
    "id": "DET-537-0553",
    "numero": "0553",
    "endereco_mac": "000.101.044.079",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.CONSUL T .1",
    "predio": "Geral"
  },
  {
    "id": "DET-538-0554",
    "numero": "0554",
    "endereco_mac": "000.101.044.050",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.CONSUL T .2",
    "predio": "Geral"
  },
  {
    "id": "DET-539-0555",
    "numero": "0555",
    "endereco_mac": "000.101.045.036",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.RECEPCAO",
    "predio": "Geral"
  },
  {
    "id": "DET-540-0556",
    "numero": "0556",
    "endereco_mac": "000.101.044.029",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-541-0557",
    "numero": "0557",
    "endereco_mac": "000.101.045.087",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - AMER DML",
    "predio": "Geral"
  },
  {
    "id": "DET-542-0558",
    "numero": "0558",
    "endereco_mac": "000.101.045.053",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - AMER QUAR T O 6",
    "predio": "Geral"
  },
  {
    "id": "DET-543-0559",
    "numero": "0559",
    "endereco_mac": "000.101.045.1 12",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - CME.8",
    "predio": "Geral"
  },
  {
    "id": "DET-544-0560",
    "numero": "0560",
    "endereco_mac": "000.101.045.088",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - AMER QUAR T O 7",
    "predio": "Geral"
  },
  {
    "id": "DET-545-0561",
    "numero": "0561",
    "endereco_mac": "000.101.078.094",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - CME.1",
    "predio": "Geral"
  },
  {
    "id": "DET-546-0562",
    "numero": "0562",
    "endereco_mac": "000.101.078.073",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - CME.2",
    "predio": "Geral"
  },
  {
    "id": "DET-547-0563",
    "numero": "0563",
    "endereco_mac": "000.101.078.124",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - CME.3",
    "predio": "Geral"
  },
  {
    "id": "DET-548-0564",
    "numero": "0564",
    "endereco_mac": "000.101.078.099",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - CME.4",
    "predio": "Geral"
  },
  {
    "id": "DET-549-0565",
    "numero": "0565",
    "endereco_mac": "000.101.045.076",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - CME.6",
    "predio": "Geral"
  },
  {
    "id": "DET-550-0566",
    "numero": "0566",
    "endereco_mac": "000.101.045.109",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - CME.5",
    "predio": "Geral"
  },
  {
    "id": "DET-551-0567",
    "numero": "0567",
    "endereco_mac": "000.127.147.141",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD5AN.RECEPCAO",
    "predio": "RAD"
  },
  {
    "id": "DET-552-0568",
    "numero": "0568",
    "endereco_mac": "000.101.050.074",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD1AND.SL.APOIO",
    "predio": "RAD"
  },
  {
    "id": "DET-553-0569",
    "numero": "0569",
    "endereco_mac": "000.127.147.125",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD.TEREO.ESPER",
    "predio": "RAD"
  },
  {
    "id": "DET-554-0570",
    "numero": "0570",
    "endereco_mac": "000.101.051.096",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD 07AND.QUA.710",
    "predio": "CD"
  },
  {
    "id": "DET-555-0571",
    "numero": "0571",
    "endereco_mac": "000.127.147.137",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD9AND.ELEV ADO",
    "predio": "CD"
  },
  {
    "id": "DET-556-0572",
    "numero": "0572",
    "endereco_mac": "000.101.045.060",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL01",
    "predio": "Geral"
  },
  {
    "id": "DET-557-0573",
    "numero": "0573",
    "endereco_mac": "000.101.045.075",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL04",
    "predio": "Geral"
  },
  {
    "id": "DET-558-0574",
    "numero": "0574",
    "endereco_mac": "000.101.045.094",
    "tipo": "Detector de Fumaça",
    "localizacao": "5 - C.ESPEC.CONSUL05",
    "predio": "Geral"
  },
  {
    "id": "DET-559-0575",
    "numero": "0575",
    "endereco_mac": "000.127.147.122",
    "tipo": "Acionador Manual",
    "localizacao": "8 - HEMODIALISE",
    "predio": "Geral"
  },
  {
    "id": "DET-560-0576",
    "numero": "0576",
    "endereco_mac": "000.101.045.056",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O.7",
    "predio": "RAD"
  },
  {
    "id": "DET-561-0577",
    "numero": "0577",
    "endereco_mac": "000.101.045.104",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O.5",
    "predio": "RAD"
  },
  {
    "id": "DET-562-0578",
    "numero": "0578",
    "endereco_mac": "000.101.045.099",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O.4",
    "predio": "RAD"
  },
  {
    "id": "DET-563-0579",
    "numero": "0579",
    "endereco_mac": "000.101.045.074",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O.3",
    "predio": "RAD"
  },
  {
    "id": "DET-564-0580",
    "numero": "0580",
    "endereco_mac": "000.101.045.085",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.GUAR.MA T",
    "predio": "RAD"
  },
  {
    "id": "DET-565-0581",
    "numero": "0581",
    "endereco_mac": "000.101.045.1 17",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.SALA.01",
    "predio": "RAD"
  },
  {
    "id": "DET-566-0582",
    "numero": "0582",
    "endereco_mac": "000.101.045.107",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O.9",
    "predio": "RAD"
  },
  {
    "id": "DET-567-0583",
    "numero": "0583",
    "endereco_mac": "000.101.045.062",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O10",
    "predio": "RAD"
  },
  {
    "id": "DET-568-0584",
    "numero": "0584",
    "endereco_mac": "000.101.045.108",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O1 1",
    "predio": "RAD"
  },
  {
    "id": "DET-569-0585",
    "numero": "0585",
    "endereco_mac": "000.101.045.102",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O12",
    "predio": "RAD"
  },
  {
    "id": "DET-570-0586",
    "numero": "0586",
    "endereco_mac": "000.101.045.1 18",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AN.PRESC.MED",
    "predio": "RAD"
  },
  {
    "id": "DET-571-0587",
    "numero": "0587",
    "endereco_mac": "000.101.045.059",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O14",
    "predio": "RAD"
  },
  {
    "id": "DET-572-0588",
    "numero": "0588",
    "endereco_mac": "000.101.045.1 13",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.SALA.15",
    "predio": "RAD"
  },
  {
    "id": "DET-573-0589",
    "numero": "0589",
    "endereco_mac": "000.101.045.046",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.MA T .EQUI",
    "predio": "RAD"
  },
  {
    "id": "DET-574-0590",
    "numero": "0590",
    "endereco_mac": "000.127.147.163",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD2AND.QUAR T O8",
    "predio": "RAD"
  },
  {
    "id": "DET-575-0591",
    "numero": "0591",
    "endereco_mac": "000.127.147.107",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD2AND.QUAR T O5",
    "predio": "RAD"
  },
  {
    "id": "DET-576-0592",
    "numero": "0592",
    "endereco_mac": "000.127.147.101",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD2AND.QUAR T O14",
    "predio": "RAD"
  },
  {
    "id": "DET-577-0593",
    "numero": "0593",
    "endereco_mac": "000.101.045.057",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.RECUPER1",
    "predio": "RAD"
  },
  {
    "id": "DET-578-0594",
    "numero": "0594",
    "endereco_mac": "000.101.045.054",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.RECUPER2",
    "predio": "RAD"
  },
  {
    "id": "DET-579-0595",
    "numero": "0595",
    "endereco_mac": "000.101.045.082",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.RECUPER3",
    "predio": "RAD"
  },
  {
    "id": "DET-580-0596",
    "numero": "0596",
    "endereco_mac": "000.101.045.052",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.RECUPER4",
    "predio": "RAD"
  },
  {
    "id": "DET-581-0597",
    "numero": "0597",
    "endereco_mac": "000.1 1 1.1 1 1.1 1 1",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.CABIDEIR",
    "predio": "RAD"
  },
  {
    "id": "DET-582-0598",
    "numero": "0598",
    "endereco_mac": "000.101.045.083",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - AMER COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-583-0599",
    "numero": "0599",
    "endereco_mac": "000.101.045.096",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - AMER QUAR T O 1",
    "predio": "Geral"
  },
  {
    "id": "DET-584-0600",
    "numero": "0600",
    "endereco_mac": "000.127.147.102",
    "tipo": "Acionador Manual",
    "localizacao": "2 - RAD2AND.CORREDO",
    "predio": "RAD"
  },
  {
    "id": "DET-585-0601",
    "numero": "0601",
    "endereco_mac": "000.101.045.068",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.EST AR.FU",
    "predio": "RAD"
  },
  {
    "id": "DET-586-0602",
    "numero": "0602",
    "endereco_mac": "000.101.045.091",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.COP A",
    "predio": "RAD"
  },
  {
    "id": "DET-587-0603",
    "numero": "0603",
    "endereco_mac": "000.101.045.089",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.DESCANSO",
    "predio": "RAD"
  },
  {
    "id": "DET-588-0604",
    "numero": "0604",
    "endereco_mac": "000.101.045.106",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.F ARMACI2",
    "predio": "RAD"
  },
  {
    "id": "DET-589-0605",
    "numero": "0605",
    "endereco_mac": "000.101.045.105",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.F ARMACI1",
    "predio": "RAD"
  },
  {
    "id": "DET-590-0606",
    "numero": "0606",
    "endereco_mac": "000.101.045.1 1 1",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O16",
    "predio": "RAD"
  },
  {
    "id": "DET-591-0607",
    "numero": "0607",
    "endereco_mac": "000.101.045.1 10",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.SECRET AR",
    "predio": "RAD"
  },
  {
    "id": "DET-592-0608",
    "numero": "0608",
    "endereco_mac": "000.101.045.049",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.AMBULASL2",
    "predio": "Geral"
  },
  {
    "id": "DET-593-0609",
    "numero": "0609",
    "endereco_mac": "000.101.044.1 10",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.SALA.4.2",
    "predio": "Geral"
  },
  {
    "id": "DET-594-0610",
    "numero": "0610",
    "endereco_mac": "000.101.044.078",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.SL.ESPER8",
    "predio": "Geral"
  },
  {
    "id": "DET-595-0612",
    "numero": "0612",
    "endereco_mac": "000.101.044.051",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.SL.CIRURG",
    "predio": "Geral"
  },
  {
    "id": "DET-596-0613",
    "numero": "0613",
    "endereco_mac": "000.101.044.1 12",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.DMI",
    "predio": "Geral"
  },
  {
    "id": "DET-597-0614",
    "numero": "0614",
    "endereco_mac": "000.101.044.108",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.CONSUL T .5",
    "predio": "Geral"
  },
  {
    "id": "DET-598-0615",
    "numero": "0615",
    "endereco_mac": "000.101.044.120",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.SALA.3",
    "predio": "Geral"
  },
  {
    "id": "DET-599-0616",
    "numero": "0616",
    "endereco_mac": "000.101.043.126",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.T OMOGRAF1",
    "predio": "Geral"
  },
  {
    "id": "DET-600-0617",
    "numero": "0617",
    "endereco_mac": "000.101.045.043",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.SALA.LAUD",
    "predio": "Geral"
  },
  {
    "id": "DET-601-0618",
    "numero": "0618",
    "endereco_mac": "000.101.043.121",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.T OMOGRAF2",
    "predio": "Geral"
  },
  {
    "id": "DET-602-0619",
    "numero": "0619",
    "endereco_mac": "000.101.045.033",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.SALA.1",
    "predio": "Geral"
  },
  {
    "id": "DET-603-0620",
    "numero": "0620",
    "endereco_mac": "000.101.044.109",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.SALA.5",
    "predio": "Geral"
  },
  {
    "id": "DET-604-0621",
    "numero": "0621",
    "endereco_mac": "000.101.045.028",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.SALA.2",
    "predio": "Geral"
  },
  {
    "id": "DET-605-0622",
    "numero": "0622",
    "endereco_mac": "000.101.044.1 15",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.INTERPRET",
    "predio": "Geral"
  },
  {
    "id": "DET-606-0623",
    "numero": "0623",
    "endereco_mac": "000.101.044.093",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.DIGIT ACAO",
    "predio": "Geral"
  },
  {
    "id": "DET-607-0624",
    "numero": "0624",
    "endereco_mac": "000.101.044.099",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.DML",
    "predio": "Geral"
  },
  {
    "id": "DET-608-0625",
    "numero": "0625",
    "endereco_mac": "000.101.043.098",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.SALA.4.1",
    "predio": "Geral"
  },
  {
    "id": "DET-609-0626",
    "numero": "0626",
    "endereco_mac": "000.101.045.032",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIO.X.SALA 4",
    "predio": "Geral"
  },
  {
    "id": "DET-610-0627",
    "numero": "0627",
    "endereco_mac": "000.101.045.051",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - INFORMA TICA",
    "predio": "Geral"
  },
  {
    "id": "DET-611-0628",
    "numero": "0628",
    "endereco_mac": "000.101.045.050",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGIST .F ARM.AMBU",
    "predio": "Geral"
  },
  {
    "id": "DET-612-0629",
    "numero": "0629",
    "endereco_mac": "000.101.043.1 18",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGIST .QUALIDADE",
    "predio": "Geral"
  },
  {
    "id": "DET-613-0630",
    "numero": "0630",
    "endereco_mac": "000.101.043.093",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGIST .FORMULAS",
    "predio": "Geral"
  },
  {
    "id": "DET-614-0631",
    "numero": "0631",
    "endereco_mac": "000.101.049.039",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - ACOUGUE",
    "predio": "Geral"
  },
  {
    "id": "DET-615-0632",
    "numero": "0632",
    "endereco_mac": "000.101.043.108",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGIST .HIGIENIZA",
    "predio": "Geral"
  },
  {
    "id": "DET-616-0633",
    "numero": "0633",
    "endereco_mac": "000.101.044.098",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGIST .SL.PESAGE",
    "predio": "Geral"
  },
  {
    "id": "DET-617-0634",
    "numero": "0634",
    "endereco_mac": "000.101.048.108",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - P ADARIA.1",
    "predio": "Geral"
  },
  {
    "id": "DET-618-0635",
    "numero": "0635",
    "endereco_mac": "000.101.043.077",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGIST .MANIPULAC",
    "predio": "Geral"
  },
  {
    "id": "DET-619-0636",
    "numero": "0636",
    "endereco_mac": "000.101.044.1 18",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGIST .SL.PRODUT",
    "predio": "Geral"
  },
  {
    "id": "DET-620-0637",
    "numero": "0637",
    "endereco_mac": "000.101.047.044",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - P ADARIA.2",
    "predio": "Geral"
  },
  {
    "id": "DET-621-0638",
    "numero": "0638",
    "endereco_mac": "000.101.045.027",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGIST .MA TER.PRI",
    "predio": "Geral"
  },
  {
    "id": "DET-622-0639",
    "numero": "0639",
    "endereco_mac": "000.101.045.047",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGISTRAL.II.1",
    "predio": "Geral"
  },
  {
    "id": "DET-623-0640",
    "numero": "0640",
    "endereco_mac": "000.101.043.076",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGISTRAL.II.2",
    "predio": "Geral"
  },
  {
    "id": "DET-624-0641",
    "numero": "0641",
    "endereco_mac": "000.101.044.091",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - ENGENHARIA.CLIN1",
    "predio": "Geral"
  },
  {
    "id": "DET-625-0642",
    "numero": "0642",
    "endereco_mac": "000.101.044.104",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - ENGENHARIA.CLIN4",
    "predio": "Geral"
  },
  {
    "id": "DET-626-0643",
    "numero": "0643",
    "endereco_mac": "000.101.044.1 17",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - ENGENHARIA.CLIN3",
    "predio": "Geral"
  },
  {
    "id": "DET-627-0644",
    "numero": "0644",
    "endereco_mac": "000.101.045.037",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - ENGENHARIA.CLIN2",
    "predio": "Geral"
  },
  {
    "id": "DET-628-0645",
    "numero": "0645",
    "endereco_mac": "000.101.043.100",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - ENG.CLIN.GERENCI",
    "predio": "Geral"
  },
  {
    "id": "DET-629-0646",
    "numero": "0646",
    "endereco_mac": "000.101.045.035",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGIST .II.FRAC.2",
    "predio": "Geral"
  },
  {
    "id": "DET-630-0647",
    "numero": "0647",
    "endereco_mac": "000.101.044.122",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGIST .IISECRET1",
    "predio": "Geral"
  },
  {
    "id": "DET-631-0648",
    "numero": "0648",
    "endereco_mac": "000.101.043.125",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MAGIST .IISECRET2",
    "predio": "Geral"
  },
  {
    "id": "DET-632-0649",
    "numero": "0649",
    "endereco_mac": "000.101.044.1 1 1",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - DEPOSIT .PINTURA",
    "predio": "Geral"
  },
  {
    "id": "DET-633-0650",
    "numero": "0650",
    "endereco_mac": "000.101.045.040",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - AMER ADM",
    "predio": "Geral"
  },
  {
    "id": "DET-634-0651",
    "numero": "0651",
    "endereco_mac": "000.101.044.092",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - ALMOXARIF ADO",
    "predio": "Geral"
  },
  {
    "id": "DET-635-0652",
    "numero": "0652",
    "endereco_mac": "000.101.045.029",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - AMER QUAR T O 2",
    "predio": "Geral"
  },
  {
    "id": "DET-636-0653",
    "numero": "0653",
    "endereco_mac": "000.127.147.136",
    "tipo": "Acionador Manual",
    "localizacao": "10 - CORREDOR MANUTEN",
    "predio": "Geral"
  },
  {
    "id": "DET-637-0654",
    "numero": "0654",
    "endereco_mac": "000.101.044.096",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - MA T .HIDRAULICO",
    "predio": "Geral"
  },
  {
    "id": "DET-638-0655",
    "numero": "0655",
    "endereco_mac": "000.101.043.070",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - ALMOXARIF .MANUT",
    "predio": "Geral"
  },
  {
    "id": "DET-639-0656",
    "numero": "0656",
    "endereco_mac": "000.101.045.021",
    "tipo": "Detector de Fumaça",
    "localizacao": "10 - CHEFIA.MANUTENC",
    "predio": "Geral"
  },
  {
    "id": "DET-640-0657",
    "numero": "0657",
    "endereco_mac": "000.101.046.040",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 1 - ALMOXARIF ADO 6",
    "predio": "Geral"
  },
  {
    "id": "DET-641-0658",
    "numero": "0658",
    "endereco_mac": "000.101.046.056",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 1 - ALMOXARIF ADO 3",
    "predio": "Geral"
  },
  {
    "id": "DET-642-0659",
    "numero": "0659",
    "endereco_mac": "000.101.046.062",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 1 - MANUT ELETRICA 2",
    "predio": "Geral"
  },
  {
    "id": "DET-643-0660",
    "numero": "0660",
    "endereco_mac": "000.101.046.021",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 1 - ALMOXARIF ADO 2",
    "predio": "Geral"
  },
  {
    "id": "DET-644-0661",
    "numero": "0661",
    "endereco_mac": "000.101.046.033",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 1 - ALMOXARIF ADO 5",
    "predio": "Geral"
  },
  {
    "id": "DET-645-0662",
    "numero": "0662",
    "endereco_mac": "000.101.046.058",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 1 - ALMOXARIF ADO 4",
    "predio": "Geral"
  },
  {
    "id": "DET-646-0663",
    "numero": "0663",
    "endereco_mac": "000.101.046.044",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 1 - ALMOXARIF ADO 1",
    "predio": "Geral"
  },
  {
    "id": "DET-647-0664",
    "numero": "0664",
    "endereco_mac": "000.101.078.086",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.SL.MEDICAC",
    "predio": "Geral"
  },
  {
    "id": "DET-648-0665",
    "numero": "0665",
    "endereco_mac": "000.101.078.1 1 1",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.SL.AMAREL1",
    "predio": "Geral"
  },
  {
    "id": "DET-649-0666",
    "numero": "0666",
    "endereco_mac": "000.101.078.074",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.SL.AMAREL2",
    "predio": "Geral"
  },
  {
    "id": "DET-650-0667",
    "numero": "0667",
    "endereco_mac": "000.101.078.103",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.SL.AMAREL3",
    "predio": "Geral"
  },
  {
    "id": "DET-651-0668",
    "numero": "0668",
    "endereco_mac": "000.101.078.1 10",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.SL.AMAREL4",
    "predio": "Geral"
  },
  {
    "id": "DET-652-0669",
    "numero": "0669",
    "endereco_mac": "000.101.078.120",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.GINECO",
    "predio": "Geral"
  },
  {
    "id": "DET-653-0670",
    "numero": "0670",
    "endereco_mac": "000.101.080.091",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.TRAU.OR T OP",
    "predio": "Geral"
  },
  {
    "id": "DET-654-0671",
    "numero": "0671",
    "endereco_mac": "000.101.078.1 13",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.SL.PEDIA TR",
    "predio": "Geral"
  },
  {
    "id": "DET-655-0672",
    "numero": "0672",
    "endereco_mac": "000.101.078.123",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.SL.LANCHE2",
    "predio": "Geral"
  },
  {
    "id": "DET-656-0673",
    "numero": "0673",
    "endereco_mac": "000.101.078.106",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.SL.LANCHE1",
    "predio": "Geral"
  },
  {
    "id": "DET-657-0674",
    "numero": "0674",
    "endereco_mac": "000.101.078.1 18",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.QUAR T .RESI",
    "predio": "Geral"
  },
  {
    "id": "DET-658-0675",
    "numero": "0675",
    "endereco_mac": "000.101.078.082",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.PROCEDIMEN",
    "predio": "Geral"
  },
  {
    "id": "DET-659-0676",
    "numero": "0676",
    "endereco_mac": "000.101.078.104",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.SECRET .1",
    "predio": "Geral"
  },
  {
    "id": "DET-660-0677",
    "numero": "0677",
    "endereco_mac": "000.101.078.100",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.SECRET .2",
    "predio": "Geral"
  },
  {
    "id": "DET-661-0678",
    "numero": "0678",
    "endereco_mac": "000.127.147.097",
    "tipo": "Acionador Manual",
    "localizacao": "12 - EMERG.CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-662-0679",
    "numero": "0679",
    "endereco_mac": "000.101.078.122",
    "tipo": "Detector de Fumaça",
    "localizacao": "13 - POST1.QUAR T O.53",
    "predio": "Geral"
  },
  {
    "id": "DET-663-0680",
    "numero": "0680",
    "endereco_mac": "000.101.078.121",
    "tipo": "Detector de Fumaça",
    "localizacao": "13 - POST1.OBS.PEDIA T",
    "predio": "Geral"
  },
  {
    "id": "DET-664-0681",
    "numero": "0681",
    "endereco_mac": "000.101.078.1 17",
    "tipo": "Detector de Fumaça",
    "localizacao": "13 - POST1.ENFERMAG",
    "predio": "Geral"
  },
  {
    "id": "DET-665-0682",
    "numero": "0682",
    "endereco_mac": "000.101.078.107",
    "tipo": "Detector de Fumaça",
    "localizacao": "13 - POST1.OBS.FEMINI",
    "predio": "Geral"
  },
  {
    "id": "DET-666-0683",
    "numero": "0683",
    "endereco_mac": "000.101.078.1 12",
    "tipo": "Detector de Fumaça",
    "localizacao": "13 - POST1.OBS.MASCUL",
    "predio": "Geral"
  },
  {
    "id": "DET-667-0684",
    "numero": "0684",
    "endereco_mac": "000.127.147.1 19",
    "tipo": "Acionador Manual",
    "localizacao": "13 - POST1.CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-668-0685",
    "numero": "0685",
    "endereco_mac": "000.101.048.122",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .484",
    "predio": "Geral"
  },
  {
    "id": "DET-669-0686",
    "numero": "0686",
    "endereco_mac": "000.101.048.121",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .482",
    "predio": "Geral"
  },
  {
    "id": "DET-670-0687",
    "numero": "0687",
    "endereco_mac": "000.101.049.050",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .480",
    "predio": "Geral"
  },
  {
    "id": "DET-671-0688",
    "numero": "0688",
    "endereco_mac": "000.101.049.030",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .478",
    "predio": "Geral"
  },
  {
    "id": "DET-672-0689",
    "numero": "0689",
    "endereco_mac": "000.101.048.125",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.SL.REUNIA",
    "predio": "Geral"
  },
  {
    "id": "DET-673-0690",
    "numero": "0690",
    "endereco_mac": "000.101.049.022",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.PROCEDIM",
    "predio": "Geral"
  },
  {
    "id": "DET-674-0691",
    "numero": "0691",
    "endereco_mac": "000.101.049.054",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .476",
    "predio": "Geral"
  },
  {
    "id": "DET-675-0692",
    "numero": "0692",
    "endereco_mac": "000.101.048.126",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .474",
    "predio": "Geral"
  },
  {
    "id": "DET-676-0693",
    "numero": "0693",
    "endereco_mac": "000.101.047.036",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.RESID.MED",
    "predio": "Geral"
  },
  {
    "id": "DET-677-0694",
    "numero": "0694",
    "endereco_mac": "000.101.049.045",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.DEP .CARDI",
    "predio": "Geral"
  },
  {
    "id": "DET-678-0695",
    "numero": "0695",
    "endereco_mac": "000.101.049.056",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.RES.MED.3",
    "predio": "Geral"
  },
  {
    "id": "DET-679-0696",
    "numero": "0696",
    "endereco_mac": "000.101.049.034",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.RES.MED.2",
    "predio": "Geral"
  },
  {
    "id": "DET-680-0697",
    "numero": "0697",
    "endereco_mac": "000.101.048.049",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.RES.MED.1",
    "predio": "Geral"
  },
  {
    "id": "DET-681-0698",
    "numero": "0698",
    "endereco_mac": "000.101.049.046",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .471",
    "predio": "Geral"
  },
  {
    "id": "DET-682-0699",
    "numero": "0699",
    "endereco_mac": "000.101.049.057",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .473",
    "predio": "Geral"
  },
  {
    "id": "DET-683-0700",
    "numero": "0700",
    "endereco_mac": "000.101.049.047",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .475",
    "predio": "Geral"
  },
  {
    "id": "DET-684-0701",
    "numero": "0701",
    "endereco_mac": "000.101.047.060",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.ENFERMAG",
    "predio": "Geral"
  },
  {
    "id": "DET-685-0702",
    "numero": "0702",
    "endereco_mac": "000.101.047.041",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .477",
    "predio": "Geral"
  },
  {
    "id": "DET-686-0703",
    "numero": "0703",
    "endereco_mac": "000.101.048.1 18",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .479",
    "predio": "Geral"
  },
  {
    "id": "DET-687-0704",
    "numero": "0704",
    "endereco_mac": "000.101.048.106",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .481",
    "predio": "Geral"
  },
  {
    "id": "DET-688-0705",
    "numero": "0705",
    "endereco_mac": "000.101.049.058",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .483",
    "predio": "Geral"
  },
  {
    "id": "DET-689-0706",
    "numero": "0706",
    "endereco_mac": "000.127.147.1 15",
    "tipo": "Acionador Manual",
    "localizacao": "14 - POST14.CORREDOR2",
    "predio": "Geral"
  },
  {
    "id": "DET-690-0707",
    "numero": "0707",
    "endereco_mac": "000.101.045.123",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .470",
    "predio": "Geral"
  },
  {
    "id": "DET-691-0708",
    "numero": "0708",
    "endereco_mac": "000.101.045.125",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.QUAR T O.461",
    "predio": "Geral"
  },
  {
    "id": "DET-692-0709",
    "numero": "0709",
    "endereco_mac": "000.101.049.042",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.QUAR T O.462",
    "predio": "Geral"
  },
  {
    "id": "DET-693-0710",
    "numero": "0710",
    "endereco_mac": "000.101.045.120",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.QUAR T O.459",
    "predio": "Geral"
  },
  {
    "id": "DET-694-0712",
    "numero": "0712",
    "endereco_mac": "000.101.047.031",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.QUAR T O.457",
    "predio": "Geral"
  },
  {
    "id": "DET-695-0713",
    "numero": "0713",
    "endereco_mac": "000.101.049.1 15",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.QUAR T O.458",
    "predio": "Geral"
  },
  {
    "id": "DET-696-0714",
    "numero": "0714",
    "endereco_mac": "000.101.047.021",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.QUAR T O.455",
    "predio": "Geral"
  },
  {
    "id": "DET-697-0715",
    "numero": "0715",
    "endereco_mac": "000.101.047.062",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.QUAR T O.453",
    "predio": "Geral"
  },
  {
    "id": "DET-698-0716",
    "numero": "0716",
    "endereco_mac": "000.101.047.023",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.QUAR T O.454",
    "predio": "Geral"
  },
  {
    "id": "DET-699-0717",
    "numero": "0717",
    "endereco_mac": "000.101.049.104",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.QUAR T O.456",
    "predio": "Geral"
  },
  {
    "id": "DET-700-0718",
    "numero": "0718",
    "endereco_mac": "000.101.049.1 14",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.ENFER 02",
    "predio": "Geral"
  },
  {
    "id": "DET-701-0719",
    "numero": "0719",
    "endereco_mac": "000.101.047.075",
    "tipo": "Detector de T emperatura",
    "localizacao": "15 - POST9.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-702-0720",
    "numero": "0720",
    "endereco_mac": "000.101.049.080",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.SL.MA TER",
    "predio": "Geral"
  },
  {
    "id": "DET-703-0721",
    "numero": "0721",
    "endereco_mac": "000.101.049.028",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.QUAR T O.451",
    "predio": "Geral"
  },
  {
    "id": "DET-704-0722",
    "numero": "0722",
    "endereco_mac": "000.101.049.066",
    "tipo": "Detector de Fumaça",
    "localizacao": "15 - POST9.QUAR T O.452",
    "predio": "Geral"
  },
  {
    "id": "DET-705-0723",
    "numero": "0723",
    "endereco_mac": "000.127.147.120",
    "tipo": "Acionador Manual",
    "localizacao": "15 - POST9.CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-706-0724",
    "numero": "0724",
    "endereco_mac": "000.101.049.063",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.BOX15",
    "predio": "Geral"
  },
  {
    "id": "DET-707-0725",
    "numero": "0725",
    "endereco_mac": "000.101.047.070",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.BOX.4",
    "predio": "Geral"
  },
  {
    "id": "DET-708-0726",
    "numero": "0726",
    "endereco_mac": "000.101.049.086",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.BOX.5",
    "predio": "Geral"
  },
  {
    "id": "DET-709-0727",
    "numero": "0727",
    "endereco_mac": "000.101.048.1 19",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.BOX.3",
    "predio": "Geral"
  },
  {
    "id": "DET-710-0728",
    "numero": "0728",
    "endereco_mac": "000.101.049.036",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.BOX.2",
    "predio": "Geral"
  },
  {
    "id": "DET-711-0729",
    "numero": "0729",
    "endereco_mac": "000.101.049.078",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.BOX.1",
    "predio": "Geral"
  },
  {
    "id": "DET-712-0730",
    "numero": "0730",
    "endereco_mac": "000.101.049.082",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTRAL.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-713-0731",
    "numero": "0731",
    "endereco_mac": "000.101.048.1 14",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.ENFER2",
    "predio": "Geral"
  },
  {
    "id": "DET-714-0732",
    "numero": "0732",
    "endereco_mac": "000.101.049.031",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.ENFER1",
    "predio": "Geral"
  },
  {
    "id": "DET-715-0733",
    "numero": "0733",
    "endereco_mac": "000.101.048.1 15",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.DML",
    "predio": "Geral"
  },
  {
    "id": "DET-716-0734",
    "numero": "0734",
    "endereco_mac": "000.101.047.033",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.PRESC",
    "predio": "Geral"
  },
  {
    "id": "DET-717-0735",
    "numero": "0735",
    "endereco_mac": "000.101.045.048",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.QUAR T O",
    "predio": "Geral"
  },
  {
    "id": "DET-718-0736",
    "numero": "0736",
    "endereco_mac": "000.127.147.123",
    "tipo": "Acionador Manual",
    "localizacao": "16 - CTI.CENTRAL.ELEV",
    "predio": "Geral"
  },
  {
    "id": "DET-719-0737",
    "numero": "0737",
    "endereco_mac": "000.101.047.034",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.ACOLHI",
    "predio": "Geral"
  },
  {
    "id": "DET-720-0738",
    "numero": "0738",
    "endereco_mac": "000.101.047.050",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.BOX17",
    "predio": "Geral"
  },
  {
    "id": "DET-721-0739",
    "numero": "0739",
    "endereco_mac": "000.101.048.124",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.BOX18",
    "predio": "Geral"
  },
  {
    "id": "DET-722-0740",
    "numero": "0740",
    "endereco_mac": "000.101.048.123",
    "tipo": "Detector de Fumaça",
    "localizacao": "16 - CTI.CENTR.BOX20",
    "predio": "Geral"
  },
  {
    "id": "DET-723-0741",
    "numero": "0741",
    "endereco_mac": "000.101.045.024",
    "tipo": "Detector de Fumaça",
    "localizacao": "17 - RESID.TRAUMA T OL",
    "predio": "Geral"
  },
  {
    "id": "DET-724-0742",
    "numero": "0742",
    "endereco_mac": "000.101.044.101",
    "tipo": "Detector de Fumaça",
    "localizacao": "17 - RESID.NEROLOGIA",
    "predio": "Geral"
  },
  {
    "id": "DET-725-0743",
    "numero": "0743",
    "endereco_mac": "000.101.045.026",
    "tipo": "Detector de Fumaça",
    "localizacao": "17 - RESID.SONECAS",
    "predio": "Geral"
  },
  {
    "id": "DET-726-0744",
    "numero": "0744",
    "endereco_mac": "000.101.044.100",
    "tipo": "Detector de Fumaça",
    "localizacao": "17 - RESID.ARMARIOS",
    "predio": "Geral"
  },
  {
    "id": "DET-727-0745",
    "numero": "0745",
    "endereco_mac": "000.101.043.027",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.QUAR T .406",
    "predio": "Geral"
  },
  {
    "id": "DET-728-0746",
    "numero": "0746",
    "endereco_mac": "000.101.043.063",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.QUAR T .409",
    "predio": "Geral"
  },
  {
    "id": "DET-729-0747",
    "numero": "0747",
    "endereco_mac": "000.101.043.089",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.QUAR T .407",
    "predio": "Geral"
  },
  {
    "id": "DET-730-0748",
    "numero": "0748",
    "endereco_mac": "000.101.043.062",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.QUAR T .404",
    "predio": "Geral"
  },
  {
    "id": "DET-731-0749",
    "numero": "0749",
    "endereco_mac": "000.101.043.034",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.PLANT .OBS",
    "predio": "Geral"
  },
  {
    "id": "DET-732-0750",
    "numero": "0750",
    "endereco_mac": "000.101.043.031",
    "tipo": "Detector de T emperatura",
    "localizacao": "18 - POST1 1.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-733-0751",
    "numero": "0751",
    "endereco_mac": "000.101.043.042",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.RESIDENCI",
    "predio": "Geral"
  },
  {
    "id": "DET-734-0752",
    "numero": "0752",
    "endereco_mac": "000.101.043.044",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.OBS.RECEM",
    "predio": "Geral"
  },
  {
    "id": "DET-735-0753",
    "numero": "0753",
    "endereco_mac": "000.101.043.037",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.QUAR T .405",
    "predio": "Geral"
  },
  {
    "id": "DET-736-0754",
    "numero": "0754",
    "endereco_mac": "000.101.043.021",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.QUAR T .408",
    "predio": "Geral"
  },
  {
    "id": "DET-737-0755",
    "numero": "0755",
    "endereco_mac": "000.101.043.022",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.OBSER V ACA",
    "predio": "Geral"
  },
  {
    "id": "DET-738-0756",
    "numero": "0756",
    "endereco_mac": "000.101.043.057",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.EMERGENC",
    "predio": "Geral"
  },
  {
    "id": "DET-739-0757",
    "numero": "0757",
    "endereco_mac": "000.101.034.099",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.ENFERMAG",
    "predio": "Geral"
  },
  {
    "id": "DET-740-0758",
    "numero": "0758",
    "endereco_mac": "000.101.043.043",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.ENFERMG",
    "predio": "Geral"
  },
  {
    "id": "DET-741-0759",
    "numero": "0759",
    "endereco_mac": "000.101.043.029",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.LA V AGEM",
    "predio": "Geral"
  },
  {
    "id": "DET-742-0760",
    "numero": "0760",
    "endereco_mac": "000.101.043.084",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.ROUP ARIA",
    "predio": "Geral"
  },
  {
    "id": "DET-743-0761",
    "numero": "0761",
    "endereco_mac": "000.101.043.048",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.PRES.OBST",
    "predio": "Geral"
  },
  {
    "id": "DET-744-0762",
    "numero": "0762",
    "endereco_mac": "000.101.043.041",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.PRES.NEO",
    "predio": "Geral"
  },
  {
    "id": "DET-745-0763",
    "numero": "0763",
    "endereco_mac": "000.101.043.092",
    "tipo": "Detector de Fumaça",
    "localizacao": "19 - C.ONCO.QUIMIOTER",
    "predio": "Geral"
  },
  {
    "id": "DET-746-0764",
    "numero": "0764",
    "endereco_mac": "000.101.047.087",
    "tipo": "Detector de Fumaça",
    "localizacao": "19 - C.ONCO.CONSUL T",
    "predio": "Geral"
  },
  {
    "id": "DET-747-0765",
    "numero": "0765",
    "endereco_mac": "000.101.045.025",
    "tipo": "Detector de Fumaça",
    "localizacao": "19 - C.ONCO.PROCEDIM",
    "predio": "Geral"
  },
  {
    "id": "DET-748-0766",
    "numero": "0766",
    "endereco_mac": "000.101.045.073",
    "tipo": "Detector de Fumaça",
    "localizacao": "19 - C.ONCO.RECPCAO",
    "predio": "Geral"
  },
  {
    "id": "DET-749-0767",
    "numero": "0767",
    "endereco_mac": "000.101.044.126",
    "tipo": "Detector de Fumaça",
    "localizacao": "19 - C.ONCO.MUL TIDISC",
    "predio": "Geral"
  },
  {
    "id": "DET-750-0768",
    "numero": "0768",
    "endereco_mac": "000.101.048.029",
    "tipo": "Detector de Fumaça",
    "localizacao": "19 - C.ONCO.PSICOPED",
    "predio": "Geral"
  },
  {
    "id": "DET-751-0769",
    "numero": "0769",
    "endereco_mac": "000.101.045.1 14",
    "tipo": "Detector de Fumaça",
    "localizacao": "19 - C.ONCO.LUDICO.2",
    "predio": "Geral"
  },
  {
    "id": "DET-752-0770",
    "numero": "0770",
    "endereco_mac": "000.101.048.037",
    "tipo": "Detector de Fumaça",
    "localizacao": "19 - C.ONCO.ENTRETEN",
    "predio": "Geral"
  },
  {
    "id": "DET-753-0771",
    "numero": "0771",
    "endereco_mac": "000.101.045.090",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O.6",
    "predio": "RAD"
  },
  {
    "id": "DET-754-0772",
    "numero": "0772",
    "endereco_mac": "000.101.045.095",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O.2",
    "predio": "RAD"
  },
  {
    "id": "DET-755-0773",
    "numero": "0773",
    "endereco_mac": "000.101.045.071",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.QUAR T O13",
    "predio": "RAD"
  },
  {
    "id": "DET-756-0774",
    "numero": "0774",
    "endereco_mac": "000.101.043.1 14",
    "tipo": "Detector de Fumaça",
    "localizacao": "20 - CO.SALA.04",
    "predio": "Geral"
  },
  {
    "id": "DET-757-0775",
    "numero": "0775",
    "endereco_mac": "000.101.043.1 15",
    "tipo": "Detector de Fumaça",
    "localizacao": "20 - CO.SALA.03",
    "predio": "Geral"
  },
  {
    "id": "DET-758-0776",
    "numero": "0776",
    "endereco_mac": "000.101.043.122",
    "tipo": "Detector de Fumaça",
    "localizacao": "20 - CO.SALA.02",
    "predio": "Geral"
  },
  {
    "id": "DET-759-0777",
    "numero": "0777",
    "endereco_mac": "000.101.047.083",
    "tipo": "Detector de Fumaça",
    "localizacao": "20 - CO.RECEM.NASCIDO",
    "predio": "Geral"
  },
  {
    "id": "DET-760-0778",
    "numero": "0778",
    "endereco_mac": "000.101.051.023",
    "tipo": "Detector de T emperatura",
    "localizacao": "20 - CO.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-761-0779",
    "numero": "0779",
    "endereco_mac": "000.101.054.073",
    "tipo": "Detector de Fumaça",
    "localizacao": "20 - CO.CORREDOR.PRIN",
    "predio": "Geral"
  },
  {
    "id": "DET-762-0780",
    "numero": "0780",
    "endereco_mac": "000.101.043.1 17",
    "tipo": "Detector de Fumaça",
    "localizacao": "20 - CO.SL PRE P AR T O",
    "predio": "Geral"
  },
  {
    "id": "DET-763-0781",
    "numero": "0781",
    "endereco_mac": "000.101.045.097",
    "tipo": "Detector de Fumaça",
    "localizacao": "20 - CO.QUAR T O.420",
    "predio": "Geral"
  },
  {
    "id": "DET-764-0782",
    "numero": "0782",
    "endereco_mac": "000.101.043.067",
    "tipo": "Detector de Fumaça",
    "localizacao": "20 - CO.QUAR T O.419",
    "predio": "Geral"
  },
  {
    "id": "DET-765-0783",
    "numero": "0783",
    "endereco_mac": "000.101.043.120",
    "tipo": "Detector de Fumaça",
    "localizacao": "20 - CO.LA V AG.MA TER",
    "predio": "Geral"
  },
  {
    "id": "DET-766-0784",
    "numero": "0784",
    "endereco_mac": "000.101.043.073",
    "tipo": "Detector de Fumaça",
    "localizacao": "20 - CO.QUAR T O.418",
    "predio": "Geral"
  },
  {
    "id": "DET-767-0785",
    "numero": "0785",
    "endereco_mac": "000.101.048.027",
    "tipo": "Detector de Fumaça",
    "localizacao": "20 - CO.SALA.01",
    "predio": "Geral"
  },
  {
    "id": "DET-768-0786",
    "numero": "0786",
    "endereco_mac": "000.124.071.108",
    "tipo": "Detector de Fumaça",
    "localizacao": "21 - MA T2. QUAR T O 441",
    "predio": "Geral"
  },
  {
    "id": "DET-769-0787",
    "numero": "0787",
    "endereco_mac": "000.101.043.095",
    "tipo": "Detector de Fumaça",
    "localizacao": "21 - MA T2.QUAR T O.440",
    "predio": "Geral"
  },
  {
    "id": "DET-770-0788",
    "numero": "0788",
    "endereco_mac": "000.101.043.078",
    "tipo": "Detector de Fumaça",
    "localizacao": "21 - MA T2.QUAR T O.439",
    "predio": "Geral"
  },
  {
    "id": "DET-771-0789",
    "numero": "0789",
    "endereco_mac": "000.126.030.1 19",
    "tipo": "Acionador Manual",
    "localizacao": "21 - MA T2.EXTENSAO",
    "predio": "Geral"
  },
  {
    "id": "DET-772-0790",
    "numero": "0790",
    "endereco_mac": "000.101.048.054",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .278",
    "predio": "Geral"
  },
  {
    "id": "DET-773-0791",
    "numero": "0791",
    "endereco_mac": "000.101.048.046",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .277",
    "predio": "Geral"
  },
  {
    "id": "DET-774-0792",
    "numero": "0792",
    "endereco_mac": "000.101.048.060",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .275",
    "predio": "Geral"
  },
  {
    "id": "DET-775-0793",
    "numero": "0793",
    "endereco_mac": "000.101.048.088",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.UTLIDADES",
    "predio": "Geral"
  },
  {
    "id": "DET-776-0794",
    "numero": "0794",
    "endereco_mac": "000.101.048.096",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.ENFERMAG",
    "predio": "Geral"
  },
  {
    "id": "DET-777-0795",
    "numero": "0795",
    "endereco_mac": "000.101.048.100",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .274",
    "predio": "Geral"
  },
  {
    "id": "DET-778-0796",
    "numero": "0796",
    "endereco_mac": "000.126.034.1 17",
    "tipo": "Acionador Manual",
    "localizacao": "22 - POST5.CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-779-0797",
    "numero": "0797",
    "endereco_mac": "000.101.048.084",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .276",
    "predio": "Geral"
  },
  {
    "id": "DET-780-0798",
    "numero": "0798",
    "endereco_mac": "000.101.048.099",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.PESQ.CLINI",
    "predio": "Geral"
  },
  {
    "id": "DET-781-0799",
    "numero": "0799",
    "endereco_mac": "000.101.048.071",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.UND.PESQUI",
    "predio": "Geral"
  },
  {
    "id": "DET-782-0800",
    "numero": "0800",
    "endereco_mac": "000.101.048.040",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .271",
    "predio": "Geral"
  },
  {
    "id": "DET-783-0801",
    "numero": "0801",
    "endereco_mac": "000.101.048.047",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR.273.2",
    "predio": "Geral"
  },
  {
    "id": "DET-784-0802",
    "numero": "0802",
    "endereco_mac": "000.101.048.057",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.ROUP ARIA",
    "predio": "Geral"
  },
  {
    "id": "DET-785-0803",
    "numero": "0803",
    "endereco_mac": "000.101.048.048",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.DML",
    "predio": "Geral"
  },
  {
    "id": "DET-786-0804",
    "numero": "0804",
    "endereco_mac": "000.101.048.094",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .268",
    "predio": "Geral"
  },
  {
    "id": "DET-787-0805",
    "numero": "0805",
    "endereco_mac": "000.101.048.068",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .272",
    "predio": "Geral"
  },
  {
    "id": "DET-788-0806",
    "numero": "0806",
    "endereco_mac": "000.101.048.091",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR.273.1",
    "predio": "Geral"
  },
  {
    "id": "DET-789-0807",
    "numero": "0807",
    "endereco_mac": "000.101.048.075",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .269",
    "predio": "Geral"
  },
  {
    "id": "DET-790-0808",
    "numero": "0808",
    "endereco_mac": "000.101.048.064",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .267",
    "predio": "Geral"
  },
  {
    "id": "DET-791-0809",
    "numero": "0809",
    "endereco_mac": "000.101.048.059",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .266",
    "predio": "Geral"
  },
  {
    "id": "DET-792-0810",
    "numero": "0810",
    "endereco_mac": "000.101.048.097",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST5.QUAR T .265",
    "predio": "Geral"
  },
  {
    "id": "DET-793-0812",
    "numero": "0812",
    "endereco_mac": "000.123.1 13.1 18",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST .5.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-794-0813",
    "numero": "0813",
    "endereco_mac": "000.101.048.104",
    "tipo": "Detector de Fumaça",
    "localizacao": "22 - POST .5.QUAR T .270",
    "predio": "Geral"
  },
  {
    "id": "DET-795-0814",
    "numero": "0814",
    "endereco_mac": "000.101.048.058",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - UTIC.LEIT O.5AO7",
    "predio": "Geral"
  },
  {
    "id": "DET-796-0815",
    "numero": "0815",
    "endereco_mac": "000.101.048.044",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.QUAR T .262",
    "predio": "Geral"
  },
  {
    "id": "DET-797-0816",
    "numero": "0816",
    "endereco_mac": "000.101.048.070",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.QUAR T .261",
    "predio": "Geral"
  },
  {
    "id": "DET-798-0817",
    "numero": "0817",
    "endereco_mac": "000.101.048.063",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.QUAR T O.257",
    "predio": "Geral"
  },
  {
    "id": "DET-799-0818",
    "numero": "0818",
    "endereco_mac": "000.101.048.055",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.QUAR T O.256",
    "predio": "Geral"
  },
  {
    "id": "DET-800-0819",
    "numero": "0819",
    "endereco_mac": "000.101.049.052",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.QUAR T O.255",
    "predio": "Geral"
  },
  {
    "id": "DET-801-0820",
    "numero": "0820",
    "endereco_mac": "000.101.048.042",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.QUAR T O.253",
    "predio": "Geral"
  },
  {
    "id": "DET-802-0821",
    "numero": "0821",
    "endereco_mac": "000.101.048.083",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.QUAR T O.251",
    "predio": "Geral"
  },
  {
    "id": "DET-803-0822",
    "numero": "0822",
    "endereco_mac": "000.101.048.093",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.QUAR T O.252",
    "predio": "Geral"
  },
  {
    "id": "DET-804-0823",
    "numero": "0823",
    "endereco_mac": "000.101.048.056",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.ENFERMAG2",
    "predio": "Geral"
  },
  {
    "id": "DET-805-0824",
    "numero": "0824",
    "endereco_mac": "000.101.048.062",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.ENFERMAG1",
    "predio": "Geral"
  },
  {
    "id": "DET-806-0825",
    "numero": "0825",
    "endereco_mac": "000.101.048.087",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.QUAR T O.258",
    "predio": "Geral"
  },
  {
    "id": "DET-807-0826",
    "numero": "0826",
    "endereco_mac": "000.101.048.051",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.SL.LANCHE",
    "predio": "Geral"
  },
  {
    "id": "DET-808-0827",
    "numero": "0827",
    "endereco_mac": "000.101.048.053",
    "tipo": "Detector de T emperatura",
    "localizacao": "23 - POST6.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-809-0828",
    "numero": "0828",
    "endereco_mac": "000.101.048.089",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.126",
    "predio": "Geral"
  },
  {
    "id": "DET-810-0829",
    "numero": "0829",
    "endereco_mac": "000.101.044.026",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.1 16",
    "predio": "Geral"
  },
  {
    "id": "DET-811-0830",
    "numero": "0830",
    "endereco_mac": "000.101.044.060",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.125",
    "predio": "Geral"
  },
  {
    "id": "DET-812-0831",
    "numero": "0831",
    "endereco_mac": "000.101.044.089",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.123",
    "predio": "Geral"
  },
  {
    "id": "DET-813-0832",
    "numero": "0832",
    "endereco_mac": "000.101.044.058",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.1 17",
    "predio": "Geral"
  },
  {
    "id": "DET-814-0833",
    "numero": "0833",
    "endereco_mac": "000.101.044.047",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.120",
    "predio": "Geral"
  },
  {
    "id": "DET-815-0834",
    "numero": "0834",
    "endereco_mac": "000.101.044.039",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.1 19",
    "predio": "Geral"
  },
  {
    "id": "DET-816-0835",
    "numero": "0835",
    "endereco_mac": "000.101.044.032",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.1 18",
    "predio": "Geral"
  },
  {
    "id": "DET-817-0836",
    "numero": "0836",
    "endereco_mac": "000.101.044.064",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.1 15",
    "predio": "Geral"
  },
  {
    "id": "DET-818-0837",
    "numero": "0837",
    "endereco_mac": "000.101.044.086",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.121",
    "predio": "Geral"
  },
  {
    "id": "DET-819-0838",
    "numero": "0838",
    "endereco_mac": "000.101.044.056",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.122",
    "predio": "Geral"
  },
  {
    "id": "DET-820-0839",
    "numero": "0839",
    "endereco_mac": "000.101.044.031",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.124",
    "predio": "Geral"
  },
  {
    "id": "DET-821-0840",
    "numero": "0840",
    "endereco_mac": "000.101.048.098",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.ENFERMAG2",
    "predio": "Geral"
  },
  {
    "id": "DET-822-0841",
    "numero": "0841",
    "endereco_mac": "000.101.044.055",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.ENFERMAG3",
    "predio": "Geral"
  },
  {
    "id": "DET-823-0842",
    "numero": "0842",
    "endereco_mac": "000.127.147.153",
    "tipo": "Acionador Manual",
    "localizacao": "24 - POST2.CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-824-0843",
    "numero": "0843",
    "endereco_mac": "000.101.044.049",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.1 14",
    "predio": "Geral"
  },
  {
    "id": "DET-825-0844",
    "numero": "0844",
    "endereco_mac": "000.101.044.028",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.SER V .SOCIA",
    "predio": "Geral"
  },
  {
    "id": "DET-826-0845",
    "numero": "0845",
    "endereco_mac": "000.101.044.087",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.PROCEDIMEN",
    "predio": "Geral"
  },
  {
    "id": "DET-827-0846",
    "numero": "0846",
    "endereco_mac": "000.101.043.102",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.SER.SOCIAL",
    "predio": "Geral"
  },
  {
    "id": "DET-828-0847",
    "numero": "0847",
    "endereco_mac": "000.101.043.069",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.GUARD.VOLU",
    "predio": "Geral"
  },
  {
    "id": "DET-829-0848",
    "numero": "0848",
    "endereco_mac": "000.101.043.1 1 1",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.OPME",
    "predio": "Geral"
  },
  {
    "id": "DET-830-0849",
    "numero": "0849",
    "endereco_mac": "000.101.047.120",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - UTIC.LEIT O.8",
    "predio": "Geral"
  },
  {
    "id": "DET-831-0850",
    "numero": "0850",
    "endereco_mac": "000.127.147.144",
    "tipo": "Acionador Manual",
    "localizacao": "25 - POST7.ENFERMAG",
    "predio": "Geral"
  },
  {
    "id": "DET-832-0851",
    "numero": "0851",
    "endereco_mac": "000.101.048.092",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.238",
    "predio": "Geral"
  },
  {
    "id": "DET-833-0852",
    "numero": "0852",
    "endereco_mac": "000.101.048.041",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.239",
    "predio": "Geral"
  },
  {
    "id": "DET-834-0853",
    "numero": "0853",
    "endereco_mac": "000.101.044.059",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.240",
    "predio": "Geral"
  },
  {
    "id": "DET-835-0854",
    "numero": "0854",
    "endereco_mac": "000.101.048.066",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.241",
    "predio": "Geral"
  },
  {
    "id": "DET-836-0855",
    "numero": "0855",
    "endereco_mac": "000.101.048.090",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.237",
    "predio": "Geral"
  },
  {
    "id": "DET-837-0856",
    "numero": "0856",
    "endereco_mac": "000.101.048.081",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.236",
    "predio": "Geral"
  },
  {
    "id": "DET-838-0857",
    "numero": "0857",
    "endereco_mac": "000.101.048.077",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.SL.LANCH",
    "predio": "Geral"
  },
  {
    "id": "DET-839-0858",
    "numero": "0858",
    "endereco_mac": "000.101.044.062",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.234",
    "predio": "Geral"
  },
  {
    "id": "DET-840-0859",
    "numero": "0859",
    "endereco_mac": "000.101.048.095",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.232",
    "predio": "Geral"
  },
  {
    "id": "DET-841-0860",
    "numero": "0860",
    "endereco_mac": "000.101.048.067",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.ENFERMAG.3",
    "predio": "Geral"
  },
  {
    "id": "DET-842-0861",
    "numero": "0861",
    "endereco_mac": "000.101.048.102",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.ENFERMAG.2",
    "predio": "Geral"
  },
  {
    "id": "DET-843-0862",
    "numero": "0862",
    "endereco_mac": "000.101.048.074",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.ENFERMAG.1",
    "predio": "Geral"
  },
  {
    "id": "DET-844-0863",
    "numero": "0863",
    "endereco_mac": "000.101.048.086",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.233",
    "predio": "Geral"
  },
  {
    "id": "DET-845-0864",
    "numero": "0864",
    "endereco_mac": "000.101.049.055",
    "tipo": "Detector de T emperatura",
    "localizacao": "25 - POST7.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-846-0865",
    "numero": "0865",
    "endereco_mac": "000.101.047.100",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.225",
    "predio": "Geral"
  },
  {
    "id": "DET-847-0866",
    "numero": "0866",
    "endereco_mac": "000.101.047.101",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.227",
    "predio": "Geral"
  },
  {
    "id": "DET-848-0867",
    "numero": "0867",
    "endereco_mac": "000.101.047.095",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.229",
    "predio": "Geral"
  },
  {
    "id": "DET-849-0868",
    "numero": "0868",
    "endereco_mac": "000.101.047.1 17",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.EMTN",
    "predio": "Geral"
  },
  {
    "id": "DET-850-0869",
    "numero": "0869",
    "endereco_mac": "000.101.047.108",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.230",
    "predio": "Geral"
  },
  {
    "id": "DET-851-0870",
    "numero": "0870",
    "endereco_mac": "000.101.047.090",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.228",
    "predio": "Geral"
  },
  {
    "id": "DET-852-0871",
    "numero": "0871",
    "endereco_mac": "000.101.047.102",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.226",
    "predio": "Geral"
  },
  {
    "id": "DET-853-0872",
    "numero": "0872",
    "endereco_mac": "000.101.048.022",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.SL.MEDICOS",
    "predio": "Geral"
  },
  {
    "id": "DET-854-0873",
    "numero": "0873",
    "endereco_mac": "000.101.047.1 13",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.215",
    "predio": "Geral"
  },
  {
    "id": "DET-855-0874",
    "numero": "0874",
    "endereco_mac": "000.101.047.104",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.SL.IRMAS",
    "predio": "Geral"
  },
  {
    "id": "DET-856-0875",
    "numero": "0875",
    "endereco_mac": "000.101.047.080",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.RESIDENTES",
    "predio": "Geral"
  },
  {
    "id": "DET-857-0876",
    "numero": "0876",
    "endereco_mac": "000.101.047.122",
    "tipo": "Detector de Fumaça",
    "localizacao": "25 - POST7.QUAR T O.216",
    "predio": "Geral"
  },
  {
    "id": "DET-858-0877",
    "numero": "0877",
    "endereco_mac": "000.101.044.088",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.UNIDADE",
    "predio": "Geral"
  },
  {
    "id": "DET-859-0878",
    "numero": "0878",
    "endereco_mac": "000.101.049.037",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - C.ESPEC.DML",
    "predio": "Geral"
  },
  {
    "id": "DET-860-0879",
    "numero": "0879",
    "endereco_mac": "000.101.048.072",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.DML",
    "predio": "Geral"
  },
  {
    "id": "DET-861-0880",
    "numero": "0880",
    "endereco_mac": "000.101.048.076",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.282",
    "predio": "Geral"
  },
  {
    "id": "DET-862-0881",
    "numero": "0881",
    "endereco_mac": "000.101.048.078",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUA.280",
    "predio": "Geral"
  },
  {
    "id": "DET-863-0882",
    "numero": "0882",
    "endereco_mac": "000.101.048.082",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUA.281",
    "predio": "Geral"
  },
  {
    "id": "DET-864-0883",
    "numero": "0883",
    "endereco_mac": "000.101.047.025",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.295",
    "predio": "Geral"
  },
  {
    "id": "DET-865-0884",
    "numero": "0884",
    "endereco_mac": "000.101.049.044",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.293",
    "predio": "Geral"
  },
  {
    "id": "DET-866-0885",
    "numero": "0885",
    "endereco_mac": "000.101.047.058",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.289",
    "predio": "Geral"
  },
  {
    "id": "DET-867-0886",
    "numero": "0886",
    "endereco_mac": "000.101.048.1 12",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.287",
    "predio": "Geral"
  },
  {
    "id": "DET-868-0887",
    "numero": "0887",
    "endereco_mac": "000.101.049.029",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.285",
    "predio": "Geral"
  },
  {
    "id": "DET-869-0888",
    "numero": "0888",
    "endereco_mac": "000.101.049.048",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.ENFERMAG.2",
    "predio": "Geral"
  },
  {
    "id": "DET-870-0889",
    "numero": "0889",
    "endereco_mac": "000.101.048.1 16",
    "tipo": "Detector de T emperatura",
    "localizacao": "26 - POST8.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-871-0890",
    "numero": "0890",
    "endereco_mac": "000.101.045.121",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.ENFERMAG.1",
    "predio": "Geral"
  },
  {
    "id": "DET-872-0891",
    "numero": "0891",
    "endereco_mac": "000.101.047.063",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - UTIC.LEIT O.10",
    "predio": "Geral"
  },
  {
    "id": "DET-873-0892",
    "numero": "0892",
    "endereco_mac": "000.101.048.050",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.283",
    "predio": "Geral"
  },
  {
    "id": "DET-874-0893",
    "numero": "0893",
    "endereco_mac": "000.101.049.062",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - C.ESPEC.GERENCIA",
    "predio": "Geral"
  },
  {
    "id": "DET-875-0894",
    "numero": "0894",
    "endereco_mac": "000.127.147.1 10",
    "tipo": "Acionador Manual",
    "localizacao": "26 - POST8.ENFERMAG",
    "predio": "Geral"
  },
  {
    "id": "DET-876-0895",
    "numero": "0895",
    "endereco_mac": "000.101.047.061",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.284",
    "predio": "Geral"
  },
  {
    "id": "DET-877-0896",
    "numero": "0896",
    "endereco_mac": "000.101.049.024",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.288",
    "predio": "Geral"
  },
  {
    "id": "DET-878-0897",
    "numero": "0897",
    "endereco_mac": "000.101.048.045",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.290",
    "predio": "Geral"
  },
  {
    "id": "DET-879-0898",
    "numero": "0898",
    "endereco_mac": "000.101.049.025",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.292",
    "predio": "Geral"
  },
  {
    "id": "DET-880-0899",
    "numero": "0899",
    "endereco_mac": "000.101.048.065",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.294",
    "predio": "Geral"
  },
  {
    "id": "DET-881-0900",
    "numero": "0900",
    "endereco_mac": "000.101.044.033",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.295",
    "predio": "Geral"
  },
  {
    "id": "DET-882-0901",
    "numero": "0901",
    "endereco_mac": "000.101.044.054",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.296",
    "predio": "Geral"
  },
  {
    "id": "DET-883-0902",
    "numero": "0902",
    "endereco_mac": "000.101.044.084",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.297",
    "predio": "Geral"
  },
  {
    "id": "DET-884-0903",
    "numero": "0903",
    "endereco_mac": "000.101.043.047",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.SL.LAUDOS",
    "predio": "Geral"
  },
  {
    "id": "DET-885-0904",
    "numero": "0904",
    "endereco_mac": "000.101.045.058",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.SL.UL TRAS",
    "predio": "Geral"
  },
  {
    "id": "DET-886-0905",
    "numero": "0905",
    "endereco_mac": "000.101.043.033",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.SL.EXAM.2",
    "predio": "Geral"
  },
  {
    "id": "DET-887-0906",
    "numero": "0906",
    "endereco_mac": "000.101.043.040",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.SL.EXAM.3",
    "predio": "Geral"
  },
  {
    "id": "DET-888-0907",
    "numero": "0907",
    "endereco_mac": "000.101.043.038",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.SL.REUN.1",
    "predio": "Geral"
  },
  {
    "id": "DET-889-0908",
    "numero": "0908",
    "endereco_mac": "000.127.147.104",
    "tipo": "Acionador Manual",
    "localizacao": "27 - POST10.ENFERMAG",
    "predio": "Geral"
  },
  {
    "id": "DET-890-0909",
    "numero": "0909",
    "endereco_mac": "000.101.043.039",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.EMFERMAG",
    "predio": "Geral"
  },
  {
    "id": "DET-891-0910",
    "numero": "0910",
    "endereco_mac": "000.101.043.025",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.QUAR T O202",
    "predio": "Geral"
  },
  {
    "id": "DET-892-0912",
    "numero": "0912",
    "endereco_mac": "000.101.043.053",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.QUAR T O206",
    "predio": "Geral"
  },
  {
    "id": "DET-893-0913",
    "numero": "0913",
    "endereco_mac": "000.101.043.058",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.QUAR T O208",
    "predio": "Geral"
  },
  {
    "id": "DET-894-0914",
    "numero": "0914",
    "endereco_mac": "000.101.043.099",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.QUAR T O207",
    "predio": "Geral"
  },
  {
    "id": "DET-895-0915",
    "numero": "0915",
    "endereco_mac": "000.101.045.080",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.QUAR T O205",
    "predio": "Geral"
  },
  {
    "id": "DET-896-0916",
    "numero": "0916",
    "endereco_mac": "000.101.043.055",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.QUAR T O203",
    "predio": "Geral"
  },
  {
    "id": "DET-897-0917",
    "numero": "0917",
    "endereco_mac": "000.101.043.032",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.QUAR T O201",
    "predio": "Geral"
  },
  {
    "id": "DET-898-0918",
    "numero": "0918",
    "endereco_mac": "000.101.043.045",
    "tipo": "Detector de Fumaça",
    "localizacao": "27 - POST10.SL.REUN.1",
    "predio": "Geral"
  },
  {
    "id": "DET-899-0919",
    "numero": "0919",
    "endereco_mac": "000.101.047.105",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST .12.ROUP ARIA",
    "predio": "Geral"
  },
  {
    "id": "DET-900-0920",
    "numero": "0920",
    "endereco_mac": "000.101.047.088",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O31 1",
    "predio": "Geral"
  },
  {
    "id": "DET-901-0921",
    "numero": "0921",
    "endereco_mac": "000.101.047.079",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O310",
    "predio": "Geral"
  },
  {
    "id": "DET-902-0922",
    "numero": "0922",
    "endereco_mac": "000.101.047.121",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.SL.PROCED",
    "predio": "Geral"
  },
  {
    "id": "DET-903-0923",
    "numero": "0923",
    "endereco_mac": "000.101.048.035",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.ENFERMAG",
    "predio": "Geral"
  },
  {
    "id": "DET-904-0924",
    "numero": "0924",
    "endereco_mac": "000.101.047.1 18",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O312",
    "predio": "Geral"
  },
  {
    "id": "DET-905-0925",
    "numero": "0925",
    "endereco_mac": "000.101.047.081",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - AMER CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-906-0926",
    "numero": "0926",
    "endereco_mac": "000.101.047.124",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O309",
    "predio": "Geral"
  },
  {
    "id": "DET-907-0927",
    "numero": "0927",
    "endereco_mac": "000.101.045.066",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O308",
    "predio": "Geral"
  },
  {
    "id": "DET-908-0928",
    "numero": "0928",
    "endereco_mac": "000.101.048.025",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.SL.LANCHE",
    "predio": "Geral"
  },
  {
    "id": "DET-909-0929",
    "numero": "0929",
    "endereco_mac": "000.101.048.031",
    "tipo": "Detector de T emperatura",
    "localizacao": "28 - POST12.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-910-0930",
    "numero": "0930",
    "endereco_mac": "000.101.047.099",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T .301",
    "predio": "Geral"
  },
  {
    "id": "DET-911-0931",
    "numero": "0931",
    "endereco_mac": "000.123.1 14.066",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T .302",
    "predio": "Geral"
  },
  {
    "id": "DET-912-0932",
    "numero": "0932",
    "endereco_mac": "000.101.048.030",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O304",
    "predio": "Geral"
  },
  {
    "id": "DET-913-0933",
    "numero": "0933",
    "endereco_mac": "000.101.047.1 16",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O305",
    "predio": "Geral"
  },
  {
    "id": "DET-914-0934",
    "numero": "0934",
    "endereco_mac": "000.101.048.026",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O306",
    "predio": "Geral"
  },
  {
    "id": "DET-915-0935",
    "numero": "0935",
    "endereco_mac": "000.101.047.091",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O307",
    "predio": "Geral"
  },
  {
    "id": "DET-916-0936",
    "numero": "0936",
    "endereco_mac": "000.101.047.123",
    "tipo": "Detector de T emperatura",
    "localizacao": "28 - POST12.PRES.MEDI",
    "predio": "Geral"
  },
  {
    "id": "DET-917-0937",
    "numero": "0937",
    "endereco_mac": "000.101.048.028",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR.PL.M",
    "predio": "Geral"
  },
  {
    "id": "DET-918-0938",
    "numero": "0938",
    "endereco_mac": "000.101.045.055",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O313",
    "predio": "Geral"
  },
  {
    "id": "DET-919-0939",
    "numero": "0939",
    "endereco_mac": "000.101.047.1 19",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O314",
    "predio": "Geral"
  },
  {
    "id": "DET-920-0940",
    "numero": "0940",
    "endereco_mac": "000.101.045.064",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O315",
    "predio": "Geral"
  },
  {
    "id": "DET-921-0941",
    "numero": "0941",
    "endereco_mac": "000.101.047.097",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O316",
    "predio": "Geral"
  },
  {
    "id": "DET-922-0942",
    "numero": "0942",
    "endereco_mac": "000.101.047.092",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O317",
    "predio": "Geral"
  },
  {
    "id": "DET-923-0943",
    "numero": "0943",
    "endereco_mac": "000.101.048.021",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O318",
    "predio": "Geral"
  },
  {
    "id": "DET-924-0944",
    "numero": "0944",
    "endereco_mac": "000.127.147.148",
    "tipo": "Acionador Manual",
    "localizacao": "28 - POST12.LACT ARIOS",
    "predio": "Geral"
  },
  {
    "id": "DET-925-0945",
    "numero": "0945",
    "endereco_mac": "000.101.043.080",
    "tipo": "Detector de Fumaça",
    "localizacao": "29 - ALEIT AMENT O",
    "predio": "Geral"
  },
  {
    "id": "DET-926-0946",
    "numero": "0946",
    "endereco_mac": "000.101.048.024",
    "tipo": "Detector de Fumaça",
    "localizacao": "29 - DESPEJ.SACRISTIA",
    "predio": "Geral"
  },
  {
    "id": "DET-927-0947",
    "numero": "0947",
    "endereco_mac": "000.101.043.1 16",
    "tipo": "Detector de Fumaça",
    "localizacao": "29 - SACRISTIA",
    "predio": "Geral"
  },
  {
    "id": "DET-928-0948",
    "numero": "0948",
    "endereco_mac": "000.101.043.096",
    "tipo": "Detector de Fumaça",
    "localizacao": "29 - QUAR T O P ADRE",
    "predio": "Geral"
  },
  {
    "id": "DET-929-0949",
    "numero": "0949",
    "endereco_mac": "000.101.045.039",
    "tipo": "Detector de Fumaça",
    "localizacao": "29 - CPD.SACRISTIA",
    "predio": "Geral"
  },
  {
    "id": "DET-930-0950",
    "numero": "0950",
    "endereco_mac": "000.101.043.066",
    "tipo": "Detector de Fumaça",
    "localizacao": "29 - P AST ORAL",
    "predio": "Geral"
  },
  {
    "id": "DET-931-0951",
    "numero": "0951",
    "endereco_mac": "000.101.047.126",
    "tipo": "Detector de Fumaça",
    "localizacao": "30 - LACT A.SONDARIO3",
    "predio": "Geral"
  },
  {
    "id": "DET-932-0952",
    "numero": "0952",
    "endereco_mac": "000.101.047.085",
    "tipo": "Detector de Fumaça",
    "localizacao": "30 - LACT A.SONDARIO6",
    "predio": "Geral"
  },
  {
    "id": "DET-933-0953",
    "numero": "0953",
    "endereco_mac": "000.101.047.086",
    "tipo": "Detector de Fumaça",
    "localizacao": "30 - LACT A.SONDARIO4",
    "predio": "Geral"
  },
  {
    "id": "DET-934-0954",
    "numero": "0954",
    "endereco_mac": "000.101.048.036",
    "tipo": "Detector de Fumaça",
    "localizacao": "30 - LACT A.SONDARIO1",
    "predio": "Geral"
  },
  {
    "id": "DET-935-0955",
    "numero": "0955",
    "endereco_mac": "000.101.045.086",
    "tipo": "Detector de Fumaça",
    "localizacao": "30 - LACT A.SONDARIO2",
    "predio": "Geral"
  },
  {
    "id": "DET-936-0956",
    "numero": "0956",
    "endereco_mac": "000.101.049.064",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - UCI.SALA.03",
    "predio": "Geral"
  },
  {
    "id": "DET-937-0957",
    "numero": "0957",
    "endereco_mac": "000.101.044.035",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - AMER QUAR T O 3",
    "predio": "Geral"
  },
  {
    "id": "DET-938-0958",
    "numero": "0958",
    "endereco_mac": "000.127.147.133",
    "tipo": "Acionador Manual",
    "localizacao": "31 - UTIC.ENTRADA",
    "predio": "RAD"
  },
  {
    "id": "DET-939-0959",
    "numero": "0959",
    "endereco_mac": "000.101.044.061",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - UTIC.LEIT O.1AO4",
    "predio": "Geral"
  },
  {
    "id": "DET-940-0960",
    "numero": "0960",
    "endereco_mac": "000.101.048.1 1 1",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - UCI.CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-941-0961",
    "numero": "0961",
    "endereco_mac": "000.101.047.056",
    "tipo": "Detector de Fumaça",
    "localizacao": "32 - UTI CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-942-0962",
    "numero": "0962",
    "endereco_mac": "000.101.048.080",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - UCI. BOX 2",
    "predio": "Geral"
  },
  {
    "id": "DET-943-0963",
    "numero": "0963",
    "endereco_mac": "000.101.049.051",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - UCI. BOX 3.1",
    "predio": "Geral"
  },
  {
    "id": "DET-944-0964",
    "numero": "0964",
    "endereco_mac": "000.101.048.105",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.QUAR T O.165",
    "predio": "Geral"
  },
  {
    "id": "DET-945-0965",
    "numero": "0965",
    "endereco_mac": "000.101.049.026",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - UCI. BOX 5",
    "predio": "Geral"
  },
  {
    "id": "DET-946-0966",
    "numero": "0966",
    "endereco_mac": "000.101.048.079",
    "tipo": "Detector de T emperatura",
    "localizacao": "31 - POST3.COP A 4",
    "predio": "Geral"
  },
  {
    "id": "DET-947-0967",
    "numero": "0967",
    "endereco_mac": "000.101.044.037",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.QUAR T O.158",
    "predio": "Geral"
  },
  {
    "id": "DET-948-0968",
    "numero": "0968",
    "endereco_mac": "000.101.044.025",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.QUAR T O.157",
    "predio": "Geral"
  },
  {
    "id": "DET-949-0969",
    "numero": "0969",
    "endereco_mac": "000.101.044.085",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.QUAR T O.155",
    "predio": "Geral"
  },
  {
    "id": "DET-950-0970",
    "numero": "0970",
    "endereco_mac": "000.101.044.053",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.SL.MA TERIA",
    "predio": "Geral"
  },
  {
    "id": "DET-951-0971",
    "numero": "0971",
    "endereco_mac": "000.101.044.052",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.QUAR T O.153",
    "predio": "Geral"
  },
  {
    "id": "DET-952-0972",
    "numero": "0972",
    "endereco_mac": "000.101.044.065",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.QUAR T O.151",
    "predio": "Geral"
  },
  {
    "id": "DET-953-0973",
    "numero": "0973",
    "endereco_mac": "000.101.044.074",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.QUAR T O.152",
    "predio": "Geral"
  },
  {
    "id": "DET-954-0974",
    "numero": "0974",
    "endereco_mac": "000.101.044.081",
    "tipo": "Detector de T emperatura",
    "localizacao": "31 - POST3.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-955-0975",
    "numero": "0975",
    "endereco_mac": "000.101.044.066",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.QUAR T O.154",
    "predio": "Geral"
  },
  {
    "id": "DET-956-0976",
    "numero": "0976",
    "endereco_mac": "000.101.044.080",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.DML",
    "predio": "Geral"
  },
  {
    "id": "DET-957-0977",
    "numero": "0977",
    "endereco_mac": "000.101.044.042",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.ENFERMAG1",
    "predio": "Geral"
  },
  {
    "id": "DET-958-0978",
    "numero": "0978",
    "endereco_mac": "000.101.044.044",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.ENFERMAG2",
    "predio": "Geral"
  },
  {
    "id": "DET-959-0979",
    "numero": "0979",
    "endereco_mac": "000.101.044.070",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.QUAR T O.156",
    "predio": "Geral"
  },
  {
    "id": "DET-960-0980",
    "numero": "0980",
    "endereco_mac": "000.101.044.071",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.QUAR T O.159",
    "predio": "Geral"
  },
  {
    "id": "DET-961-0981",
    "numero": "0981",
    "endereco_mac": "000.101.078.098",
    "tipo": "Detector de Fumaça",
    "localizacao": "32 - UTIC.LEIT O.3",
    "predio": "Geral"
  },
  {
    "id": "DET-962-0982",
    "numero": "0982",
    "endereco_mac": "000.101.078.1 19",
    "tipo": "Detector de Fumaça",
    "localizacao": "32 - UTIC.LEIT O.8",
    "predio": "Geral"
  },
  {
    "id": "DET-963-0983",
    "numero": "0983",
    "endereco_mac": "000.101.078.093",
    "tipo": "Detector de Fumaça",
    "localizacao": "32 - UTIC.LEIT O.1",
    "predio": "Geral"
  },
  {
    "id": "DET-964-0984",
    "numero": "0984",
    "endereco_mac": "000.101.078.087",
    "tipo": "Detector de Fumaça",
    "localizacao": "32 - UTIC.LEIT O.2",
    "predio": "Geral"
  },
  {
    "id": "DET-965-0985",
    "numero": "0985",
    "endereco_mac": "000.101.035.053",
    "tipo": "Detector de Fumaça",
    "localizacao": "32 - UTIC.CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-966-0986",
    "numero": "0986",
    "endereco_mac": "000.101.050.125",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND.DML",
    "predio": "CD"
  },
  {
    "id": "DET-967-0987",
    "numero": "0987",
    "endereco_mac": "000.123.1 16.047",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST O2 QUAR T O124",
    "predio": "Geral"
  },
  {
    "id": "DET-968-0988",
    "numero": "0988",
    "endereco_mac": "000.101.043.071",
    "tipo": "Detector de Fumaça",
    "localizacao": "29 - SL.REUN.HUG.MEDI",
    "predio": "Geral"
  },
  {
    "id": "DET-969-0989",
    "numero": "0989",
    "endereco_mac": "000.101.045.041",
    "tipo": "Detector de T emperatura",
    "localizacao": "33 - LANCHERIA.5",
    "predio": "Geral"
  },
  {
    "id": "DET-970-0990",
    "numero": "0990",
    "endereco_mac": "000.101.046.046",
    "tipo": "Detector de T emperatura",
    "localizacao": "33 - LANCHERIA.4",
    "predio": "Geral"
  },
  {
    "id": "DET-971-0991",
    "numero": "0991",
    "endereco_mac": "000.101.045.044",
    "tipo": "Detector de T emperatura",
    "localizacao": "33 - LANCHERIA.3",
    "predio": "Geral"
  },
  {
    "id": "DET-972-0992",
    "numero": "0992",
    "endereco_mac": "000.101.044.105",
    "tipo": "Detector de T emperatura",
    "localizacao": "33 - LANCHERIA.2",
    "predio": "Geral"
  },
  {
    "id": "DET-973-0993",
    "numero": "0993",
    "endereco_mac": "000.101.043.106",
    "tipo": "Detector de T emperatura",
    "localizacao": "33 - LANCHERIA.1",
    "predio": "Geral"
  },
  {
    "id": "DET-974-0994",
    "numero": "0994",
    "endereco_mac": "000.101.043.1 12",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - NUTRICAO.ASSIST2",
    "predio": "Geral"
  },
  {
    "id": "DET-975-0995",
    "numero": "0995",
    "endereco_mac": "000.101.043.097",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - NUTRICAO.ASSIST1",
    "predio": "Geral"
  },
  {
    "id": "DET-976-0996",
    "numero": "0996",
    "endereco_mac": "000.101.043.075",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - NUTRICAO.ASSIST3",
    "predio": "Geral"
  },
  {
    "id": "DET-977-0997",
    "numero": "0997",
    "endereco_mac": "000.101.045.078",
    "tipo": "Detector de T emperatura",
    "localizacao": "34 - COP A REFEIT ORIO",
    "predio": "Geral"
  },
  {
    "id": "DET-978-0998",
    "numero": "0998",
    "endereco_mac": "000.101.043.1 19",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - GERENC.ENFERMAG1",
    "predio": "Geral"
  },
  {
    "id": "DET-979-0999",
    "numero": "0999",
    "endereco_mac": "000.101.043.085",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - GERENC.ENFERMAG2",
    "predio": "Geral"
  },
  {
    "id": "DET-980-1000",
    "numero": "1000",
    "endereco_mac": "000.101.043.109",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - GERENC.ENFERMG.3",
    "predio": "Geral"
  },
  {
    "id": "DET-981-1001",
    "numero": "1001",
    "endereco_mac": "000.101.047.1 14",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - POST12.QUAR T309",
    "predio": "Geral"
  },
  {
    "id": "DET-982-1002",
    "numero": "1002",
    "endereco_mac": "000.101.043.087",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - REFEIT ORIO.2",
    "predio": "Geral"
  },
  {
    "id": "DET-983-1003",
    "numero": "1003",
    "endereco_mac": "000.101.043.086",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - REFEIT ORIO.1",
    "predio": "Geral"
  },
  {
    "id": "DET-984-1004",
    "numero": "1004",
    "endereco_mac": "000.101.049.021",
    "tipo": "Detector de T emperatura",
    "localizacao": "34 - COZINHA.INDSTR.3",
    "predio": "Geral"
  },
  {
    "id": "DET-985-1005",
    "numero": "1005",
    "endereco_mac": "000.101.048.109",
    "tipo": "Detector de T emperatura",
    "localizacao": "34 - COZINHA.INDSTR.2",
    "predio": "Geral"
  },
  {
    "id": "DET-986-1006",
    "numero": "1006",
    "endereco_mac": "000.101.049.032",
    "tipo": "Detector de T emperatura",
    "localizacao": "34 - COZINHA.INDSTR.1",
    "predio": "Geral"
  },
  {
    "id": "DET-987-1007",
    "numero": "1007",
    "endereco_mac": "000.101.043.124",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - PRONTUARIO.MEDIC",
    "predio": "Geral"
  },
  {
    "id": "DET-988-1008",
    "numero": "1008",
    "endereco_mac": "000.101.043.1 13",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - REGISTRO.HOSPIT1",
    "predio": "Geral"
  },
  {
    "id": "DET-989-1009",
    "numero": "1009",
    "endereco_mac": "000.101.043.082",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - REGISTRO.HOSPIT2",
    "predio": "Geral"
  },
  {
    "id": "DET-990-1010",
    "numero": "1010",
    "endereco_mac": "000.101.043.083",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - REGISTRO.HOSPIT3",
    "predio": "Geral"
  },
  {
    "id": "DET-991-1012",
    "numero": "1012",
    "endereco_mac": "000.101.043.068",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - DIRECAO.MEDICA",
    "predio": "Geral"
  },
  {
    "id": "DET-992-1013",
    "numero": "1013",
    "endereco_mac": "000.127.147.109",
    "tipo": "Acionador Manual",
    "localizacao": "34 - PRONTUARIO MEDIC",
    "predio": "Geral"
  },
  {
    "id": "DET-993-1014",
    "numero": "1014",
    "endereco_mac": "000.101.044.123",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - INFORMACOES.MEDI",
    "predio": "Geral"
  },
  {
    "id": "DET-994-1015",
    "numero": "1015",
    "endereco_mac": "000.127.147.162",
    "tipo": "Acionador Manual",
    "localizacao": "34 - POR T ARIA.PRINCIP",
    "predio": "Geral"
  },
  {
    "id": "DET-995-1016",
    "numero": "1016",
    "endereco_mac": "000.101.044.121",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - TESOURARIA",
    "predio": "Geral"
  },
  {
    "id": "DET-996-1017",
    "numero": "1017",
    "endereco_mac": "000.101.044.023",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - ADMINISTRACAO.6",
    "predio": "Geral"
  },
  {
    "id": "DET-997-1018",
    "numero": "1018",
    "endereco_mac": "000.101.044.102",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - ADMINISTRACAO.4",
    "predio": "Geral"
  },
  {
    "id": "DET-998-1019",
    "numero": "1019",
    "endereco_mac": "000.101.044.1 13",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - ADMINISTRACAO.2",
    "predio": "Geral"
  },
  {
    "id": "DET-999-1020",
    "numero": "1020",
    "endereco_mac": "000.101.044.068",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - ADMINISTRACAO.1",
    "predio": "Geral"
  },
  {
    "id": "DET-1000-1021",
    "numero": "1021",
    "endereco_mac": "000.101.043.1 10",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - ADMINISTRACAO.3",
    "predio": "Geral"
  },
  {
    "id": "DET-1001-1022",
    "numero": "1022",
    "endereco_mac": "000.101.045.030",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - ADMINISTRACAO.5",
    "predio": "Geral"
  },
  {
    "id": "DET-1002-1023",
    "numero": "1023",
    "endereco_mac": "000.101.044.083",
    "tipo": "Detector de Fumaça",
    "localizacao": "34 - F ARMACIA.1",
    "predio": "Geral"
  },
  {
    "id": "DET-1003-1024",
    "numero": "1024",
    "endereco_mac": "000.101.044.097",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - R.X.ROUP ARIA",
    "predio": "Geral"
  },
  {
    "id": "DET-1004-1025",
    "numero": "1025",
    "endereco_mac": "000.101.045.042",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - R.X.SECRET ARIA",
    "predio": "Geral"
  },
  {
    "id": "DET-1005-1026",
    "numero": "1026",
    "endereco_mac": "000.101.045.022",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - CAMARA CLARA",
    "predio": "Geral"
  },
  {
    "id": "DET-1006-1027",
    "numero": "1027",
    "endereco_mac": "000.101.044.1 19",
    "tipo": "Detector de Fumaça",
    "localizacao": "35 - SALA ENGENHARIA",
    "predio": "Geral"
  },
  {
    "id": "DET-1007-1028",
    "numero": "1028",
    "endereco_mac": "000.127.147.134",
    "tipo": "Acionador Manual",
    "localizacao": "35 - ANTIG RESIDENTE",
    "predio": "Geral"
  },
  {
    "id": "DET-1008-1029",
    "numero": "1029",
    "endereco_mac": "000.101.044.124",
    "tipo": "Detector de Fumaça",
    "localizacao": "35 - MANUTENCAO",
    "predio": "Geral"
  },
  {
    "id": "DET-1009-1030",
    "numero": "1030",
    "endereco_mac": "000.127.147.1 18",
    "tipo": "Acionador Manual",
    "localizacao": "2 - POST 12 ENFERMAG",
    "predio": "Geral"
  },
  {
    "id": "DET-1010-1031",
    "numero": "1031",
    "endereco_mac": "000.101.078.077",
    "tipo": "Detector de Fumaça",
    "localizacao": "36 - SUBEST ACAO",
    "predio": "Geral"
  },
  {
    "id": "DET-1011-1032",
    "numero": "1032",
    "endereco_mac": "000.101.046.032",
    "tipo": "Detector de Fumaça",
    "localizacao": "36 - GERADOR SCANIA",
    "predio": "RAD"
  },
  {
    "id": "DET-1012-1033",
    "numero": "1033",
    "endereco_mac": "000.101.078.078",
    "tipo": "Detector de Fumaça",
    "localizacao": "36 - P AIN.GERA.SCANIA",
    "predio": "Geral"
  },
  {
    "id": "DET-1013-1034",
    "numero": "1034",
    "endereco_mac": "000.127.147.156",
    "tipo": "Acionador Manual",
    "localizacao": "14 - POST14.CORREDOR1",
    "predio": "Geral"
  },
  {
    "id": "DET-1014-1035",
    "numero": "1035",
    "endereco_mac": "000.101.047.028",
    "tipo": "Detector de T emperatura",
    "localizacao": "14 - POST14.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-1015-1036",
    "numero": "1036",
    "endereco_mac": "000.101.049.065",
    "tipo": "Detector de Fumaça",
    "localizacao": "14 - POST14.QUAR T .472",
    "predio": "Geral"
  },
  {
    "id": "DET-1016-1037",
    "numero": "1037",
    "endereco_mac": "000.101.078.080",
    "tipo": "Detector de Fumaça",
    "localizacao": "37 - SOT ON.EPIDEMIOLO",
    "predio": "Geral"
  },
  {
    "id": "DET-1017-1038",
    "numero": "1038",
    "endereco_mac": "000.101.043.030",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.QUAR T .401",
    "predio": "Geral"
  },
  {
    "id": "DET-1018-1039",
    "numero": "1039",
    "endereco_mac": "000.101.043.074",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.QUAR T .402",
    "predio": "Geral"
  },
  {
    "id": "DET-1019-1040",
    "numero": "1040",
    "endereco_mac": "000.101.043.049",
    "tipo": "Detector de Fumaça",
    "localizacao": "18 - POST1 1.QUAR T .403",
    "predio": "Geral"
  },
  {
    "id": "DET-1020-1041",
    "numero": "1041",
    "endereco_mac": "000.127.147.152",
    "tipo": "Acionador Manual",
    "localizacao": "39 - P ASSARELA",
    "predio": "Geral"
  },
  {
    "id": "DET-1021-1042",
    "numero": "1042",
    "endereco_mac": "000.101.048.052",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.QUAR T .263",
    "predio": "Geral"
  },
  {
    "id": "DET-1022-1043",
    "numero": "1043",
    "endereco_mac": "000.101.048.085",
    "tipo": "Detector de Fumaça",
    "localizacao": "23 - POST6.DML",
    "predio": "Geral"
  },
  {
    "id": "DET-1023-1044",
    "numero": "1044",
    "endereco_mac": "000.127.147.161",
    "tipo": "Acionador Manual",
    "localizacao": "26 - POST6.CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-1024-1045",
    "numero": "1045",
    "endereco_mac": "000.101.043.023",
    "tipo": "Detector de T emperatura",
    "localizacao": "27 - POST10.COP A",
    "predio": "Geral"
  },
  {
    "id": "DET-1025-1046",
    "numero": "1046",
    "endereco_mac": "000.101.047.065",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.291",
    "predio": "Geral"
  },
  {
    "id": "DET-1026-1047",
    "numero": "1047",
    "endereco_mac": "000.101.049.060",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.286",
    "predio": "Geral"
  },
  {
    "id": "DET-1027-1048",
    "numero": "1048",
    "endereco_mac": "000.101.044.073",
    "tipo": "Detector de Fumaça",
    "localizacao": "26 - POST8.QUAR T O.294",
    "predio": "Geral"
  },
  {
    "id": "DET-1028-1049",
    "numero": "1049",
    "endereco_mac": "000.127.147.105",
    "tipo": "Acionador Manual",
    "localizacao": "26 - POST8.EXTENSAO",
    "predio": "Geral"
  },
  {
    "id": "DET-1029-1050",
    "numero": "1050",
    "endereco_mac": "000.101.047.125",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POS12.SAID.EMERG",
    "predio": "Geral"
  },
  {
    "id": "DET-1030-1051",
    "numero": "1051",
    "endereco_mac": "000.101.048.039",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POS12.QUAR T O.319",
    "predio": "Geral"
  },
  {
    "id": "DET-1031-1052",
    "numero": "1052",
    "endereco_mac": "000.101.044.094",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POST12.QUAR T O320",
    "predio": "Geral"
  },
  {
    "id": "DET-1032-1053",
    "numero": "1053",
    "endereco_mac": "000.101.047.093",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POS12.QUAR T O.321",
    "predio": "Geral"
  },
  {
    "id": "DET-1033-1054",
    "numero": "1054",
    "endereco_mac": "000.101.044.103",
    "tipo": "Detector de Fumaça",
    "localizacao": "28 - POS12.QUAR T O.322",
    "predio": "Geral"
  },
  {
    "id": "DET-1034-1055",
    "numero": "1055",
    "endereco_mac": "000.126.034.124",
    "tipo": "Acionador Manual",
    "localizacao": "19 - C.ONCOLOG CORRED",
    "predio": "Geral"
  },
  {
    "id": "DET-1035-1056",
    "numero": "1056",
    "endereco_mac": "000.101.044.095",
    "tipo": "Detector de Fumaça",
    "localizacao": "19 - C.ONCO.LUDICO.1",
    "predio": "Geral"
  },
  {
    "id": "DET-1036-1057",
    "numero": "1057",
    "endereco_mac": "000.101.045.103",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.RECUPER5",
    "predio": "RAD"
  },
  {
    "id": "DET-1037-1058",
    "numero": "1058",
    "endereco_mac": "000.101.045.061",
    "tipo": "Detector de Fumaça",
    "localizacao": "2 - RAD2AND.RECUPER6",
    "predio": "RAD"
  },
  {
    "id": "DET-1038-1059",
    "numero": "1059",
    "endereco_mac": "000.101.044.036",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.ENFERMG1",
    "predio": "Geral"
  },
  {
    "id": "DET-1039-1060",
    "numero": "1060",
    "endereco_mac": "000.101.048.061",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2.QUAR T O.1 13",
    "predio": "Geral"
  },
  {
    "id": "DET-1040-1061",
    "numero": "1061",
    "endereco_mac": "000.101.043.088",
    "tipo": "Detector de Fumaça",
    "localizacao": "24 - POST2. NIR",
    "predio": "Geral"
  },
  {
    "id": "DET-1041-1062",
    "numero": "1062",
    "endereco_mac": "000.101.049.033",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - UCI. BOX 1",
    "predio": "Geral"
  },
  {
    "id": "DET-1042-1063",
    "numero": "1063",
    "endereco_mac": "000.101.046.049",
    "tipo": "Detector de Fumaça",
    "localizacao": "37 - EST OQUE.1",
    "predio": "Geral"
  },
  {
    "id": "DET-1043-1064",
    "numero": "1064",
    "endereco_mac": "000.101.046.051",
    "tipo": "Detector de Fumaça",
    "localizacao": "37 - EST OQUE.2",
    "predio": "Geral"
  },
  {
    "id": "DET-1044-1065",
    "numero": "1065",
    "endereco_mac": "000.101.045.023",
    "tipo": "Detector de Fumaça",
    "localizacao": "37 - CENTRAL TELEFONI",
    "predio": "Geral"
  },
  {
    "id": "DET-1045-1066",
    "numero": "1066",
    "endereco_mac": "000.101.045.038",
    "tipo": "Detector de Fumaça",
    "localizacao": "9 - RAIOX.SECRE.T OMO",
    "predio": "Geral"
  },
  {
    "id": "DET-1046-1067",
    "numero": "1067",
    "endereco_mac": "000.127.147.199",
    "tipo": "Acionador Manual",
    "localizacao": "9 - RAIO.X.CORREDOR",
    "predio": "Geral"
  },
  {
    "id": "DET-1047-1068",
    "numero": "1068",
    "endereco_mac": "000.101.044.057",
    "tipo": "Detector de Fumaça",
    "localizacao": "8 - HEMOD.SALA.1.1",
    "predio": "Geral"
  },
  {
    "id": "DET-1048-1069",
    "numero": "1069",
    "endereco_mac": "000.101.046.059",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 1 - TECIDO.RECPCAO",
    "predio": "Geral"
  },
  {
    "id": "DET-1049-1070",
    "numero": "1070",
    "endereco_mac": "000.101.046.060",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 1 - MANUT ELETRICA 1",
    "predio": "Geral"
  },
  {
    "id": "DET-1050-1071",
    "numero": "1071",
    "endereco_mac": "000.101.043.105",
    "tipo": "Detector de Fumaça",
    "localizacao": "38 - MAGIST .RECPCAO",
    "predio": "Geral"
  },
  {
    "id": "DET-1051-1072",
    "numero": "1072",
    "endereco_mac": "000.101.045.045",
    "tipo": "Detector de Fumaça",
    "localizacao": "38 - MAGIST .II.FRAC.1",
    "predio": "Geral"
  },
  {
    "id": "DET-1052-1073",
    "numero": "1073",
    "endereco_mac": "000.101.046.041",
    "tipo": "Detector de Fumaça",
    "localizacao": "38 - REFRIGERACAO.1",
    "predio": "Geral"
  },
  {
    "id": "DET-1053-1074",
    "numero": "1074",
    "endereco_mac": "000.101.044.125",
    "tipo": "Detector de Fumaça",
    "localizacao": "38 - AMER QUAR T O 4",
    "predio": "Geral"
  },
  {
    "id": "DET-1054-1075",
    "numero": "1075",
    "endereco_mac": "000.101.044.027",
    "tipo": "Detector de Fumaça",
    "localizacao": "38 - DEP .ROUPQ.SUJA",
    "predio": "Geral"
  },
  {
    "id": "DET-1055-1076",
    "numero": "1076",
    "endereco_mac": "000.101.047.066",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - 1ANDCD.DENSIT OME",
    "predio": "CD"
  },
  {
    "id": "DET-1056-1077",
    "numero": "1077",
    "endereco_mac": "000.101.052.039",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD8AND.QUAR T .806",
    "predio": "CD"
  },
  {
    "id": "DET-1057-1078",
    "numero": "1078",
    "endereco_mac": "000.101.052.102",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD9AND.QUAR T .915",
    "predio": "CD"
  },
  {
    "id": "DET-1058-1079",
    "numero": "1079",
    "endereco_mac": "000.101.051.027",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND.ENGENHAR",
    "predio": "CD"
  },
  {
    "id": "DET-1059-1080",
    "numero": "1080",
    "endereco_mac": "000.101.050.097",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND.COP A",
    "predio": "CD"
  },
  {
    "id": "DET-1060-1081",
    "numero": "1081",
    "endereco_mac": "000.101.051.040",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND.ENFERMAG",
    "predio": "CD"
  },
  {
    "id": "DET-1061-1082",
    "numero": "1082",
    "endereco_mac": "000.101.051.046",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - CD10AND.VEST .MAS",
    "predio": "CD"
  },
  {
    "id": "DET-1062-1083",
    "numero": "1083",
    "endereco_mac": "000.127.147.106",
    "tipo": "Acionador Manual",
    "localizacao": "1 - CD10AND.ELEV ADOR",
    "predio": "CD"
  },
  {
    "id": "DET-1063-1084",
    "numero": "1084",
    "endereco_mac": "000.126.045.092",
    "tipo": "Acionador Manual",
    "localizacao": "5 - SUS.CONSUL T .10",
    "predio": "Geral"
  },
  {
    "id": "DET-1064-1085",
    "numero": "1085",
    "endereco_mac": "000.101.078.105",
    "tipo": "Detector de Fumaça",
    "localizacao": "13 - POST1.PRESCR.MED",
    "predio": "Geral"
  },
  {
    "id": "DET-1065-1086",
    "numero": "1086",
    "endereco_mac": "000.101.078.109",
    "tipo": "Detector de Fumaça",
    "localizacao": "13 - POST1.COP A1",
    "predio": "Geral"
  },
  {
    "id": "DET-1066-1087",
    "numero": "1087",
    "endereco_mac": "000.101.078.1 16",
    "tipo": "Detector de Fumaça",
    "localizacao": "13 - POST1.QUAR T O.52",
    "predio": "Geral"
  },
  {
    "id": "DET-1067-1088",
    "numero": "1088",
    "endereco_mac": "000.101.078.1 15",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.SL.VERMELH",
    "predio": "Geral"
  },
  {
    "id": "DET-1068-1089",
    "numero": "1089",
    "endereco_mac": "000.101.078.085",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.A TEND.PEDI",
    "predio": "Geral"
  },
  {
    "id": "DET-1069-1090",
    "numero": "1090",
    "endereco_mac": "000.101.078.125",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - EMERG.A TEND.CIRU",
    "predio": "Geral"
  },
  {
    "id": "DET-1070-1091",
    "numero": "1091",
    "endereco_mac": "000.101.048.103",
    "tipo": "Detector de Fumaça",
    "localizacao": "31 - POST3.QUAR T O.160",
    "predio": "Geral"
  },
  {
    "id": "DET-1071-1092",
    "numero": "1092",
    "endereco_mac": "000.127.150.232",
    "tipo": "Acionador Manual",
    "localizacao": "5 - CENTRO ESP HALL",
    "predio": "Geral"
  },
  {
    "id": "DET-1072-1093",
    "numero": "1093",
    "endereco_mac": "000.127.147.096",
    "tipo": "Acionador Manual",
    "localizacao": "1 - POR T ARIA FUNC",
    "predio": "Geral"
  },
  {
    "id": "DET-1073-1094",
    "numero": "1094",
    "endereco_mac": "000.126.034.121",
    "tipo": "Acionador Manual",
    "localizacao": "31 - POST3 COR QUA151",
    "predio": "Geral"
  },
  {
    "id": "DET-1074-1095",
    "numero": "1095",
    "endereco_mac": "000.127.147.165",
    "tipo": "Detector de Fumaça",
    "localizacao": "1 - POST3 E 2 CORRED",
    "predio": "Geral"
  },
  {
    "id": "DET-1075-1096",
    "numero": "1096",
    "endereco_mac": "000.127.147.139",
    "tipo": "Acionador Manual",
    "localizacao": "2 - UNIDADE A VC",
    "predio": "Geral"
  },
  {
    "id": "DET-1076-1097",
    "numero": "1097",
    "endereco_mac": "000.127.147.132",
    "tipo": "Acionador Manual",
    "localizacao": "12 - ARQUIVO P ASSIVO",
    "predio": "Geral"
  },
  {
    "id": "DET-1077-1098",
    "numero": "1098",
    "endereco_mac": "000.101.078.096",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - ARQUIVO P ASSIVO1",
    "predio": "Geral"
  },
  {
    "id": "DET-1078-1099",
    "numero": "1099",
    "endereco_mac": "000.101.078.083",
    "tipo": "Detector de Fumaça",
    "localizacao": "12 - ARQUIVO P ASSIVO2",
    "predio": "Geral"
  }
];
