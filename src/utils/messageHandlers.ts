import { MessageType } from '../types/message';

export const handleReaction = (
    messages: MessageType[],
    id: number,
    type: 'thumbsUp' | 'thumbsDown' | 'fire'
) => {
    return messages.map((message) =>
        message.id === id
            ? {
                ...message,
                reactions: {
                ...message.reactions,
                [type]: (message.reactions?.[type] || 0) + 1,
                },
            }
            : message
        );
};

export const createNewMessage = (text: string, username: string): MessageType => {
    const currentUser = localStorage.getItem('currentUser') || username;
    return {
    id: Date.now(),
    text: text.trim(),
    timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    }),
    reactions: { thumbsUp: 0, thumbsDown: 0, fire: 0 },
    username: currentUser,
    };
};