import { useState } from 'react';

export const useUIState = () => {
  const [showNotepad, setShowNotepad] = useState(false);
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const [showTasks, setShowTasks] = useState(true);

  const toggleNotepad = () => setShowNotepad(!showNotepad);
  const toggleMusicPlayer = () => setShowMusicPlayer(!showMusicPlayer);

  return {
    showNotepad,
    showMusicPlayer,
    showTasks,
    setShowTasks,
    toggleNotepad,
    toggleMusicPlayer,
  };
};