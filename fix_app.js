import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace hover states
content = content.replace(/\bhover:bg-blue-800\/40\b/g, 'hover:bg-brand-light/20');
content = content.replace(/\bhover:bg-blue-800\b/g, 'hover:opacity-90');
content = content.replace(/\bhover:bg-brand-blue\b/g, 'hover:opacity-90');
content = content.replace(/\bhover:bg-blue-200\b/g, 'hover:bg-brand-light');
content = content.replace(/\bhover:bg-red-600\b/g, 'hover:opacity-90');
content = content.replace(/\bhover:bg-blue-50\b/g, 'hover:bg-brand-light');
content = content.replace(/\bhover:text-blue-600\b/g, 'hover:opacity-80');
content = content.replace(/\bhover:text-brand-blue\b/g, 'hover:opacity-80');

// Replace specific Tailwind text colors
content = content.replace(/\btext-blue-500\b/g, 'text-brand-gray');
content = content.replace(/\btext-blue-600\b/g, 'text-brand-gray');
content = content.replace(/\btext-blue-400\b/g, 'text-brand-gray');
content = content.replace(/\btext-red-100\b/g, 'text-brand-light');
content = content.replace(/\btext-red-600\b/g, 'text-brand-red');
content = content.replace(/\btext-red-500\b/g, 'text-brand-red');

// Replace specific Tailwind borders
content = content.replace(/\bborder-blue-100\b/g, 'border-brand-light');
content = content.replace(/\bborder-blue-200\b/g, 'border-brand-light');
content = content.replace(/\bborder-blue-300\b/g, 'border-brand-light');
content = content.replace(/\bborder-red-100\b/g, 'border-brand-light');
content = content.replace(/\bborder-red-900\/30\b/g, 'border-brand-blue/30');

// Replace specific backgrounds
content = content.replace(/\bbg-blue-100\b/g, 'bg-brand-light');
content = content.replace(/\bbg-blue-600\b/g, 'bg-brand-blue');
content = content.replace(/\bbg-blue-300\b/g, 'bg-brand-light');
content = content.replace(/\bbg-blue-800\/60\b/g, 'bg-brand-blue/60');
content = content.replace(/\bbg-blue-900\/20\b/g, 'bg-black/20');
content = content.replace(/\bbg-blue-950\/80\b/g, 'bg-black/80');

// Replace ring
content = content.replace(/\bring-red-500\b/g, 'ring-brand-red');

fs.writeFileSync('src/App.tsx', content);
console.log("App.tsx fixed!");
