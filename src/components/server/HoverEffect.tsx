import React from 'react';

export const HoverEffect: React.FC = () => (
    <div className="absolute flex -left-3 h-full items-center">
    <div className="w-1 h-5 bg-white rounded-r opacity-0 group-hover:opacity-100 transition-all duration-200 scale-0 group-hover:scale-100 origin-left"></div>
    </div>
);