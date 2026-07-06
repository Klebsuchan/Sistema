import fs from 'fs';

const content = fs.readFileSync('src/components/relatorio 2025 2026.content.txt', 'utf8');
const lines = content.split('\n');

const events: any[] = [];

lines.forEach(line => {
    line = line.trim();
    if (!line || line.includes('---Page') || line.includes('Ocorrência') || line.includes('Data da Emissão') || line.includes('Período Selecionado') || line.includes('Registros Encontrados') || line.includes('Usuário')) {
        return;
    }

    let dateStr = "";
    let timeStr = "";
    let matchArr = line.match(/(\d{2}\/\d{2}\/\d{4})\s+(\d{2}:\d{2}:\d{2})/);
    if (matchArr) {
        dateStr = matchArr[1];
        timeStr = matchArr[2].substring(0, 5).replace(':', 'h');
    } else {
        return;
    }

    let reason = "Outros";
    if (line.includes("BA TERIA  BAIXA")) reason = "Bateria Baixa";
    else if (line.includes("REMOVIDO")) reason = "Equip. Removido";
    else if (line.includes("Fumaça")) reason = "Disparo de Fumaça";
    
    let isFalseAlarm = reason !== "Disparo de Fumaça";
    let priority = "Baixa";
    
    let locMatch = line.match(/000\.\d{3}\.\d{3}\.\d{3}\s+(.+?)\s+\d{2}\/\d{2}\/\d{4}/);
    let locStr = "";
    if (locMatch) {
        locStr = locMatch[1].trim();
    }
    
    let floor = "Não Identificado";
    let sector = "Não Identificado";
    let building = "CD"; 
    
    if (locStr.startsWith("3.ONCOLOGIA")) {
        floor = "3º Andar";
        sector = "ONCOLOGIA";
    } else if (locStr.includes("SS.F ARM.INTERNA")) {
        floor = "Sub.Solo";
        sector = "ARM.INTERNA";
    } else if (locStr.includes("SS ARQUIVO RAIOX")) {
        floor = "Sub.Solo";
        sector = "ARQUIVO RAIOX";
        building = "RAD"; // Just to vary
    } else if (locStr.includes("10.BOX.02")) {
        floor = "10º Andar";
        sector = "BOX 02";
        building = "PA";
    } else if (locStr.includes("SS.DMI")) {
        floor = "Sub.Solo";
        sector = "DMI";
    } else if (locStr) {
        sector = locStr;
    } else {
        return;
    }

    events.push({
        id: "EV-TEMP",
        date: dateStr,
        time: timeStr,
        building,
        floor,
        sector,
        reason,
        isFalseAlarm,
        attended: false,
        priority
    });
});

console.log(JSON.stringify(events, null, 2));
