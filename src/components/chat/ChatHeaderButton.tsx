import React from 'react';
import { Button } from '../ui/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface ChatHeaderButtonProps {
  label: string;
  isVisible: boolean;
  onClick: () => void;
  variant: 'primary' | 'success';
}

export const ChatHeaderButton: React.FC<ChatHeaderButtonProps> = ({
  label,
  isVisible,
  onClick,
  variant
}) => (
  <Button
    variant={variant}
    size="md"
    onClick={onClick}
    className="w-17 p-1 items-center space-x-2 flex"
  >
    {isVisible ? <FaEyeSlash /> : <FaEye />}
    <span>{label}</span>
  </Button>
);