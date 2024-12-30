import React, { ReactNode } from 'react';
import { HoverEffect } from './HoverEffect';

interface ServerButtonProps {
  children: ReactNode;
  onClick?: () => void;
  showHoverEffect?: boolean;
  hoverColor?: string;
}

export const ServerButton: React.FC<ServerButtonProps> = ({
  children,
  onClick,
  showHoverEffect = true,
  hoverColor = 'hover:bg-indigo-500'
}) => (
  <div className="relative block group">
    {showHoverEffect && <HoverEffect />}
    <div 
      onClick={onClick}
      className={`bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center text-white ${hoverColor} transition duration-300 hover:rounded-2xl`}
    >
      {children}
    </div>
  </div>
);