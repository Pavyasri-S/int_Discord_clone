import React from 'react';
import { ChatHeaderButton } from './ChatHeaderButton';


interface ChatHeaderProps {
  currentChannel: string;
  showNotepad: boolean;
  showMusicPlayer: boolean;
  onToggleNotepad: () => void;
  onToggleMusicPlayer: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  currentChannel,
  showNotepad,
  showMusicPlayer,
  onToggleNotepad,
  onToggleMusicPlayer,
}) => {
  
  console.log('Rendering ChatHeader with currentChannel:', currentChannel);
  return (
    
    <div className="px-6 h-16 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-2">
        <div className="text-white font-semibold">{currentChannel}</div>
      </div>

      <div className="flex space-x-3">
        <ChatHeaderButton
          label="Notepad"
          isVisible={showNotepad}
          onClick={onToggleNotepad}
          variant="primary"
        />
        <ChatHeaderButton
          label="MusicPlayer"
          isVisible={showMusicPlayer}
          onClick={onToggleMusicPlayer}
          variant="success"
        />
      </div>
    </div>
    
  );
};