import React from 'react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
  content: string;
}

export function Tooltip({ content }: TooltipProps) {
  return (
    <div className="relative flex items-center group">
      <HelpCircle className="w-4 h-4 text-brand-gray/70 hover:text-brand-blue transition-colors cursor-help ml-1.5" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs px-3 py-2 bg-brand-blue text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-lg text-center leading-relaxed">
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-brand-blue"></div>
      </div>
    </div>
  );
}
