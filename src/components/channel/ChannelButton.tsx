import React from 'react';

interface ChannelButtonProps {
  channel: string;
  isActive: boolean;
  onClick: (channel: string) => void; // Modified to pass the channel name
}

export const ChannelButton: React.FC<ChannelButtonProps> = ({ channel, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(channel)} // Pass the channel name to the onClick handler
      className={`w-full text-left p-2 rounded-lg ${isActive ? 'bg-gray-600' : 'bg-gray-700'}`}
    >
      {channel}
    </button>
  );
};
