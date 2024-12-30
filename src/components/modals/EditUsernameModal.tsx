import React from 'react';

interface EditUsernameModalProps {
    username: string;
    onSubmit: (e: React.FormEvent) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCancel: () => void;
}

export const EditUsernameModal: React.FC<EditUsernameModalProps> = ({
    username,
    onSubmit,
    onChange,
    onCancel,
}) => (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-gray-800 p-6 rounded-lg text-white w-80">
        <h2 className="text-xl mb-4">Edit Username</h2>
        <form onSubmit={onSubmit}>
        <input
            type="text"
            value={username}
            onChange={onChange}
            className="w-full px-3 py-2 bg-gray-600 text-white rounded-md mb-4"
        />
        <div className="flex justify-between">
            <button
            type="button"
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-200"
            >
            Cancel
            </button>
            <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500"
            >
            Save
            </button>
        </div>
        </form>
    </div>
    </div>
);