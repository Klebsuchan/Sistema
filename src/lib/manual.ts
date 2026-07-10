import jsPDF from 'jspdf';

export async function exportManualPDF() {
  const doc = new jsPDF('p', 'mm', 'a4');
  let y = 20;
  let pageNum = 1;

  const leftMargin = 15;
  const rightMargin = 195;
  const maxWidth = rightMargin - leftMargin;

  const newPage = () => {
    doc.addPage();
    pageNum++;
    y = 20;
    // Add page number
    doc.setFontSize(9);
    doc.setTextColor(150);
    doc.text(`Página ${pageNum}`, 195, 290, { align: 'right' });
  };

  const checkPage = (height: number) => {
    if (y + height > 280) {
      newPage();
    }
  };

  const addTitle = (title: string, size: number = 18, color: [number, number, number] = [0, 51, 153]) => {
    checkPage(15);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
    doc.text(title, leftMargin, y);
    y += size * 0.4;
  };

  const addText = (text: string, bold: boolean = false, size: number = 12, color: [number, number, number] = [60, 60, 60]) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(text, maxWidth);
    checkPage(lines.length * (size * 0.4) + 5);
    doc.text(lines, leftMargin, y);
    y += lines.length * (size * 0.45) + 3;
  };

  const drawBrowserWindow = (title: string, height: number) => {
    checkPage(height + 15);
    // draw window
    doc.setDrawColor(200);
    doc.setFillColor(245, 245, 245);
    doc.roundedRect(leftMargin, y, maxWidth, height, 3, 3, 'FD');
    // top bar
    doc.setFillColor(220, 220, 220);
    doc.roundedRect(leftMargin, y, maxWidth, 8, 3, 3, 'F');
    // dots
    doc.setFillColor(255, 90, 90); doc.circle(leftMargin + 5, y + 4, 1.5, 'F');
    doc.setFillColor(255, 190, 50); doc.circle(leftMargin + 9, y + 4, 1.5, 'F');
    doc.setFillColor(50, 200, 50); doc.circle(leftMargin + 13, y + 4, 1.5, 'F');
    // text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text(title, leftMargin + maxWidth / 2, y + 5.5, { align: 'center' });
    
    return y + 8; // returns Y inside the content area
  };

  // PAGE 1: CAPA
  doc.setFillColor(0, 51, 153);
  doc.rect(0, 0, 210, 297, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(36);
  doc.text("MANUAL DO", 105, 120, { align: 'center' });
  doc.text("USUÁRIO", 105, 135, { align: 'center' });
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.text("Guia Passo a Passo Explicativo e Visual", 105, 150, { align: 'center' });
  doc.text("Gestão de Prevenção e Combate a Incêndios", 105, 160, { align: 'center' });
  doc.text("Versão 1.0 - Leitura Fácil", 105, 280, { align: 'center' });
  
  newPage();

  // PAGE 2: Introdução
  addTitle("1. Introdução para Iniciantes", 22);
  addText("Bem-vindo(a) ao sistema de Gestão de Prevenção a Incêndios!", true, 14, [0, 0, 0]);
  addText("Imagine que este sistema é como um grande caderno digital inteligente onde você anota absolutamente tudo sobre a segurança dos prédios: onde estão os extintores, as mangueiras, quando os alarmes tocaram e quem faz parte da equipe de emergência (a nossa Brigada).");
  
  addText("Por que usar este sistema em vez do papel?", true, 14);
  addText("1. O papel se perde, molha ou rasga. Aqui, fica tudo guardado e fácil de achar.");
  addText("2. É rápido: Você não precisa procurar em várias folhas para saber quando um extintor vai vencer, o sistema avisa você.");
  addText("3. Relatórios Mágicos: Com apenas 1 clique, você gera arquivos PDF ou Excel (planilhas) lindíssimos e organizados para mandar para seu chefe ou para o Corpo de Bombeiros em uma auditoria.");
  
  addText("O que é 'Offline-First' (Funciona sem internet)?", true, 14);
  addText("Este é um conceito MUITO importante. O sistema não fica salvo num servidor distante na nuvem. Ele fica salvo DENTRO DO SEU NAVEGADOR (Google Chrome, Edge, Safari, etc).");
  addText("Vantagem: Isso faz ele ser super rápido e funcionar até mesmo se o Wi-Fi da empresa cair. Você continua trabalhando normalmente.");
  addText("Desvantagem: Se você formatar o computador ou usar a opção 'Limpar Histórico e Cookies do Navegador', você pode perder tudo o que digitou. Por isso, ensinaremos sobre BACKUP na última página deste manual.");

  let cy = drawBrowserWindow("Visão Geral do Sistema - Desenho", 60);
  
  // Sidebar mockup
  doc.setFillColor(0, 51, 153);
  doc.rect(leftMargin, cy, 40, 52, 'F');
  // lines in sidebar
  doc.setDrawColor(255);
  doc.line(leftMargin + 5, cy + 10, leftMargin + 35, cy + 10);
  doc.line(leftMargin + 5, cy + 20, leftMargin + 35, cy + 20);
  doc.line(leftMargin + 5, cy + 30, leftMargin + 35, cy + 30);
  
  // Content area
  doc.setFillColor(255, 255, 255);
  doc.rect(leftMargin + 40, cy, maxWidth - 40, 52, 'F');
  doc.setTextColor(0, 51, 153);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text("Painel de Controle Principal", leftMargin + 45, cy + 10);
  
  // Cards Mockup
  doc.setFillColor(240, 240, 240);
  doc.roundedRect(leftMargin + 45, cy + 15, 30, 20, 2, 2, 'F');
  doc.setFillColor(200, 50, 50); doc.rect(leftMargin+45, cy+15, 30, 4, 'F'); // Red header
  doc.setTextColor(100); doc.setFontSize(8); doc.text("120 Extintores", leftMargin + 48, cy + 25);
  
  doc.setFillColor(240, 240, 240);
  doc.roundedRect(leftMargin + 80, cy + 15, 30, 20, 2, 2, 'F');
  doc.setFillColor(50, 100, 200); doc.rect(leftMargin+80, cy+15, 30, 4, 'F'); // Blue header
  doc.setTextColor(100); doc.setFontSize(8); doc.text("34 Mangueiras", leftMargin + 83, cy + 25);

  y += 65;

  newPage();

  // PAGE 3: Navegação e Tooltips
  addTitle("2. Entendendo a Tela (Navegação)", 22);
  addText("Quando você abre o sistema, a tela é dividida em duas partes principais, bem separadas:");
  addText("1. O Menu Lateral (Lado Esquerdo, Azul Escuro): É onde ficam todos os botões para você ir de uma tela para a outra. Pense nele como o Índice de um livro. É ali que você escolhe se quer ir para 'Extintores', 'Brigada', 'Configurações', etc.");
  addText("2. A Área de Trabalho (Centro e Direita, Branca): É onde a 'mágica' acontece de verdade. É aqui que você vai ler as informações, ver as tabelas, os cartões e preencher os novos formulários.");
  
  addTitle("A Dica de Ouro: Os Botões de Ajuda (?)", 16);
  addText("Nós sabemos que a área de prevenção de incêndio tem muitos termos técnicos (O.S, MAC Address, Teste Hidrostático, etc). É normal esquecer o que eles significam.", false, 12, [0,0,0]);
  addText("Por isso, nós criamos os Tooltips (Balõezinhos de Dica). Sempre que você for preencher um formulário no sistema, repare que ao lado de quase todas as palavras existe um ícone pequeno de interrogação (?).", true, 12, [0,0,0]);
  
  cy = drawBrowserWindow("Exemplo Visual de uma Dica (Tooltip)", 50);
  doc.setFillColor(255, 255, 255);
  doc.rect(leftMargin, cy, maxWidth, 42, 'F');
  doc.setTextColor(0,51,153);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text("Prioridade do Evento", leftMargin + 10, cy + 15);
  
  // draw a circle with ?
  doc.setFillColor(150, 150, 150);
  doc.circle(leftMargin + 60, cy + 13.5, 3, 'F');
  doc.setTextColor(255);
  doc.setFontSize(8);
  doc.text("?", leftMargin + 59, cy + 15);
  
  // cursor pointer
  doc.setFillColor(0, 0, 0);
  doc.circle(leftMargin + 63, cy + 17, 1.5, 'F');
  doc.line(leftMargin + 63, cy + 17, leftMargin + 66, cy + 22);
  
  // tooltip box showing up
  doc.setFillColor(0,51,153);
  doc.roundedRect(leftMargin + 65, cy + 5, 80, 25, 2, 2, 'F');
  doc.setTextColor(255);
  doc.setFontSize(10);
  doc.text("Baixa: Sem risco imediato.", leftMargin + 68, cy + 11);
  doc.text("Média: Exige atenção hoje.", leftMargin + 68, cy + 17);
  doc.text("Alta: Risco alto, vá agora.", leftMargin + 68, cy + 23);
  doc.text("Crítica: Risco de fogo iminente.", leftMargin + 68, cy + 29);

  y += 55;

  addText("Como usar: Basta colocar a setinha do mouse em cima do (?) e esperar 1 segundo. Se você estiver no celular, basta dar um toque rápido no (?). Uma caixa colorida vai se abrir te explicando de forma simples e rápida o que você deve digitar naquele campo. Isso evita erros de digitação e mantém todo mundo alinhado!");

  newPage();

  // PAGE 4: Ocorrências (Eventos)
  addTitle("3. Ocorrências (Eventos e Alarmes)", 22);
  addText("As ocorrências são os registros de tudo de anormal que aconteceu no prédio. Um alarme disparou do nada? Um detector apitou? Alguém sentiu cheiro de fumaça e chamou a segurança? Tudo isso é classificado como uma Ocorrência e deve ser registrado.");

  addTitle("Preenchendo um Evento passo a passo", 16);
  addText("Motivo: O que fez o sistema apitar? Foi fumaça? Foi um teste da empresa de manutenção? Foi vapor de água? Selecione a opção que mais se aproxima do que realmente aconteceu.");
  
  addText("Prioridade: Qual o tamanho do perigo dessa situação?", true, 12, [204,0,0]);
  addText("- Baixa: Algo muito simples, como 'bateria do rádio de comunicação acabou'. Ninguém vai se ferir.");
  addText("- Média: 'Detector de fumaça apitou, mas parou sozinho em seguida'. Exige que alguém vá olhar para garantir, mas não precisa sair correndo.");
  addText("- Alta: 'Cheiro de fio queimado muito forte vindo do servidor'. Alguém precisa correr para lá agora mesmo, pois pode começar um incêndio!");
  addText("- Crítica: FOGO! FUMAÇA CONFIRMADA! Risco direto de vida. Acione a sirene, ative os bombeiros e chame a brigada imediatamente.");

  addText("A Caixinha 'Alarme Falso':", true, 12, [0,51,153]);
  addText("Se você chegou lá correndo e viu que alguém estava fumando no banheiro, ou que uma panela soltou muito vapor e enganou o detector, isso é um Alarme Falso. Marque a caixinha 'Alarme Falso' no formulário para os gráficos da empresa saberem que não foi um incêndio de verdade, e sim um engano do aparelho ou mau uso.");

  cy = drawBrowserWindow("Formulário de Ocorrência - Botões", 50);
  doc.setFillColor(255, 255, 255);
  doc.rect(leftMargin, cy, maxWidth, 42, 'F');
  
  // Checkboxes
  doc.setDrawColor(0,51,153);
  doc.roundedRect(leftMargin + 10, cy + 10, 70, 20, 3, 3, 'S');
  doc.rect(leftMargin + 15, cy + 16, 5, 5, 'S'); // Unchecked
  doc.setTextColor(0,51,153);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text("Alarme Falso", leftMargin + 25, cy + 20);
  
  doc.roundedRect(leftMargin + 90, cy + 10, 80, 20, 3, 3, 'S');
  doc.setFillColor(0,51,153);
  doc.rect(leftMargin + 95, cy + 16, 5, 5, 'F'); // Checked
  doc.text("Atendido / Verificado", leftMargin + 105, cy + 20);

  y += 55;

  addText("DICA VALIOSA:", true, 14, [0,100,0]);
  addText("SEMPRE marque a caixinha 'Atendido / Verificado'. Isso serve para provar legalmente que a sua equipe foi fisicamente até o local do alarme para checar o que era, mesmo que tenha sido um alarme falso de vapor. Isso mostra que vocês estão alertas e fazendo o trabalho corretamente.");

  newPage();

  // PAGE 5: Ordens de Serviço (O.S)
  addTitle("4. Ordens de Serviço (O.S)", 22);
  addText("O.S significa 'Ordem de Serviço'. É o 'ticket', 'papelzinho' ou 'chamado' que você abre para a equipe da Manutenção ou da Elétrica quando algo precisa ser consertado ou trocado.");
  
  addText("Exemplo prático: Se você foi checar um alarme de incêndio que disparou e descobriu que o fio de um detector está rompido ou o equipamento derreteu, você não vai tentar colar com fita Durex. Você vai abrir uma O.S formal para a equipe técnica.");

  addText("Status da O.S (Como preencher corretamente?):", true, 14, [0,51,153]);
  addText("1. Não Aberta:", true, 12);
  addText("Você usa essa opção quando não quebrou absolutamente nada. Era só fumaça de um pão torrado no refeitório. O prédio está inteiro, o detector está inteiro. Você só ventilou o local e reiniciou o painel de choque. Como não precisa consertar nada, você NÃO ABRE O.S.");
  
  addText("2. Aberta e Concluída:", true, 12);
  addText("Você usa quando algo estragou, mas já foi resolvido. Quebrou um botão de emergência. Você abriu o chamado (O.S), o eletricista da empresa veio no mesmo dia, trocou o botão, testou e foi embora. O chamado foi aberto e já foi finalizado.");
  
  addText("3. Aberta e Não Concluída:", true, 12);
  addText("Você usa quando o problema é grave ou demorado. Um painel inteiro queimou na tempestade. Você abriu a O.S, mas o eletricista disse: 'Vou ter que encomendar essa placa da fábrica em São Paulo, demora 15 dias para chegar'. Então, você marca essa opção, pois a O.S está em andamento, mas o problema continua lá e todo mundo tem que ficar alerta.");

  cy = drawBrowserWindow("Selecionando o Status da O.S", 45);
  doc.setFillColor(255, 255, 255);
  doc.rect(leftMargin, cy, maxWidth, 37, 'F');
  
  doc.setTextColor(0,51,153);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text("Status O.S", leftMargin + 10, cy + 10);
  
  doc.setDrawColor(200);
  doc.setFillColor(245, 245, 245);
  doc.rect(leftMargin + 10, cy + 15, 80, 10, 'FD');
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60);
  doc.text("Aberta e Não Concluída", leftMargin + 12, cy + 21.5);
  // Dropdown arrow
  doc.setTextColor(150);
  doc.text("▼", leftMargin + 82, cy + 21.5);

  y += 50;

  addText("Atendimento Final:", true, 14);
  addText("É um campo de texto livre. Aqui você escreve com suas próprias palavras um resuminho do que aconteceu e do que foi feito para tentar resolver a situação na hora.");

  newPage();

  // PAGE 6: Extintores
  addTitle("5. Extintores de Incêndio", 22);
  addText("O extintor não é apenas um cilindro vermelho enfeitando a parede. Ele é um equipamento de vida ou morte que obedece a leis rigorosas dos Bombeiros. Todo mês você, ou o inspetor, precisa olhar para cada um deles e ver se está tudo certo.");

  addText("O Checklist do Extintor (Marcando as caixinhas):", true, 14, [0,51,153]);
  
  addText("1. Retirado (Recarga):", true);
  addText("O extintor venceu a validade ou foi descarregado num princípio de fogo, e o caminhão da empresa de manutenção levou ele embora para encher de novo? Se sim, marque esta opção no sistema para você saber que a parede está vazia.");
  
  addText("2. Cobertura no Local (A Regra de Ouro!):", true, 12, [204,0,0]);
  addText("A lei diz que nenhuma área pode ficar desprotegida. Se o caminhão levou o extintor titular embora, você PEGOU UM EXTINTOR RESERVA NO ESTOQUE E COLOCOU NO MESMO LUGAR temporariamente? Se você fez isso (e deve fazer), marque 'Cobertura no local'. Isso mostra que você é um excelente profissional.");
  
  addText("3. Pressurização OK:", true);
  addText("Chegue perto do extintor (tipos Água ou Pó Químico). Olhe para aquele 'reloginho' redondo no topo (chamado manômetro). Tem um ponteiro lá dentro. Esse ponteiro tem que estar apontando exatamente para a faixinha VERDE. Se estiver no verde, marque 'Pressurização OK'. Se estiver no vermelho, ele vazou pressão e não vai funcionar. (Nota: Extintores de Gás CO2 não têm esse reloginho, então ignore isso neles).");
  
  addText("4. Lacre OK:", true);
  addText("Sabe o pino de segurança de metal que a gente puxa antes de apertar o gatilho? Esse pino é preso por um plastiquinho colorido (parece um enforca-gato). Esse plástico é o lacre. Se o lacre estiver rompido ou quebrado, significa que alguém mexeu ou brincou com o extintor. Se estiver inteiro, marque 'Lacre OK'.");

  cy = drawBrowserWindow("Exemplo Visual: Checklist do Extintor", 50);
  doc.setFillColor(255, 255, 255);
  doc.rect(leftMargin, cy, maxWidth, 42, 'F');
  
  // Checkboxes list
  doc.setDrawColor(0,51,153);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(leftMargin + 10, cy + 10, 60, 12, 2, 2, 'FD');
  doc.setFillColor(0,51,153);
  doc.rect(leftMargin + 13, cy + 13.5, 4, 4, 'F'); 
  doc.setTextColor(0,51,153); doc.setFontSize(10); doc.setFont('helvetica', 'bold');
  doc.text("Retirado (Recarga)", leftMargin + 20, cy + 17.5);
  
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(leftMargin + 80, cy + 10, 60, 12, 2, 2, 'FD');
  doc.setFillColor(0,51,153);
  doc.rect(leftMargin + 83, cy + 13.5, 4, 4, 'F'); 
  doc.text("Cobertura no Local", leftMargin + 90, cy + 17.5);
  
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(leftMargin + 10, cy + 25, 60, 12, 2, 2, 'FD');
  doc.rect(leftMargin + 13, cy + 28.5, 4, 4, 'S'); // Unchecked
  doc.text("Pressurização OK", leftMargin + 20, cy + 32.5);

  y += 55;

  newPage();

  // PAGE 7: Mangueiras e Hidrantes
  addTitle("6. Mangueiras e Abrigos de Hidrante", 22);
  addText("Sabe aquela caixa vermelha grande na parede de vidro, ou de metal, que fica nos corredores? Aquilo é o Abrigo de Hidrante. E dentro dele fica uma mangueira de lona muito forte. Assim como o extintor, ela não pode ser simplesmente esquecida lá dentro.");

  addText("O Checklist da Mangueira (Marcando as caixinhas):", true, 14, [0,51,153]);
  
  addText("1. Acoplamento OK:", true);
  addText("Nas pontas da mangueira tem umas peças pesadas de metal dourado (latão), que chamamos de junta Storz (ou engate rápido). Elas não podem estar amaçadas ou ovais, senão não vão rosquear no cano d'água na hora da emergência. Mais importante: tem que ter uma borrachinha preta de vedação dentro delas. Sem a borracha, a água jorra para todos os lados. Tudo certo? Marque OK.");
  
  addText("2. Esguicho OK:", true);
  addText("A mangueira precisa de um bico, que é a 'pistola' na ponta dela, por onde sai a água. Esse bico é o esguicho. Infelizmente, por ser feito de metal, tem gente que rouba para vender! Então você precisa abrir a caixa e ver: A ponta da mangueira está lá bonitinha? Ela abre e fecha com facilidade? Se sim, marque OK.");
  
  addText("3. Botoeira OK:", true);
  addText("Quase toda caixa de hidrante tem um botãozinho vermelho num vidrinho, geralmente escrito 'Quebre o vidro e aperte em caso de fogo'. Ao apertar, ele liga a bomba d'água gigante do prédio para dar pressão nas mangueiras. O botão não está quebrado e o vidro está inteiro? Marque OK.");

  cy = drawBrowserWindow("Exibição Responsiva (Como Fica no Celular)", 75);
  doc.setFillColor(245,245,245);
  doc.rect(leftMargin, cy, maxWidth, 67, 'F');
  
  // Card mobile
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(220);
  doc.roundedRect(leftMargin + 30, cy + 10, maxWidth - 60, 50, 4, 4, 'FD');
  
  doc.setTextColor(0,51,153);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text("Mangueira 05 - Refeitório", leftMargin + 35, cy + 20);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100);
  doc.text("Prédio Anexo • Patrimônio: 44321", leftMargin + 35, cy + 28);
  
  doc.setFillColor(200, 255, 200);
  doc.roundedRect(leftMargin + 35, cy + 35, 45, 15, 2, 2, 'F');
  doc.setTextColor(0, 100, 0);
  doc.setFont('helvetica', 'bold');
  doc.text("Acoplamento: OK", leftMargin + 38, cy + 44);
  
  doc.setFillColor(255, 200, 200);
  doc.roundedRect(leftMargin + 85, cy + 35, 40, 15, 2, 2, 'F');
  doc.setTextColor(150, 0, 0);
  doc.text("Esguicho: FALTA", leftMargin + 88, cy + 44);

  y += 80;
  
  addText("Nota Especial Tecnológica:", true, 12, [0,51,153]);
  addText("Repare no desenho acima. Quando você acessa o sistema pelo seu celular, ele percebe que a tela é pequena. Em vez de mostrar uma tabela gigantesca que te obriga a arrastar o dedo para os lados sem parar, ele magicamente transforma as tabelas em 'Cartões' (Cards). Cada mangueira ou extintor vira um bloquinho fácil de ler enquanto você caminha pelo prédio fazendo a inspeção!");

  newPage();

  // PAGE 8: Sistema de Alarme e Tecnologia
  addTitle("7. Alarme Inteligente (Amplificadores)", 22);
  addText("Os prédios modernos possuem detectores de fumaça 'inteligentes', as famosas 'bolinhas' no teto. Eles conversam com caixas de comando (Painéis/Amplificadores).");
  
  addText("O que é o MAC Address?", true, 14);
  addText("Cada detector ou painel tem um nome secreto de fábrica, um código com números e letras, tipo assim: A1:B2:C3:D4:E5:F6. Isso é o Endereço MAC. Quando o alarme dispara na portaria, a tela lá da central mostra esse código. Aqui no sistema você cadastra esse código e diz 'Esse código A1:B2 é do detector do banheiro feminino do 2º andar'. Isso salva vidas, pois você sabe exatamente para onde correr em vez de ficar procurando fumaça às cegas.");

  addText("Status do Painel/Amplificador:", true, 14, [0,51,153]);
  addText("- Online / Sincronizado:", true);
  addText("Está tudo perfeito. O painel daquele andar está aceso, conversando pela rede e de vigia.");
  
  addText("- Offline:", true, 12, [204,0,0]);
  addText("Aviso de perigo grave! Se está Offline, significa que o painel desligou. Talvez cortaram a força dele e a bateria acabou, ou o cabo de internet rompeu. Se um andar ficar offline, e pegar fogo lá, ninguem vai ficar sabendo até a fumaça sair pelas janelas.");
  
  addText("- Erro:", true, 12, [204,102,0]);
  addText("O painel está vivo, ele está se comunicando com você, mas está gritando: 'Socorro, tem algo errado'. Geralmente a bateria de backup dele estragou, ou algum cabo de um detector foi mordido por um rato.");

  cy = drawBrowserWindow("Visão do Status dos Amplificadores", 55);
  doc.setFillColor(255, 255, 255);
  doc.rect(leftMargin, cy, maxWidth, 47, 'F');
  
  // Good Panel
  doc.setFillColor(230, 255, 230);
  doc.setDrawColor(150, 200, 150);
  doc.roundedRect(leftMargin + 10, cy + 10, maxWidth - 20, 12, 2, 2, 'FD');
  doc.setTextColor(0, 100, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text("Amplificador Torre A - ONLINE", leftMargin + 15, cy + 18);
  
  // Error Panel
  doc.setFillColor(255, 230, 200);
  doc.setDrawColor(200, 150, 100);
  doc.roundedRect(leftMargin + 10, cy + 25, maxWidth - 20, 12, 2, 2, 'FD');
  doc.setTextColor(150, 80, 0);
  doc.text("Amplificador Subsolo - ERRO (Bateria)", leftMargin + 15, cy + 33);

  y += 60;

  newPage();

  // PAGE 9: Brigada de Emergência
  addTitle("8. Equipe de Heróis: A Brigada", 22);
  addText("A Brigada de Incêndio não é o Corpo de Bombeiros, que vem de caminhão. A brigada são os próprios funcionários normais da empresa (padeiro, gerente, recepcionista, enfermeira) que receberam um treinamento especial da segurança do trabalho para usar extintores e saber esvaziar o prédio correndo de forma calma.");

  addText("Como gerenciar a brigada aqui no sistema?", true, 14, [0,51,153]);
  
  addText("1. Status Geral do Funcionário:", true);
  addText("Se o João ainda trabalha na empresa e quer continuar na equipe de segurança, o status dele é ATIVO. Se o João pediu demissão, foi promovido para um setor que não deixa ele participar mais, ou não quer mais, você muda ele para DESLIGADO.");

  addText("2. Módulos EAD e Prático:", true);
  addText("Para a pessoa vestir o colete da brigada, a lei exige que ela assista as aulas chatas no computador (Teoria EAD) e depois vá para o pátio da empresa apagar fogo de verdade numa panela de óleo (Prática).");
  addText("No sistema, você digita as notas dele e seleciona o status.");
  addText("Se a pessoa passou na prova de computador mas não foi no dia da prática no pátio, ela fica com o selo amarelo de 'Pendente'. Ela só ganha o selo verde de 'Aprovado' se completar os dois passos.");

  addText("3. Checkbox 'Todos os Módulos Concluídos':", true);
  addText("A formação da brigada às vezes demora vários meses (eles fazem o módulo 1 em janeiro, o 2 em março, o 3 em agosto...). Você SÓ vai marcar esta caixinha no final do ano, quando o funcionário finalmente pegar o diploma final dele.");

  cy = drawBrowserWindow("Símbolos da Brigada", 45);
  doc.setFillColor(255, 255, 255);
  doc.rect(leftMargin, cy, maxWidth, 37, 'F');
  
  doc.setDrawColor(200);
  doc.roundedRect(leftMargin + 10, cy + 10, 75, 20, 2, 2, 'S');
  doc.setTextColor(0, 51, 153);
  doc.setFontSize(12); doc.setFont('helvetica', 'bold');
  doc.text("Maria Souza", leftMargin + 15, cy + 18);
  doc.setFillColor(255, 255, 200);
  doc.roundedRect(leftMargin + 15, cy + 22, 60, 5, 1, 1, 'F');
  doc.setTextColor(150, 100, 0);
  doc.setFontSize(8);
  doc.text("STATUS: PENDENTE (Faltou Prática)", leftMargin + 16, cy + 25.5);
  
  doc.setDrawColor(200);
  doc.roundedRect(leftMargin + 95, cy + 10, 75, 20, 2, 2, 'S');
  doc.setTextColor(0, 51, 153);
  doc.setFontSize(12); doc.setFont('helvetica', 'bold');
  doc.text("Carlos Oliveira", leftMargin + 100, cy + 18);
  doc.setFillColor(200, 255, 200);
  doc.roundedRect(leftMargin + 100, cy + 22, 60, 5, 1, 1, 'F');
  doc.setTextColor(0, 100, 0);
  doc.setFontSize(8);
  doc.text("STATUS: APROVADO", leftMargin + 101, cy + 25.5);

  y += 50;

  newPage();

  // PAGE 10: Rondas e Inspeções
  addTitle("9. Rondas, Testes e Conformidade", 22);
  addText("A segurança de verdade só acontece se você testar as coisas antes que um incêndio real aconteça. A aba de 'Inspeções Antigas/Diárias' é o seu Diário de Bordo. É aqui que você prova que andou pelo prédio todo testando as coisas.");

  addText("Como preencher o Diário de Testes:", true, 14, [0,51,153]);
  addText("Você chama o porteiro do prédio, ou um operador de máquina e diz: 'Vou simular um incêndio e acionar o botão vermelho da parede, o que você faria?'. Isso é um teste prático de surpresa.");
  
  addText("O Operador entendeu corretamente o que fazer?", true);
  addText("É uma caixinha de sim ou não. Se o porteiro disse: 'Eu pego o rádio, ligo para a segurança no canal 4 e evacuo o andar', ótimo, você marca que ele entendeu. Se ele ficou congelado e não soube quem chamar, você não marca a caixa e anota isso para treinar ele de novo.");
  
  addText("Conformidade (A hora da verdade):", true, 12, [204,0,0]);
  addText("No fim do teste, você tem dois botões de 'bolinha' redonda (Rádio botões).");
  addText("- Conforme: Tudo funcionou lindamente. O alarme tocou alto, a porta de emergência abriu, o funcionário soube ligar para os bombeiros e o sistema fechou o gás. Sucesso absoluto.");
  addText("- Não Conforme: Alguma coisa deu errado. Ou o alarme tocou muito baixo e ninguém ouviu, ou o equipamento não funcionou. Se der 'Não Conforme', você imediatamente deve abrir uma O.S no sistema e relatar nas observações.");

  cy = drawBrowserWindow("Marcar a Conformidade", 45);
  doc.setFillColor(255, 255, 255);
  doc.rect(leftMargin, cy, maxWidth, 37, 'F');
  
  doc.setTextColor(0,51,153);
  doc.setFontSize(12); doc.setFont('helvetica', 'bold');
  doc.text("Resultado do Teste:", leftMargin + 10, cy + 15);
  
  doc.setDrawColor(0,51,153);
  doc.circle(leftMargin + 15, cy + 25, 3, 'S'); // Radio unselected
  doc.circle(leftMargin + 60, cy + 25, 3, 'S'); // Radio selected outer
  doc.setFillColor(0,51,153);
  doc.circle(leftMargin + 60, cy + 25, 1.5, 'F'); // Radio selected inner
  
  doc.setTextColor(60);
  doc.setFontSize(11); doc.setFont('helvetica', 'normal');
  doc.text("Conforme", leftMargin + 20, cy + 26.5);
  doc.text("Não Conforme", leftMargin + 65, cy + 26.5);

  y += 50;

  newPage();

  // PAGE 11: Exportação (Relatórios em 5 segundos)
  addTitle("10. O Super-Poder: Gerar Relatórios", 22);
  addText("Imagine que o diretor da empresa chega para você e diz: 'Eu quero um relatório no meu WhatsApp em 5 minutos com todos os Extintores apenas do Prédio Anexo, só os extintores de lá!'.");
  addText("No papel, você ficaria horas procurando linha por linha. Aqui no sistema, você resolve isso em 5 segundos.");

  addText("O passo a passo da mágica (Exportação Inteligente):", true, 14, [0,51,153]);
  addText("Passo 1: Abra a aba de Extintores (no menu azul da esquerda).");
  addText("Passo 2: Repare que bem em cima da lista tem uma barra branca de Pesquisa com um ícone de lupa, e do lado tem opções para escolher o Prédio.");
  addText("Passo 3: Você clica no filtro e escolhe 'Anexo'. Ou então, digita 'Anexo' na barrinha de lupa.");
  addText("Passo 4: A MÁGICA ACONTECE AQUI. Imediatamente o sistema esconde todos os extintores dos outros prédios e deixa a sua tela limpinha, aparecendo SOMENTE os do Anexo.");
  addText("Passo 5: Do lado direito da barra de pesquisa, você clica no botão com o ícone de 'Seta para baixo' chamado 'PDF' (Para relatórios bonitos que não podem ser alterados) ou 'Excel' (Se o diretor quiser abrir no computador dele e fazer continhas).");
  
  addText("O sistema é tão inteligente que ele percebe que você filtrou a tela e vai jogar no PDF ou no Excel APENAS o que os seus olhos estão vendo na tela naquele momento. Problema resolvido, diretor feliz!");

  cy = drawBrowserWindow("Botões de Exportação Mágica", 50);
  doc.setFillColor(255, 255, 255);
  doc.rect(leftMargin, cy, maxWidth, 42, 'F');
  
  // Search and Filter area
  doc.setDrawColor(200);
  doc.roundedRect(leftMargin + 10, cy + 10, 50, 12, 3, 3, 'S');
  doc.setTextColor(150);
  doc.setFontSize(10);
  doc.text("🔍 Pesquisar...", leftMargin + 15, cy + 17.5);

  doc.roundedRect(leftMargin + 65, cy + 10, 40, 12, 3, 3, 'S');
  doc.text("Prédio: Anexo ▼", leftMargin + 68, cy + 17.5);

  // Export buttons
  doc.setDrawColor(200);
  doc.roundedRect(leftMargin + 115, cy + 10, 30, 12, 3, 3, 'S');
  doc.setTextColor(0,51,153); doc.setFont('helvetica', 'bold');
  doc.text("↓ PDF", leftMargin + 125, cy + 17.5);
  
  doc.roundedRect(leftMargin + 150, cy + 10, 30, 12, 3, 3, 'S');
  doc.text("↓ Excel", leftMargin + 158, cy + 17.5);

  y += 55;

  newPage();

  // PAGE 12: BACKUP (IMPORTANTE)
  addTitle("11. SALVA-VIDAS: Faça Backup!", 24, [204, 0, 0]);
  
  addText("LEIA ESTA PÁGINA COM MUITA ATENÇÃO!", true, 16, [204, 0, 0]);
  
  addText("Como já explicamos lá no começo, o sistema é incrivelmente rápido porque guarda todas as centenas de extintores e brigadistas dentro da 'memória' do seu próprio navegador (no Chrome ou Edge que você usa). O nome dessa tecnologia é 'Local Storage'.", false, 12);
  
  addText("Existe um perigo colossal e mortal:", true, 14, [204,0,0]);
  addText("Se o menino do T.I for formatar seu computador e apagar o Windows, ou se você mesmo for nas opções do Google Chrome e apertar o botão 'Limpar Histórico de Navegação e Cookies', o Chrome VAI APAGAR IMPIEDOSAMENTE TODAS AS SUAS ANOTAÇÕES E CADASTROS DO ANO INTEIRO e não tem como a gente recuperar depois.", false, 12);

  addText("A Solução: Como se proteger? (FAZENDO BACKUP)", true, 14, [0,100,0]);
  addText("A cada semana (por exemplo, toda sexta-feira 17h antes de ir embora), você deve OBRIGATORIAMENTE fazer o seguinte:");
  addText("1. Olhe para a última opção lá embaixo no Menu Azul (Esquerdo) do sistema.");
  addText("2. Existe um botão verde chamado 'Fazer Backup Completo'. CLIQUE NELE.");
  addText("3. O seu computador vai baixar um arquivinho pequeno de texto (com o nome tipo backup-sistema.json) que vai para a sua pasta de Downloads.");
  addText("4. Pegue esse arquivo e GUARDE-O COMO UM TESOURO! Copie ele para um Pen Drive, salve no Google Drive, ou mande por e-mail para você mesmo.");

  addText("Fiz uma besteira e o Chrome apagou tudo. E agora?", true, 14, [0,51,153]);
  addText("Fique calmo! Abra o sistema (que vai aparecer totalmente zerado). Clique no botão Laranja 'Restaurar Backup' logo abaixo daquele botão verde. O sistema vai abrir uma janela. Você escolhe aquele arquivo '.json' que você salvou no Pen Drive sexta-feira. E pronto: num piscar de olhos, TUDO VOLTA magicamente para a tela, exatamente como estava no momento em que você baixou o arquivo.");

  cy = drawBrowserWindow("A Ferramenta que Salva Empregos", 55);
  doc.setFillColor(255, 255, 255);
  doc.rect(leftMargin, cy, maxWidth, 47, 'F');

  // Backup btn
  doc.setFillColor(0, 153, 51);
  doc.roundedRect(leftMargin + 20, cy + 15, maxWidth - 40, 12, 3, 3, 'F');
  doc.setTextColor(255);
  doc.setFont('helvetica', 'bold'); doc.setFontSize(12);
  doc.text("↓ FAZER BACKUP COMPLETO (Baixar Dados)", leftMargin + 50, cy + 22.5);

  // Restore btn
  doc.setFillColor(204, 102, 0);
  doc.roundedRect(leftMargin + 20, cy + 32, maxWidth - 40, 12, 3, 3, 'F');
  doc.setTextColor(255);
  doc.text("↑ RESTAURAR BACKUP (Carregar Dados Antigos)", leftMargin + 48, cy + 39.5);

  y += 60;

  newPage();

  // PAGE 13: Fim
  doc.setFillColor(0, 51, 153);
  doc.rect(0, 0, 210, 297, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(30);
  doc.text("VOCÊ ESTÁ PRONTO(A)!", 105, 120, { align: 'center' });
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.text("Agora você entende o sistema melhor do que ninguém.", 105, 140, { align: 'center' });
  doc.text("Se bater aquela dúvida chata no dia a dia, não entre em", 105, 150, { align: 'center' });
  doc.text("pânico. Lembre-se de passar o mouse nos ícones (?).", 105, 160, { align: 'center' });
  
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(12);
  doc.text("A tecnologia não veio para complicar,", 105, 200, { align: 'center' });
  doc.text("ela veio para aposentar o seu caderno de papel.", 105, 208, { align: 'center' });
  doc.text("Use o sistema a seu favor e torne o ambiente mais seguro.", 105, 216, { align: 'center' });

  doc.save('Manual_Mental_Ilustrado_Completo.pdf');
}
