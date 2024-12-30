import React from 'react';

interface WelcomeScreenProps {
  username: string;
  showTasks: boolean;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ username, showTasks }) => (
  <div className="flex-1 p-4 space-y-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4 max-w-xs break-words">
        Welcome to <br />
        {username}'s server
      </h1>
      <p className="text-gray-300 mb-8 max-w-lg break-words">
        This is your brand-new, shiny server. Here are some steps to help you get started. For more, check out our{' '}
        <a href="#guide" className="text-lg hover:underline text-sky-600">
          Getting Started Guide
        </a>
      </p>
    </div>

    {showTasks && (
      <div className="flex justify-center items-center w-full">
        <div className="space-y-3 w-full max-w-md text-center">
          {[
            'Invite your friends',
            'Personalize your server with an icon',
            'Send your first message',
            'Download the discord app',
            'Add your first app',
          ].map((step, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 h-20 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-600"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={`/icon-${index + 1}.png`}
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src = '/fallback-icon.png')
                  }
                  alt="Icon"
                  className="w-8 h-8 rounded-full"
                />
                <button className="text-left text-white">{step}</button>
              </div>
              <span>→</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);
