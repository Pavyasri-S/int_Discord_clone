import React from 'react';
import { MessageType, ReactionType } from '../../types/message';

interface MessageReactionsProps {
  message: MessageType;
  onReaction: (id: number, type: ReactionType) => void;
}

export const MessageReactions: React.FC<MessageReactionsProps> = ({ message, onReaction }) => (
  <div className="flex space-x-2 text-gray-400 relative">
    <span className="cursor-pointer" onClick={() => onReaction(message.id, 'thumbsUp')}>
      👍 {message.reactions?.thumbsUp || 0}
    </span>
    <span className="cursor-pointer" onClick={() => onReaction(message.id, 'thumbsDown')}>
      👎 {message.reactions?.thumbsDown || 0}
    </span>
    <span className="cursor-pointer" onClick={() => onReaction(message.id, 'fire')}>
      🔥 {message.reactions?.fire || 0}
    </span>
  </div>
);