import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Add the logo import
if (!content.includes("import logoHSVP from './logohsvp.png';")) {
  content = content.replace("import React, { useState, useEffect } from 'react';", "import React, { useState, useEffect } from 'react';\nimport logoHSVP from './logohsvp.png';");
}

// Replace the ShieldAlert icon in the login screen with the logo
content = content.replace(
  /<div className="p-3 bg-brand-light text-brand-red rounded-xl">\s*<ShieldAlert className="h-10 w-10" \/>\s*<\/div>/g,
  '<img src={logoHSVP} alt="HSVP Logo" className="h-20 w-auto" />'
);

// Replace the ShieldAlert icon in the header with the logo
content = content.replace(
  /<div className="p-2 bg-brand-red text-brand-red rounded-lg shadow-sm">\s*<ShieldAlert className="h-6 w-6" \/>\s*<\/div>/g,
  '<div className="bg-white p-1 rounded-lg shadow-sm"><img src={logoHSVP} alt="HSVP" className="h-8 w-auto object-contain" /></div>'
);

fs.writeFileSync('src/App.tsx', content);
console.log("App.tsx logo updated!");
