import { MessageType } from '../types/message';

export const updateMessageInChannel = (
  messages: Record<string, MessageType[]>,
  channelId: string,
  messageId: number,
  newText: string
): Record<string, MessageType[]> => ({
  ...messages,
  [channelId]: messages[channelId]?.map(msg =>
    msg.id === messageId ? { ...msg, text: newText.trim() } : msg
  ) || []
});

export const addMessageToChannel = (
  messages: Record<string, MessageType[]>,
  channelId: string,
  message: MessageType
): Record<string, MessageType[]> => ({
  ...messages,
  [channelId]: [...(messages[channelId] || []), message]
});

export const deleteMessageFromChannel = (
  messages: Record<string, MessageType[]>,
  channelId: string,
  messageId: number
): Record<string, MessageType[]> => ({
  ...messages,
  [channelId]: messages[channelId]?.filter(msg => msg.id !== messageId) || []
});