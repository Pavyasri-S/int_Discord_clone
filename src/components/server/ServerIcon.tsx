import React from 'react';
import { IconType } from 'react-icons';
import { HoverEffect } from './HoverEffect';

interface ServerIconProps {
  Icon: IconType;
  onClick?: () => void;
  className?: string;
  showHoverEffect?: boolean;
  label?: string;
}

export const ServerIcon: React.FC<ServerIconProps> = ({
  Icon,
  onClick,
  className = '',
  showHoverEffect = true,
  label
}) => (
  <div className="relative block group">
    {showHoverEffect && <HoverEffect />}
    <div 
      onClick={onClick}
      className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-700 transition duration-300 hover:rounded-2xl text-white"
    >
      {label ? label : <Icon className={className} />}
    </div>
  </div>
);