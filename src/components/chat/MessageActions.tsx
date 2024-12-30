import React from 'react';

interface MessageActionsProps {
  messageId: number;
  text: string;
  onEdit: (id: number, text: string) => void;
  onDelete: (id: number) => void;
}

export const MessageActions: React.FC<MessageActionsProps> = ({
  messageId,
  text,
  onEdit,
  onDelete,
}) => (
  <div className="absolute top-1 right-2 flex space-x-2 text-gray-500">
    <button
      onClick={() => onEdit(messageId, text)}
      className="text-sm hover:text-gray-50"
    >
      Edit
    </button>
    <button
      onClick={() => onDelete(messageId)}
      className="text-sm hover:text-red-500"
    >
      Delete
    </button>
  </div>
);