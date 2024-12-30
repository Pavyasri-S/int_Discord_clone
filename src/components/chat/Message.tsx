import React from 'react';
import { MessageContent } from './MessageContent';
import { MessageReactions } from './MessageReactions';
import { MessageActions } from './MessageActions';
import { MessageType } from '../../types/message';

interface MessageProps {
  message: MessageType;
  onReaction: (id: number, type: 'thumbsUp' | 'thumbsDown' | 'fire') => void;
  onMessageEdit: (id: number, text: string) => void;
  onDeleteMessage: (id: number) => void;
}

export const Message: React.FC<MessageProps> = ({
  message,
  onReaction,
  onMessageEdit,
  onDeleteMessage,
}) => (
  <div className="group relative flex items-center justify-between p-2 bg-gray-800 rounded-md hover:bg-gray-600">
    <MessageContent message={message} />
    <div>
      <MessageReactions message={message} onReaction={onReaction} />
      <MessageActions
        messageId={message.id}
        text={message.text}
        onEdit={onMessageEdit}
        onDelete={onDeleteMessage}
      />
    </div>
  </div>
);