import { useState } from 'react';
import { EmojiClickData } from 'emoji-picker-react';
import { MessageType } from '../types/message';
import { useChannels } from './useChannels';

export const useChatInput = (username: string) => {
  const [input, setInput] = useState('');
  const { currentChannel, setChannelMessages } = useChannels();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const createNewMessage = (text: string): MessageType => ({
    id: Date.now(),
    text: text.trim(),
    timestamp: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
    reactions: { thumbsUp: 0, thumbsDown: 0, fire: 0 },
    username,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter' && input.trim() !== '') {
    const newMessage = createNewMessage(input);

    setChannelMessages((prevMessages) => {

      const updatedMessages = { ...prevMessages };


      if (updatedMessages[currentChannel]) {
        updatedMessages[currentChannel] = [
          ...updatedMessages[currentChannel],
          newMessage,
        ];
      } else {

        updatedMessages[currentChannel] = [newMessage];
      }

      return updatedMessages;
    });

    setInput('');
  }
};


  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setInput(prev => prev + emojiData.emoji);
  };

  return {
    input,
    handleInputChange,
    handleKeyDown,
    handleEmojiClick,
  };
};
