import { useState, useEffect } from 'react';

export const useUsername = () => {
  const [username, setUsername] = useState<string>(() => {
    return localStorage.getItem('currentUser') || 'Discord';
  });
  const [editingUsername, setEditingUsername] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem('currentUser');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  useEffect(() => {
    if (username !== 'Discord') {
      localStorage.setItem('currentUser', username);
    }
  }, [username]);

  return {
    username,
    setUsername,
    editingUsername,
    setEditingUsername,
  };
};