import React from 'react';
import { FaPlus } from 'react-icons/fa';

interface ChannelListProps {
  channels: string[];
  currentChannel: string;
  onJoinChannel: (channelName: string) => void;
  onCreateChannel: () => void;
}

export const ChannelList: React.FC<ChannelListProps> = ({
    channels,
    currentChannel,
    onJoinChannel,
    onCreateChannel,
}) => (
    <div className="flex-1 p-3 overflow-y-scroll space-y-2 text-gray-300">
    <p className="text-white">Channels</p>
    <div className="space-y-2 mt-2">
        {channels.map((channel, i) => (
        <button
            key={i}
            className={`${currentChannel === channel ? 'bg-gray-600' : 'bg-gray-700'} w-full text-left p-2 rounded-md hover:bg-gray-600`}
            onClick={() => onJoinChannel(channel)}
        >
            {channel}
        </button>
        ))}
    </div>
    <button
        onClick={onCreateChannel}
        className="bg-indigo-500 p-2 rounded-lg w-full mt-4 flex justify-center items-center hover:bg-indigo-600"
    >
        <FaPlus className="text-2xl text-white" />
        <span className="ml-2 text-white">Create Channel</span>
    </button>
    </div>
);