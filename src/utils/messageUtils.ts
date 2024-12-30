import { MessageType } from '../types/message';

export const createNewMessage = (text: string, username: string): MessageType => ({
  id: Date.now(),
  text: text.trim(),
  timestamp: new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  }),
  reactions: { thumbsUp: 0, thumbsDown: 0, fire: 0 },
  username,
});

export const updateChannelMessages = (
  prev: Record<string, MessageType[]>,
  channelName: string,
  updater: (messages: MessageType[]) => MessageType[]
): Record<string, MessageType[]> => ({
  ...prev,
  [channelName]: updater(prev[channelName] || [])
});