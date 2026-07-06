import fs from 'fs';

const origPath = '/app/applet/src/data.ts';
let dataFile = fs.readFileSync(origPath, 'utf8');

const parsed = JSON.parse(fs.readFileSync('/app/applet/parsed_data.json', 'utf8'));

// Format parsed JSON as nicely formatted js array contents
let innerContent = parsed.map(p => `  { id: '${p.id}', date: '${p.date}', time: '${p.time}', building: '${p.building}', floor: '${p.floor}', sector: '${p.sector}', reason: '${p.reason}', isFalseAlarm: ${p.isFalseAlarm}, attended: ${p.attended}, priority: '${p.priority}' },`).join('\n');

dataFile = dataFile.replace('];\n', innerContent + '\n];\n');

fs.writeFileSync(origPath, dataFile);
console.log("Merged");
