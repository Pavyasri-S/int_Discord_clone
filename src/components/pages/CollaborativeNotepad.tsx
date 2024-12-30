import React, { useState } from 'react';
import { Button } from '../ui/Button'; // Assuming Button component is available
import {  FaEdit } from 'react-icons/fa';

interface Notepad {
  id: number;
  title: string;
  content: string;
}

const CollaborativeNotepad: React.FC = () => {
  const [notepads, setNotepads] = useState<Notepad[]>([]);
  const [currentNotepad, setCurrentNotepad] = useState<Notepad | null>(null);
  const [newNotepadTitle, setNewNotepadTitle] = useState<string>(''); // State to store the title input

  // Handle content updates for the current notepad
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (currentNotepad) {
      const updatedNotepad = { ...currentNotepad, content: event.target.value };
      setCurrentNotepad(updatedNotepad);
      setNotepads((prevNotepads) =>
        prevNotepads.map((notepad) =>
          notepad.id === currentNotepad.id ? updatedNotepad : notepad
        )
      );
    }
  };

  // Add a new notepad with the title entered by the user
  const handleAddNotepad = () => {
    if (newNotepadTitle.trim()) {
      const newNotepad = {
        id: Date.now(),
        title: newNotepadTitle.trim(),
        content: '',
      };
      setNotepads([...notepads, newNotepad]);
      setCurrentNotepad(newNotepad);
      setNewNotepadTitle(''); // Clear the title input after adding
    } else {
      alert('Please enter a title for the notepad.');
    }
  };

  // Switch to an existing notepad
  const handleSelectNotepad = (notepad: Notepad) => {
    setCurrentNotepad(notepad);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-black mb-4">Collaborative Notepad</h1>

      {/* Title input and Add button side by side */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          className="flex-1 p-2 border-2 border-gray-300 rounded-lg text-black"
          placeholder="Enter notepad title"
          value={newNotepadTitle}
          onChange={(e) => setNewNotepadTitle(e.target.value)}
        />
        <Button
          variant="primary"
          size="md"
          onClick={handleAddNotepad}
          className="w-28"
        >
        + Add
        </Button>
      </div>

      {/* List of notepads */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-black">Notepads:</h3>
        <ul>
          {notepads.map((notepad) => (
            <li
              key={notepad.id}
              className={`p-2 mb-2 text-black bg-gray-100 rounded-lg cursor-pointer ${
                currentNotepad?.id === notepad.id ? 'bg-blue-100' : ''
              }`}
              onClick={() => handleSelectNotepad(notepad)}
            >
              <div className="flex justify-between items-center">
                <span>{notepad.title}</span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering notepad selection
                    handleSelectNotepad(notepad);
                  }}
                >
                  <FaEdit />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Editor for the current notepad */}
      {currentNotepad && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-black">
            Editing: {currentNotepad.title}
          </h3>
          <textarea
            className="w-full h-96 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
            placeholder="Start typing here..."
            value={currentNotepad.content}
            onChange={handleContentChange}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default CollaborativeNotepad;
