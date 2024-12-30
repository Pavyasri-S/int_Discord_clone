import React from 'react';
import { FaRegSmile } from 'react-icons/fa';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

interface EmojiPickerButtonProps {
  isVisible: boolean;
  pickerRef: React.RefObject<HTMLDivElement>;
  onToggle: () => void;
  onEmojiClick: (emojiData: EmojiClickData) => void;
}

export const EmojiPickerButton: React.FC<EmojiPickerButtonProps> = ({
  isVisible,
  pickerRef,
  onToggle,
  onEmojiClick,
}) => (
  <div ref={pickerRef}>
    <FaRegSmile
      onClick={onToggle}
      className="w-10 h-7 hover:text-gray-300 cursor-pointer"
      aria-label="Toggle Emoji Picker"
    />
    {isVisible && (
      <div className="absolute bottom-16 right-2 z-50">
        <EmojiPicker onEmojiClick={onEmojiClick} />
      </div>
    )}
  </div>
);
