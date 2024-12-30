import React from 'react';
import { FaDiscord, FaCompass, FaPlus, FaDownload } from 'react-icons/fa';
import { ServerButton } from './ServerButton';
import { useServer } from '../../hooks/useServer';



const ServerList: React.FC = () => {
   const { newServer, handleCreateServer } = useServer();
  return (
    <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
      <ServerButton>
        <FaDiscord className="text-2xl" />
      </ServerButton>

      <hr className="border-t-white/[.06] border-t-2 rounded mx-2" />

      {newServer.map((i) => (
        <ServerButton key={i}>
          S{i}
        </ServerButton>
      ))}

      <ServerButton 
        onClick={handleCreateServer} 
        showHoverEffect={false}
        hoverColor="hover:bg-green-700"
      >
        <FaPlus className="text-2xl text-green-500 hover:text-white" />
      </ServerButton>

      <ServerButton hoverColor="hover:bg-green-700">
        <FaDownload className="text-2xl text-green-500 hover:text-white" />
      </ServerButton>

      <ServerButton>
        <FaCompass className="text-2xl" />
      </ServerButton>
    </div>
  );
};

export default ServerList;