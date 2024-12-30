import { useState } from 'react';

export const useUserControls = () => {
  const [micOn, setMicOn] = useState(false);
  const [deafenOn, setDeafenOn] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const toggleMic = () => setMicOn(!micOn);
  const toggleDeafen = () => setDeafenOn(!deafenOn);
  const toggleSettings = () => setSettingsOpen(!settingsOpen);

  return {
    micOn,
    deafenOn,
    settingsOpen,
    toggleMic,
    toggleDeafen,
    toggleSettings,
  };
};