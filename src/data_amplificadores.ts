export interface Amplifier {
  id: string;
  codigo_mac: string;
  status: string;
  grupo: string;
  localizacao: string;
  data_hora: string;
  quantidade?: number;
}

export const initialAmplifiers: Amplifier[] = [
  {
    "id": "AMP-41F98FDE",
    "codigo_mac": "41F98FDE",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "-",
    "data_hora": "13/08/2025 15:04:44"
  },
  {
    "id": "AMP-41EC2B22",
    "codigo_mac": "41EC2B22",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Manutenção",
    "data_hora": "13/08/2025 15:04:42"
  },
  {
    "id": "AMP-41F96AE7",
    "codigo_mac": "41F96AE7",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 6",
    "data_hora": "13/08/2025 15:04:39"
  },
  {
    "id": "AMP-41F96BE7",
    "codigo_mac": "41F96BE7",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "-",
    "data_hora": "13/08/2025 15:04:37"
  },
  {
    "id": "AMP-41F98FD1",
    "codigo_mac": "41F98FD1",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Gerador",
    "data_hora": "13/08/2025 15:04:35"
  },
  {
    "id": "AMP-41F96B5F",
    "codigo_mac": "41F96B5F",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Centro Cirúrgico Sala 08",
    "data_hora": "13/08/2025 15:04:32"
  },
  {
    "id": "AMP-41F96B6C",
    "codigo_mac": "41F96B6C",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Endoscopia",
    "data_hora": "13/08/2025 15:04:30"
  },
  {
    "id": "AMP-41F96B72",
    "codigo_mac": "41F96B72",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 9",
    "data_hora": "13/08/2025 15:04:27"
  },
  {
    "id": "AMP-41F96B59",
    "codigo_mac": "41F96B59",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Centro Cirúrgico Corredor",
    "data_hora": "13/08/2025 15:04:25"
  },
  {
    "id": "AMP-41F96ADC",
    "codigo_mac": "41F96ADC",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Escada CME-Posto12",
    "data_hora": "13/08/2025 15:04:22"
  },
  {
    "id": "AMP-41F98FAB",
    "codigo_mac": "41F98FAB",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 7",
    "data_hora": "13/08/2025 15:04:20"
  },
  {
    "id": "AMP-41F98FA7",
    "codigo_mac": "41F98FA7",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "UPF Recepção",
    "data_hora": "13/08/2025 15:04:18"
  },
  {
    "id": "AMP-41F96B6D",
    "codigo_mac": "41F96B6D",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "UTI Central",
    "data_hora": "13/08/2025 15:04:15"
  },
  {
    "id": "AMP-41F96B74",
    "codigo_mac": "41F96B74",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 10",
    "data_hora": "13/08/2025 15:04:12"
  },
  {
    "id": "AMP-41F98FA2",
    "codigo_mac": "41F98FA2",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Laboratório deAnálises",
    "data_hora": "13/08/2025 15:04:09"
  },
  {
    "id": "AMP-41F8D5DF",
    "codigo_mac": "41F8D5DF",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Portaria Visitas",
    "data_hora": "13/08/2025 15:04:07"
  },
  {
    "id": "AMP-41F96ADD",
    "codigo_mac": "41F96ADD",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Uti Clínica",
    "data_hora": "13/08/2025 15:04:04"
  },
  {
    "id": "AMP-41F98FE0",
    "codigo_mac": "41F98FE0",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Escada Incend. Port. Radiot",
    "data_hora": "13/08/2025 15:04:01"
  },
  {
    "id": "AMP-41F96ADA",
    "codigo_mac": "41F96ADA",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Cozinha Corredor",
    "data_hora": "13/08/2025 15:03:59"
  },
  {
    "id": "AMP-41F96B66",
    "codigo_mac": "41F96B66",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Quimioterapia",
    "data_hora": "13/08/2025 15:03:56"
  },
  {
    "id": "AMP-41F96B60",
    "codigo_mac": "41F96B60",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Medicina Nuclear",
    "data_hora": "13/08/2025 15:03:53"
  },
  {
    "id": "AMP-41F96B76",
    "codigo_mac": "41F96B76",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "CDAndar 2",
    "data_hora": "13/08/2025 15:03:51"
  },
  {
    "id": "AMP-41F98FA8",
    "codigo_mac": "41F98FA8",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 12",
    "data_hora": "13/08/2025 15:03:48"
  },
  {
    "id": "AMP-41F96AE3",
    "codigo_mac": "41F96AE3",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "-",
    "data_hora": "13/08/2025 15:03:42"
  },
  {
    "id": "AMP-41F96AF8",
    "codigo_mac": "41F96AF8",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Eng Clinica",
    "data_hora": "13/08/2025 15:03:39"
  },
  {
    "id": "AMP-41F96ADE",
    "codigo_mac": "41F96ADE",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Corredor Principal Recup. 2",
    "data_hora": "13/08/2025 15:03:37"
  },
  {
    "id": "AMP-41F98FDA",
    "codigo_mac": "41F98FDA",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Central",
    "data_hora": "13/08/2025 15:02:51"
  },
  {
    "id": "AMP-41F98FA5",
    "codigo_mac": "41F98FA5",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 16",
    "data_hora": "13/08/2025 15:01:48"
  },
  {
    "id": "AMP-41F96B6A",
    "codigo_mac": "41F96B6A",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 14",
    "data_hora": "13/08/2025 15:01:44"
  },
  {
    "id": "AMP-41F96953",
    "codigo_mac": "41F96953",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "-",
    "data_hora": "13/08/2025 15:01:42"
  },
  {
    "id": "AMP-41F96AD8",
    "codigo_mac": "41F96AD8",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 11",
    "data_hora": "13/08/2025 15:01:36"
  },
  {
    "id": "AMP-41F96B4D",
    "codigo_mac": "41F96B4D",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 18",
    "data_hora": "13/08/2025 15:01:29"
  },
  {
    "id": "AMP-41F98FAC",
    "codigo_mac": "41F98FAC",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Corredor UPF",
    "data_hora": "13/08/2025 15:01:28"
  },
  {
    "id": "AMP-41F96B77",
    "codigo_mac": "41F96B77",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 17",
    "data_hora": "13/08/2025 15:01:22"
  },
  {
    "id": "AMP-41F96B6E",
    "codigo_mac": "41F96B6E",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "-",
    "data_hora": "13/08/2025 15:01:1 1"
  },
  {
    "id": "AMP-41F96BE9",
    "codigo_mac": "41F96BE9",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "-",
    "data_hora": "13/08/2025 15:01:09"
  },
  {
    "id": "AMP-41F96AE0",
    "codigo_mac": "41F96AE0",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Ultrassom P2",
    "data_hora": "13/08/2025 15:01:06"
  },
  {
    "id": "AMP-41F98FE4",
    "codigo_mac": "41F98FE4",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Arquivo Morto",
    "data_hora": "13/08/2025 15:01:04"
  },
  {
    "id": "AMP-41F96B5C",
    "codigo_mac": "41F96B5C",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Hemodinâmica 2",
    "data_hora": "13/08/2025 15:00:59"
  },
  {
    "id": "AMP-41F98FAA",
    "codigo_mac": "41F98FAA",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Frente Capela",
    "data_hora": "13/08/2025 15:00:45"
  },
  {
    "id": "AMP-41F96B73",
    "codigo_mac": "41F96B73",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 15",
    "data_hora": "13/08/2025 15:00:35"
  },
  {
    "id": "AMP-41F96B78",
    "codigo_mac": "41F96B78",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "-",
    "data_hora": "13/08/2025 15:00:33"
  },
  {
    "id": "AMP-41F96B67",
    "codigo_mac": "41F96B67",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 5",
    "data_hora": "13/08/2025 15:00:24"
  },
  {
    "id": "AMP-41F96AE5",
    "codigo_mac": "41F96AE5",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Radiologia",
    "data_hora": "13/08/2025 15:00:22"
  },
  {
    "id": "AMP-41F96B50",
    "codigo_mac": "41F96B50",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "UTI Cardio",
    "data_hora": "13/08/2025 15:00:20"
  },
  {
    "id": "AMP-41F96ADB",
    "codigo_mac": "41F96ADB",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Emergência",
    "data_hora": "13/08/2025 15:00:14"
  },
  {
    "id": "AMP-41F96B71",
    "codigo_mac": "41F96B71",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 19",
    "data_hora": "13/08/2025 14:59:57"
  },
  {
    "id": "AMP-41F96AD7",
    "codigo_mac": "41F96AD7",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Hemodiálise",
    "data_hora": "13/08/2025 14:59:46"
  },
  {
    "id": "AMP-41F98FA9",
    "codigo_mac": "41F98FA9",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Posto 01",
    "data_hora": "13/08/2025 14:59:39"
  },
  {
    "id": "AMP-41F96B6B",
    "codigo_mac": "41F96B6B",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "UTI Pedi Neo",
    "data_hora": "13/08/2025 14:57:52"
  },
  {
    "id": "AMP-41F96AC8",
    "codigo_mac": "41F96AC8",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Maternidade II",
    "data_hora": "13/08/2025 14:57:49"
  },
  {
    "id": "AMP-41F98FD2",
    "codigo_mac": "41F98FD2",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Radiot 7And",
    "data_hora": "13/08/2025 14:53:48"
  },
  {
    "id": "AMP-41F96B4F",
    "codigo_mac": "41F96B4F",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Radioter 6And",
    "data_hora": "13/08/2025 14:52:06"
  },
  {
    "id": "AMP-41F98FEC",
    "codigo_mac": "41F98FEC",
    "status": "online/sincronizado",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Subsolo Radioterapia",
    "data_hora": "13/08/2025 14:45:17"
  },
  {
    "id": "AMP-41F98FAD",
    "codigo_mac": "41F98FAD",
    "status": "offline",
    "grupo": "Sem Nome Registrado",
    "localizacao": "-",
    "data_hora": "13/08/2025 14:25:37"
  },
  {
    "id": "AMP-41F98FA6",
    "codigo_mac": "41F98FA6",
    "status": "offline",
    "grupo": "Sem Nome Registrado",
    "localizacao": "Radiot 8And",
    "data_hora": "13/08/2025 07:41:18"
  }
];
