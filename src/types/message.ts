export interface MessageReactions {
  thumbsUp: number;
  thumbsDown: number;
  fire: number;
}

export type ReactionType = keyof MessageReactions;

export interface MessageType {
  id: number;
  text: string;
  timestamp: string;
  reactions: MessageReactions;
  username: string;
  selectedEmoji?: string;
}