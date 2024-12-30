import React from 'react';
import { MessageType } from '../../types/message';

interface MessageContentProps {
  message: MessageType;
}

export const MessageContent: React.FC<MessageContentProps> = ({ message }) => (
  <div>
    <p className="font-semibold text-white">{message.username}</p>
    <p>{message.text}</p>
    {message.selectedEmoji && <p className="text-xl">{message.selectedEmoji}</p>}
    <span className="text-gray-400 text-xs">{message.timestamp}</span>
  </div>
);