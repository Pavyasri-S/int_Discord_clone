import { useState } from 'react';
import { MessageType } from '../types/message';

export const useChannels = () => {
  const [channels, setChannels] = useState<string[]>(['# general']);
  const [currentChannel, setCurrentChannel] = useState<string>('# general');
  const [channelMessages, setChannelMessages] = useState<Record<string, MessageType[]>>({
    '# general': [],
  });

  const createChannel = (newChannelName: string) => {
  console.log('Before channel creation:', channels);
  
  if (!channels.includes(newChannelName)) {
    setChannels((prev) => {
      console.log('Adding new channel:', newChannelName); 
      return [...prev, newChannelName];
    });
    setCurrentChannel(`# ${newChannelName}`);
    setChannelMessages((prev) => ({
      ...prev,
      [newChannelName]: [],
    }));

    console.log('Current channel updated to:', newChannelName);
    return true;
  }

  console.log('Channel already exists:', newChannelName);
  return false;
};

return {
    channels,
    setChannels,
    currentChannel,
    setCurrentChannel,
    createChannel,
    channelMessages,
    setChannelMessages, 
  };
};
