import fs from 'fs';

let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

// Replace chart colors
content = content.replace(/#3b82f6/g, '#1B2042'); // blue-500 -> brand-blue
content = content.replace(/#10B981/g, '#A51D1A'); // green-500 -> brand-red
content = content.replace(/#ef4444/g, '#A51D1A'); // red-500 -> brand-red
content = content.replace(/#f59e0b/g, '#757B8B'); // amber-500 -> brand-gray
content = content.replace(/#9ca3af/g, '#F4E9E9'); // gray-400 -> brand-light

fs.writeFileSync('src/components/Dashboard.tsx', content);
console.log("Dashboard.tsx chart colors fixed!");
