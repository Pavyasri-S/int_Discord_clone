import React from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaVolumeMute, FaVolumeUp, FaCog } from 'react-icons/fa';
import { UserSettings } from './UserSettings';

interface UserControlsProps {
  username: string;
  micOn: boolean;
  deafenOn: boolean;
  settingsOpen: boolean;
  settingsRef: React.RefObject<HTMLDivElement>;
  onToggleMic: () => void;
  onToggleDeafen: () => void;
  onToggleSettings: () => void;
  onEditUsername: () => void;
  onLogout: () => void;
}

export const UserControls: React.FC<UserControlsProps> = ({
  username,
  micOn,
  deafenOn,
  settingsOpen,
  settingsRef,
  onToggleMic,
  onToggleDeafen,
  onToggleSettings,
  onEditUsername,
  onLogout,
}) => (
  <div className="bg-gray-900 h-20 flex items-center justify-between px-4 border-t border-gray-600 relative">
    <div className="flex items-center space-x-4 w-full justify-between">
      <img src="discord_logo.png" alt="Discord Logo" className="h-10 w-10 rounded-full" />
      <p className="text-white mr-4">{username}</p>
      <div onClick={onToggleMic} className="cursor-pointer">
        {micOn ? <FaMicrophone className="text-white text-xl" /> : <FaMicrophoneSlash className="text-red-700 text-xl" />}
      </div>
      <div onClick={onToggleDeafen} className="cursor-pointer">
        {deafenOn ? <FaVolumeMute className="text-red-700 text-xl" /> : <FaVolumeUp className="text-white text-xl" />}
      </div>
      <div onClick={onToggleSettings} className="cursor-pointer">
        <FaCog className="text-white text-xl" />
      </div>
    </div>
    {settingsOpen && (
      <UserSettings
        settingsRef={settingsRef}
        onEditUsername={onEditUsername}
        onLogout={onLogout}
      />
    )}
  </div>
);