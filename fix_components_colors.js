import fs from 'fs';

let content = fs.readFileSync('src/components/DetectorsView.tsx', 'utf8');
content = content.replace(/#3b82f6/gi, '#1B2042');
content = content.replace(/#10b981/gi, '#A51D1A');
content = content.replace(/#ef4444/gi, '#A51D1A');
content = content.replace(/#f59e0b/gi, '#757B8B');
content = content.replace(/#ec4899/gi, '#1B2042');
content = content.replace(/#0f172a/gi, '#1B2042');
content = content.replace(/#8b5cf6/gi, '#A51D1A');
fs.writeFileSync('src/components/DetectorsView.tsx', content);

content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');
content = content.replace(/#EF4444/gi, '#A51D1A');
content = content.replace(/#F97316/gi, '#757B8B');
content = content.replace(/#F59E0B/gi, '#757B8B');
content = content.replace(/#3B82F6/gi, '#1B2042');
content = content.replace(/#8B5CF6/gi, '#1B2042');
content = content.replace(/#9CA3AF/gi, '#F4E9E9');
fs.writeFileSync('src/components/Dashboard.tsx', content);

console.log("Component charts colors fixed!");
