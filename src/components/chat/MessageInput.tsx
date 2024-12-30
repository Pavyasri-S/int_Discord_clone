import React from 'react';
import { EmojiClickData } from 'emoji-picker-react';
import { EmojiPickerButton } from './EmojiPickerButton';

interface MessageInputProps {
  input: string;
  emojiPickerVisible: boolean;
  emojiPickerRef: React.RefObject<HTMLDivElement>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onToggleEmojiPicker: () => void;
  onEmojiClick: (emojiData: EmojiClickData) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  input,
  emojiPickerVisible,
  emojiPickerRef,
  onInputChange,
  onKeyDown,
  onToggleEmojiPicker,
  onEmojiClick,
}) => (
  <div className="bg-gray-800 h-20 flex items-center justify-between px-4 border-t border-gray-600 bg-fixed">
    <input
      type="text"
      placeholder="Type a message..."
      value={input}
      onChange={onInputChange}
      onKeyDown={onKeyDown}
      className="flex-1 bg-gray-700 text-gray-200 px-4 py-2 rounded-lg outline-none placeholder-gray-400"
    />
    <EmojiPickerButton
      isVisible={emojiPickerVisible}
      pickerRef={emojiPickerRef}
      onToggle={onToggleEmojiPicker}
      onEmojiClick={onEmojiClick}
    />
  </div>
);