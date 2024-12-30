import React, { useRef, useState } from 'react';
import { useUsername } from '../../hooks/useUsername';
import { ChatHeader } from './ChatHeader';
import { useMessages } from '../../hooks/useMessages';
import { useChatInput } from '../../hooks/useChatInput';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { WelcomeScreen } from './WelcomePage';
import { useUIState } from '../../hooks/useUIState';
import CollaborativeNotepad from '../pages/CollaborativeNotepad';
import MusicPlayer from '../pages/MusicPlayer';

interface ChatSectionProps {
  currentChannel: string;
}

const ChatSection: React.FC<ChatSectionProps> = ({ currentChannel }) => {
  const { channelMessages, handleReaction, handleMessageEdit, handleDeleteMessage } = useMessages();
  const { username } = useUsername();
  const { input, handleInputChange, handleKeyDown, handleEmojiClick } = useChatInput(username);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { showMusicPlayer, showNotepad, toggleMusicPlayer, toggleNotepad, showTasks } = useUIState();

  return (
    <div className="bg-gray-700 flex-1 flex flex-col">
      <ChatHeader
        key={currentChannel} 
        currentChannel={currentChannel}
        showNotepad={showNotepad}
        showMusicPlayer={showMusicPlayer}
        onToggleNotepad={toggleNotepad}
        onToggleMusicPlayer={toggleMusicPlayer}
      />

      <div className="mt-4 space-y-4">
        {showNotepad && <CollaborativeNotepad />}
        {showMusicPlayer && <MusicPlayer />}
      </div>

      {!channelMessages[currentChannel]?.length && showTasks && (
        <WelcomeScreen username={username} showTasks={showTasks} />
      )}

      {channelMessages[currentChannel]?.length > 0 && (
        <MessageList
          messages={channelMessages[currentChannel]}
          currentChannel={currentChannel}
          onReaction={handleReaction}
          onMessageEdit={handleMessageEdit}
          onDeleteMessage={handleDeleteMessage}
          messagesEndRef={messagesEndRef}
          username={username}
        />
      )}

      <MessageInput
        input={input}
        emojiPickerVisible={emojiPickerVisible}
        emojiPickerRef={emojiPickerRef}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onEmojiClick={handleEmojiClick}
        onToggleEmojiPicker={() => setEmojiPickerVisible(!emojiPickerVisible)}
      />
    </div>
  );
};

export default ChatSection;
