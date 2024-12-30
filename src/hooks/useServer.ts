import { useState } from 'react';

export const useServer = () => {
  const [newServer, setNewServer] = useState<number[]>([]);

  const handleCreateServer = () => {
    const newId = newServer.length + 1;
    setNewServer(prev => [...prev, newId]);
    return newId;
  };

  return {
    newServer,
    handleCreateServer
  };
};