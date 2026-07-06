import fs from 'fs';

const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
if (!tsconfig.include) {
  tsconfig.include = ["src"];
} else if (!tsconfig.include.includes("src")) {
  tsconfig.include.push("src");
}
fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2));
console.log("tsconfig.json updated!");
