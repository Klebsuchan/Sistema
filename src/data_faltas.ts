export interface FaltaItem {
  id?: string;
  qtd: string;
  data: string;
  nome: string;
  cracha: string;
  setor: string;
  data_disp: string;
  observacao: string;
  modulo?: 'Brigada de incêndio' | '1º Socorros';
}

export const initialFaltas: FaltaItem[] = [
  {
    "qtd": "1",
    "data": "08/01/26",
    "nome": "Rossetto Elisabete Consoladora",
    "cracha": "169038",
    "setor": "Gestão Copas Unidade de",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "X",
    "data": "08/01/26",
    "nome": "Dalsin Natalia Terencio do",
    "cracha": "169056",
    "setor": "Emergencia Quimiot.",
    "data_disp": "22/01/26",
    "observacao": "1 E 2 MODULO"
  },
  {
    "qtd": "X",
    "data": "08/01/26",
    "nome": "Prado Leticia de",
    "cracha": "169044",
    "setor": "pediatrica",
    "data_disp": "22/01/26",
    "observacao": "1 E 2 MODULO"
  },
  {
    "qtd": "2",
    "data": "22/01/26",
    "nome": "Oliveira schio Luis Henrique Camargo",
    "cracha": "169073",
    "setor": "Gestão Copas",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "3",
    "data": "22/01/26",
    "nome": "Cavalheiro Nelci Sebastiana de Camargo da",
    "cracha": "169066",
    "setor": "Posto 12 Serviço de",
    "data_disp": "",
    "observacao": "Foi dispensada problema"
  },
  {
    "qtd": "4",
    "data": "22/01/26",
    "nome": "Silva Viviane Carolina Faligurski",
    "cracha": "169090",
    "setor": "Higienização Farmacia",
    "data_disp": "",
    "observacao": "pessoal no dia"
  },
  {
    "qtd": "5",
    "data": "23/01/26",
    "nome": "Rodrigues Elvis Enrique G",
    "cracha": "169062",
    "setor": "Interna Serviço de",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "6",
    "data": "05/02/26",
    "nome": "Rondon Fabiana Sara",
    "cracha": "169116",
    "setor": "Higienização Nutrição",
    "data_disp": "",
    "observacao": "Reprovou"
  },
  {
    "qtd": "7",
    "data": "05/02/26",
    "nome": "Machado Jenifer Rezende",
    "cracha": "2458",
    "setor": "Produção Serviço de",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "8",
    "data": "05/02/26",
    "nome": "Rodrigues Liziane dos",
    "cracha": "169125",
    "setor": "Higienização",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "9",
    "data": "05/02/26",
    "nome": "Santos Amorim",
    "cracha": "169129",
    "setor": "Uti Central",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "10",
    "data": "05/02/26",
    "nome": "Ferreira pawlak Viviane Carolina Faligurski",
    "cracha": "2459",
    "setor": "Produção Farmacia",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "11",
    "data": "05/02/26",
    "nome": "Rodrigues Yankhoba G",
    "cracha": "169062",
    "setor": "Interna",
    "data_disp": "",
    "observacao": "2º falta Reprovou Fazer"
  },
  {
    "qtd": "12",
    "data": "05/02/26",
    "nome": "machado",
    "cracha": "169133",
    "setor": "Lavanderia Serviço de",
    "data_disp": "",
    "observacao": "novamente Reprovou Fazer"
  },
  {
    "qtd": "13",
    "data": "05/02/26",
    "nome": "Yunia A Torres AMANDA APARECIDA SOARES LEITAO",
    "cracha": "169115",
    "setor": "Higienização Servico de",
    "data_disp": "",
    "observacao": "novamente"
  },
  {
    "qtd": "14",
    "data": "05/03/26",
    "nome": "FERREIRA ANA PAULA DOS SANTOS",
    "cracha": "169176",
    "setor": "Higienizacao",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "15",
    "data": "05/03/26",
    "nome": "DE AGUIAR ANDREIA CAMARGO DA",
    "cracha": "169181",
    "setor": "Gestão Copas Unidade de Alimentação e",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "16",
    "data": "05/03/26",
    "nome": "LUZ BIANCA RIBEIRO",
    "cracha": "169194",
    "setor": "Nutrição Escola de Educacao",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "17",
    "data": "05/03/26",
    "nome": "MORAES BRUNA DA",
    "cracha": "169170",
    "setor": "Infantil Servico de",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "18",
    "data": "05/03/26",
    "nome": "SILVA ROSA CASSIANE DOS SANTOS",
    "cracha": "169185",
    "setor": "Higienizacao Unidade de Alimentação e",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "19",
    "data": "05/03/26",
    "nome": "NEULAND",
    "cracha": "169193",
    "setor": "Nutrição",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "20",
    "data": "05/03/26",
    "nome": "DUARTE FABIANA SARA",
    "cracha": "169186",
    "setor": "Patrimonial Nutrição",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "21",
    "data": "05/03/26",
    "nome": "MACHADO GISELE MEDEIROS",
    "cracha": "2458",
    "setor": "Produção Serviço de",
    "data_disp": "",
    "observacao": "2º Falta"
  },
  {
    "qtd": "22",
    "data": "05/03/26",
    "nome": "FERNANDES JAQUELINE APARECIDA",
    "cracha": "169187",
    "setor": "Fonoaudiologia Escola de Educacao",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "23",
    "data": "05/03/26",
    "nome": "SOARES JERI DOS SANTOS",
    "cracha": "169171",
    "setor": "Infantil Servico de",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "24",
    "data": "05/03/26",
    "nome": "PEREIRA JULIANA DE",
    "cracha": "169173",
    "setor": "Higienizacao",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "25",
    "data": "05/03/26",
    "nome": "ARAUJO BELO KELYN HEMELI",
    "cracha": "169180",
    "setor": "Gestão Copas CDR-Centro Distribuição de",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "26",
    "data": "05/03/26",
    "nome": "MARQUES LARA NICOLE MARIANO",
    "cracha": "169195",
    "setor": "Roupas Farmacia",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "27",
    "data": "05/03/26",
    "nome": "NODARI MARCELLA MELLOS DE",
    "cracha": "169190",
    "setor": "Interna Servico de",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "28",
    "data": "05/03/26",
    "nome": "LEON NATHALY RAQUEL",
    "cracha": "169177",
    "setor": "Higienizacao Servico de",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "29",
    "data": "05/03/26",
    "nome": "ANTUNES SIRLENE ELISA",
    "cracha": "169174",
    "setor": "Higienizacao Servico de",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "30",
    "data": "05/03/26",
    "nome": "GABRIEL",
    "cracha": "169179",
    "setor": "Higienizacao",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "X",
    "data": "19/03/26",
    "nome": "MUSSCOPP DEBORA CRISTINA DE OLIVEIRA DA",
    "cracha": "169212",
    "setor": "Paciente Servico de",
    "data_disp": "09/04/26",
    "observacao": "1 E 2 MODULO"
  },
  {
    "qtd": "31",
    "data": "19/03/26",
    "nome": "CONCEICAO ELIANE DE FATIMA CARDOSO",
    "cracha": "169220",
    "setor": "Higienizacao Nutrição",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "X",
    "data": "19/03/26",
    "nome": "NUNES FABIANA SARA",
    "cracha": "169200",
    "setor": "Produção Nutrição",
    "data_disp": "09/04/26",
    "observacao": "1 E 2 MODULO"
  },
  {
    "qtd": "32",
    "data": "19/03/26",
    "nome": "MACHADO KELEN MIRANDA",
    "cracha": "2458",
    "setor": "Produção Centro de Material",
    "data_disp": "",
    "observacao": "3º Falta"
  },
  {
    "qtd": "33",
    "data": "19/03/26",
    "nome": "NUNES SIRLAINE DOS",
    "cracha": "169201",
    "setor": "Esterilizados Servico de",
    "data_disp": "",
    "observacao": "Foi liberada falecimento"
  },
  {
    "qtd": "34",
    "data": "19/03/26",
    "nome": "SANTOS TANISE ALBUQUERQUE",
    "cracha": "169196",
    "setor": "Higienizacao Faturamento Convênios Unidade",
    "data_disp": "",
    "observacao": "familiar"
  },
  {
    "qtd": "35",
    "data": "19/03/26",
    "nome": "DE OLIVEIRA VANUZA",
    "cracha": "169202",
    "setor": "Uruguai Nutrição- Assistência ao",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "X",
    "data": "19/03/26",
    "nome": "COSTELLA ALISMARY V",
    "cracha": "169211",
    "setor": "Paciente",
    "data_disp": "09/04/26",
    "observacao": "1 E 2 MODULO"
  },
  {
    "qtd": "36",
    "data": "09/04/26",
    "nome": "BRITO BOTINI",
    "cracha": "169264",
    "setor": "Gestão Copas",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "37",
    "data": "09/04/26",
    "nome": "PERES",
    "cracha": "169262",
    "setor": "Gestão Copas",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "38",
    "data": "09/04/26",
    "nome": "ELINOR JENNY ZAMORA",
    "cracha": "169251",
    "setor": "Lavanderia",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "39",
    "data": "09/04/26",
    "nome": "SANABI LUANI SOUZA",
    "cracha": "169237",
    "setor": "Gestão Copas",
    "data_disp": "",
    "observacao": ""
  },
  {
    "qtd": "40",
    "data": "09/04/26",
    "nome": "TELOKEN",
    "cracha": "169269",
    "setor": "Posto 05",
    "data_disp": "",
    "observacao": ""
  }
];
