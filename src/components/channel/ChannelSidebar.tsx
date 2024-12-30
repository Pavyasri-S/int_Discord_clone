import React, { useRef ,useState} from 'react';
import { ChannelList } from './ChannelList';
import { UserControls } from './UserControls';
import { useChannels } from '../../hooks/useChannels';
import { useNavigate } from 'react-router-dom';
import { useUserControls } from '../../hooks/useUserControls';
import { useUsername } from '../../hooks/useUsername';
import { EditUsernameModal } from '../modals/EditUsernameModal';
export const ChannelSidebar: React.FC = () => {
  const navigate = useNavigate();

  const { channels, currentChannel, setCurrentChannel, setChannels } = useChannels();
  const settingsRef = useRef<HTMLDivElement>(null);
  
  const handleCreateChannel = () => {
    const newChannelName = prompt('Enter the new channel name:');
    if (newChannelName && !channels.includes(`# ${newChannelName}`)) {
      setChannels([...channels, `# ${newChannelName}`]);
      setCurrentChannel(`# ${newChannelName}`);
    }
  };
  const {
    micOn,
    deafenOn,
    settingsOpen,
    toggleMic,
    toggleDeafen,
    toggleSettings,
  } = useUserControls();
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const { username,setUsername } = useUsername();
  const handleEditUsername = () => setIsEditingUsername(true);
  const handleCancelEditUsername = () => setIsEditingUsername(false);
  const handleSaveUsername = (e: React.FormEvent) => {
  e.preventDefault();
  localStorage.setItem('username', username);
    saveCurrentUser(username);
    setIsEditingUsername(false); 
};

const saveCurrentUser = (username: string) => {
  console.log(`Saving username: ${username}`);
};


  return (
    <div className="bg-gray-800 w-60 sm:flex flex-col hidden">
      <div className="px-3 h-16 flex items-center shadow-md font-title text-white">
        Start a conversation
      </div>

      <ChannelList
        channels={channels}
        currentChannel={currentChannel}
        onJoinChannel={setCurrentChannel}
        onCreateChannel={handleCreateChannel}
      />

      <UserControls
        username={username}
        micOn={micOn}
        deafenOn={deafenOn}
        settingsOpen={settingsOpen}
        onToggleMic={toggleMic}
        onToggleDeafen={toggleDeafen}
        onToggleSettings={toggleSettings}
        onEditUsername={handleEditUsername}
        onLogout={() => navigate('/')}
        settingsRef={settingsRef}
      />
      {isEditingUsername && (
        <EditUsernameModal
          username={username}
          onSubmit={handleSaveUsername}
          onChange={(e) => setUsername(e.target.value)}
          onCancel={handleCancelEditUsername}
        />
      )}
    </div>
  );
};