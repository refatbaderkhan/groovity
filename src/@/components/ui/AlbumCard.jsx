import React from 'react';

const MusicWindowAlbumCard = ({ album }) => {
  const { name, artists, release_date, images, external_urls } = album;

  return (
    <div className=" w-card h-card rounded  shadow-lg mr-4">
      <img
        src={images[1].url}
        alt={`${name} cover`}
        className="w-card h-auto"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Artist: {artists.map(artist => artist.name).join(', ')}
        </p>
        <p className="text-gray-700 text-base">
          Release Date: {release_date}
        </p>
      </div>
      <div className="px-6 py-4">
        <a
          href={external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2"
        >
          Open on Spotify
        </a>
      </div>
    </div>
  );
};

export default MusicWindowAlbumCard;
