import fs from 'fs';

let code = fs.readFileSync('src/lib/exportUtils.ts', 'utf-8');

code = code.replace(
  `import { EventData } from '../data';`,
  `import { EventData } from '../data';\nimport { Extinguisher } from '../data_extintores';\nimport { Hose } from '../data_hoses';\nimport { Detector } from '../data_detectors';\nimport { Amplifier } from '../data_amplificadores';`
);

fs.writeFileSync('src/lib/exportUtils.ts', code);
console.log("exportUtils imports added");
