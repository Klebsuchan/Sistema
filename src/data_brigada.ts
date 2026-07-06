export interface BrigadaItem {
  qtd: number;
  nome: string;
  setor: string;
  cargo: string;
  situacao: string;
  status_prova: string;
  status_modulo: string;
  aproveitamento: string;
  frequencia: string;
  observacao: string;
  modulesConcluded?: boolean;
  frequenciaPresencial?: number;
  frequenciaOnline?: number;
  status?: 'ativo' | 'desligado';
  notaTeorica?: number;
  notaSistema?: number;
}

export const initialBrigada: BrigadaItem[] = [
  {
    "qtd": 1,
    "nome": "SILVA",
    "setor": "Posto 7",
    "cargo": "Enfermagem Aux. de",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "95.000",
    "frequencia": "100.000 APROVOU COM",
    "observacao": ""
  },
  {
    "qtd": 2,
    "nome": "ANISLEYDI BAEZ MORALES BRUNA CAROLINE CD 1-Centro de",
    "setor": "Lavanderia",
    "cargo": "Lavanderia",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "35.000",
    "frequencia": "100.000 AJUDA DO EAD",
    "observacao": ""
  },
  {
    "qtd": 3,
    "nome": "BERTOLETI CAROLINE",
    "setor": "Diagnostico 1",
    "cargo": "Aux. de Apoio Tec. de",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "75.000",
    "frequencia": "100.000",
    "observacao": ""
  },
  {
    "qtd": 4,
    "nome": "TZREWICZENSKI GIRARDI CLAUDIA CRISTIANE CD-1Centro de",
    "setor": "Hemodialise",
    "cargo": "Enfermagem",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "90.000",
    "frequencia": "100.000 AUSENTE E NÃO ESTA NO",
    "observacao": ""
  },
  {
    "qtd": 5,
    "nome": "ROSSETTO DIONARA SILVEIRA",
    "setor": "Diagnóstico",
    "cargo": "Servente Aux.",
    "situacao": "ATIVO",
    "status_prova": "PENDENTE",
    "status_modulo": "PENDENTE",
    "aproveitamento": "0.0",
    "frequencia": "0.0 SISTEMA",
    "observacao": ""
  },
  {
    "qtd": 6,
    "nome": "KUNZLER",
    "setor": "Oncologia Unidade de",
    "cargo": "Administrativo",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "95.000",
    "frequencia": "100.000",
    "observacao": ""
  },
  {
    "qtd": 7,
    "nome": "ELIEGE DE OLIVEIRA PAZ",
    "setor": "Emergencia Unidade de",
    "cargo": "Enfermeiro (a)",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "95.000",
    "frequencia": "100.000 AUSENTE E NÃO ESTA NO",
    "observacao": ""
  },
  {
    "qtd": 8,
    "nome": "ELIZABETE C DALSIN FABIANA DE SOUZA",
    "setor": "Emergencia Servico de",
    "cargo": "Aux. de",
    "situacao": "ATIVO",
    "status_prova": "PENDENTE",
    "status_modulo": "PENDENTE",
    "aproveitamento": "0.0",
    "frequencia": "0.0 SISTEMA",
    "observacao": ""
  },
  {
    "qtd": 9,
    "nome": "RODRIGUES",
    "setor": "Higienizacao",
    "cargo": "Higienizacao",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "85.000",
    "frequencia": "100.000",
    "observacao": ""
  },
  {
    "qtd": 10,
    "nome": "FRANCIELE CHAVES M",
    "setor": "Técnicos.Aux. Analises",
    "cargo": "Aux. de Lab.",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "100.000",
    "frequencia": "100.000 SISTEMA",
    "observacao": ""
  },
  {
    "qtd": 11,
    "nome": "GLORIA CALZA DE FARIAS Distribuição de",
    "setor": "Clinicas CDR-Centro",
    "cargo": "Anal. clinicas",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "95.000",
    "frequencia": "100.000 NÃO ESTA NO",
    "observacao": ""
  },
  {
    "qtd": 12,
    "nome": "JOSIELE S L CAMARGO KETLIN DE ARAUJO DE",
    "setor": "Roupas",
    "cargo": "Servente Tec. de",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "90.000",
    "frequencia": "100.000 SISTEMA",
    "observacao": ""
  },
  {
    "qtd": 13,
    "nome": "ASSUNCAO LUISA GABRIELLI THEIS",
    "setor": "UTI Neonatal Farmácia",
    "cargo": "Enfermagem Aux. de",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "80.000",
    "frequencia": "100.000",
    "observacao": ""
  },
  {
    "qtd": 14,
    "nome": "GARCIA MARIA EDUARDA",
    "setor": "Central",
    "cargo": "Farmacia Tec. de",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "100.000",
    "frequencia": "100.000",
    "observacao": ""
  },
  {
    "qtd": 15,
    "nome": "LOREIRO MARCOLAN MICHELE RAMOS N",
    "setor": "Hemodialise Servico de",
    "cargo": "Enfermagem Aux. de",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "100.000",
    "frequencia": "100.000 NÃO ESTA NO",
    "observacao": ""
  },
  {
    "qtd": 16,
    "nome": "MACHADO MIGUEL ANGEL FONTE",
    "setor": "Higienizacao",
    "cargo": "Higienizacao Aux. de",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "80.000",
    "frequencia": "100.000 SISTEMA APROVOU COM",
    "observacao": ""
  },
  {
    "qtd": 17,
    "nome": "MORALES NAKARITH DEL VALLE",
    "setor": "Lavanderia Servico de",
    "cargo": "Lavanderia Aux. de",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "25.000",
    "frequencia": "100.000 AJUDA DO EAD",
    "observacao": ""
  },
  {
    "qtd": 18,
    "nome": "GARCIA LEON",
    "setor": "Higienizacao",
    "cargo": "Higienizacao",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "80.000",
    "frequencia": "100.000",
    "observacao": ""
  },
  {
    "qtd": 19,
    "nome": "NATALIA T DO PRADO Enfermeiros/Té NILVANE DE FIGUEIREDO",
    "setor": "Pediatrica cnicos Substitutos",
    "cargo": "",
    "situacao": "ATIVO",
    "status_prova": "PENDENTE",
    "status_modulo": "PENDENTE",
    "aproveitamento": "0.0",
    "frequencia": "0.0 SISTEMA",
    "observacao": ""
  },
  {
    "qtd": 20,
    "nome": "MACHADO",
    "setor": "Convênios Servico de",
    "cargo": "Enfermeiro (a) Aux. de",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "95.000",
    "frequencia": "100.000 NÃO ESTA NO",
    "observacao": ""
  },
  {
    "qtd": 21,
    "nome": "ORDELIZ L C CEDENO RENAN DE ALMEIDA",
    "setor": "Higienizacao",
    "cargo": "Higienizacao",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "80.000",
    "frequencia": "100.000 SISTEMA",
    "observacao": ""
  },
  {
    "qtd": 22,
    "nome": "SIQUEIRA SIMAO MAGGIONI DE",
    "setor": "UTI Central Unidade de",
    "cargo": "Enfermeiro (a)",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "95.000",
    "frequencia": "100.000",
    "observacao": ""
  },
  {
    "qtd": 23,
    "nome": "OLIVEIRA SUELLEN DA SILVA DE",
    "setor": "Emergencia",
    "cargo": "Enfermeiro (a) Aux. de",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "95.000",
    "frequencia": "100.000",
    "observacao": ""
  },
  {
    "qtd": 24,
    "nome": "SOUZA VANESSA APARECIDA",
    "setor": "Lavanderia Pronto",
    "cargo": "Lavanderia Aux.",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "100.000",
    "frequencia": "100.000",
    "observacao": ""
  },
  {
    "qtd": 25,
    "nome": "CARVALHO DA SILVA VANESSA DOS SANTOS Distribuição de",
    "setor": "Atendimento CDR-Centro",
    "cargo": "Administrativo",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "90.000",
    "frequencia": "100.000 APROVOU COM",
    "observacao": ""
  },
  {
    "qtd": 26,
    "nome": "RODRIGUES",
    "setor": "Roupas",
    "cargo": "Servente",
    "situacao": "ATIVO",
    "status_prova": "APROVADO",
    "status_modulo": "CONCLUIDO",
    "aproveitamento": "40.000",
    "frequencia": "100.000 AJUDA DO EAD",
    "observacao": ""
  }
];
