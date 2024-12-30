import React from 'react';

interface UserSettingsProps {
  settingsRef: React.RefObject<HTMLDivElement>;
  onEditUsername: () => void;
  onLogout: () => void;
}

export const UserSettings: React.FC<UserSettingsProps> = ({
  settingsRef,
  onEditUsername,
  onLogout
}) => (
  <div ref={settingsRef} className="absolute bottom-16 right-0 bg-gray-700 p-3 rounded-md shadow-lg text-white">
    <div className="flex flex-col space-y-2">
      <button onClick={onEditUsername} className="text-sm hover:text-sky-400">
        Edit
      </button>
      <button onClick={onLogout} className="text-sm hover:text-red-500">
        Logout
      </button>
    </div>
  </div>
);
