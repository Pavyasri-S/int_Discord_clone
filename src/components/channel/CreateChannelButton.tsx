import React from 'react';
import { FaPlus } from 'react-icons/fa';

interface CreateChannelButtonProps {
  onClick: () => void;
}

export const CreateChannelButton: React.FC<CreateChannelButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-indigo-500 p-2 rounded-lg w-full mt-4 flex justify-center items-center hover:bg-indigo-600"
  >
    <FaPlus className="text-2xl text-white" />
    <span className="ml-2 text-white">Create Channel</span>
  </button>
);