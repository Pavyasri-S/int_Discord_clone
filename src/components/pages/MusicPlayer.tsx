import React, { useState } from 'react';
import { Button } from '../ui/Button'; 
interface Song {
  url: string;
  title: string;
}

const MusicPlayer: React.FC = () => {
  const [songUrl, setSongUrl] = useState<string>('');
  const [queue, setQueue] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  const handleAddToQueue = () => {
    if (songUrl) {
      const title = `Song #${queue.length + 1}`;
      setQueue([...queue, { url: songUrl, title }]);
      setSongUrl('');
    }
  };

  const handlePlaySong = (song: Song) => {
    setCurrentSong(song);
  };

  const getSpotifyEmbedUrl = (url: string): string => {
    const match = url.match(/spotify\.com\/(track|album|playlist)\/(\w+)/);
    if (match) {
      const [, type, id] = match;
      return `https://open.spotify.com/embed/${type}/${id}`;
    }
    return '';
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 text-black">Music Player</h1>

      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          className="flex-1 p-2 border-2 border-gray-300 rounded-lg text-black"
          placeholder="Enter Spotify URL"
          value={songUrl}
          onChange={(e) => setSongUrl(e.target.value)}
        />
        <Button
          variant="primary"
          size="md"
          onClick={handleAddToQueue}
          className="w-28"
        >
          Add to Queue
        </Button>
      </div>


      <div className="mb-4">
        <h3 className="text-lg font-semibold text-black">Queue:</h3>
        {queue.length === 0 ? (
          <div className="text-center text-gray-500 text-bold">Looks like the queue is silent. Time to add some music!</div>
        ) : (
          <div>
            {queue.map((song, index) => (
              <div
                key={index}
                className="p-2 mb-2 bg-gray-100 rounded-lg cursor-pointer text-black"
                onClick={() => handlePlaySong(song)}
              >
                {song.title}
              </div>
            ))}
          </div>
        )}
      </div>

      {currentSong && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-black">Now Playing:</h3>
          <div className="text-xl mb-2 text-black">{currentSong.title}</div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={getSpotifyEmbedUrl(currentSong.url)}
              width="100%"
              height="380"
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
