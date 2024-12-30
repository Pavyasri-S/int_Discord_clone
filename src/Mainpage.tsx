import React, { useState } from 'react';
import { ChannelSidebar } from './components/channel/ChannelSidebar';
import ChatSection from './components/chat/ChatSection';
import ServerList from './components/server/ServerList';

const Mainpage: React.FC = () => {
  
  const [selectedChannel, ] = useState<string>('# general'); 

  return (
    <div className="flex text-gray-100 h-screen">
      <ServerList />
      <ChannelSidebar
      />
      <ChatSection currentChannel={selectedChannel} /> 
    </div>
  );
};

export default Mainpage;
