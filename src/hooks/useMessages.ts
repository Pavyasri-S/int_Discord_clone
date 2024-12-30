import { useState, useEffect } from 'react';
import { MessageType } from '../types/message';

export const useMessages = () => {
  const [channelMessages, setChannelMessages] = useState<Record<string, MessageType[]>>({
    '# general': [],
  });

  const handleReaction = (channelName: string, id: number, type: 'thumbsUp' | 'thumbsDown' | 'fire') => {
    setChannelMessages(prev => ({
      ...prev,
      [channelName]: prev[channelName].map(msg =>
        msg.id === id
          ? {
              ...msg,
              reactions: {
                ...msg.reactions,
                [type]: (msg.reactions?.[type] || 0) + 1
              }
            }
          : msg
      )
    }));
  };

  const handleMessageEdit = (channelName: string, id: number, text: string) => {
    setChannelMessages(prev => ({
      ...prev,
      [channelName]: prev[channelName].map(msg =>
        msg.id === id ? { ...msg, text } : msg
      )
    }));
  };

  const handleDeleteMessage = (channelName: string, id: number) => {
    setChannelMessages(prev => ({
      ...prev,
      [channelName]: prev[channelName].filter(msg => msg.id !== id)
    }));
  };

  useEffect(() => {
    const savedChannelMessages = localStorage.getItem('channelMessages');
    if (savedChannelMessages) {
      setChannelMessages(JSON.parse(savedChannelMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('channelMessages', JSON.stringify(channelMessages));
  }, [channelMessages]);

  return {
    channelMessages,
    setChannelMessages,
    handleReaction,
    handleMessageEdit,
    handleDeleteMessage
  };
};