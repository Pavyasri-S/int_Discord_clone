import React from 'react';
import { Message } from './Message';
import { MessageType } from '../../types/message';

interface MessageListProps {
  messages: MessageType[];
  currentChannel: string;
  onReaction: (channelName: string, id: number, type: 'thumbsUp' | 'thumbsDown' | 'fire') => void;
  onMessageEdit: (channelName: string, id: number, text: string) => void;
  onDeleteMessage: (channelName: string, id: number) => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  username: string;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  currentChannel,
  onReaction,
  onMessageEdit,
  onDeleteMessage,
  messagesEndRef,
}) => (
  <div className="flex-1 p-4 space-y-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
    <div className="space-y-3">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          onReaction={(id, type) => onReaction(currentChannel, id, type)}
          onMessageEdit={(id, text) => onMessageEdit(currentChannel, id, text)}
          onDeleteMessage={(id) => onDeleteMessage(currentChannel, id)}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  </div>
);