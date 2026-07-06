import fs from 'fs';

let content = fs.readFileSync('src/components/DetectorsView.tsx', 'utf8');
content = content.replace(/#3b82f6/g, '#1B2042');
content = content.replace(/#10b981/g, '#A51D1A');
content = content.replace(/#ef4444/g, '#A51D1A');
content = content.replace(/#f59e0b/g, '#757B8B');
content = content.replace(/#ec4899/g, '#1B2042');
fs.writeFileSync('src/components/DetectorsView.tsx', content);

content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');
content = content.replace(/#EF4444/g, '#A51D1A');
content = content.replace(/#F97316/g, '#757B8B');
content = content.replace(/#F59E0B/g, '#757B8B');
content = content.replace(/#3B82F6/g, '#1B2042');
content = content.replace(/#8B5CF6/g, '#1B2042');
content = content.replace(/#9CA3AF/g, '#F4E9E9');
fs.writeFileSync('src/components/Dashboard.tsx', content);

console.log("Component charts colors fixed!");
