import React from 'react';

const MusicWindowAlbumCard = ({ album }) => {
  const { name, artists, images } = album;

  return (
    <div
    className="w-card h-card rounded mr-4 bg-[#3b3b3b] flex flex-col justify-start hover:bg-[#515151] transition duration-300 ease-in-out cursor-pointer"
    onClick = {()=>console.log(album.id)}
    >
      <div className='p-1.5 bg-white h-cardimage w-cardimage'>
      <img
        src={images[1].url}
        alt={`${name} cover`}
        className=" rounded w-full align-self-center"
      />
      </div>
      <div className=" pr-2 pl-2">
        <div
        className="font-semibold text-lg text-[#BFBFBF] bg-red-500 h-cardtitle break-words"
        >
          {name}
        </div>
        <p className=" text-[#BFBFBF] bg-green-500">
          {artists.map(artist => artist.name).join(', ')}
        </p>
      </div>
      <div className="p-1.5 pr-2 bg-blue-500">
        <p className=" text-xs text-[#989898] selfjustify--end text-right">
          {album.type}
        </p>
      </div>
    </div>
  );
};

export default MusicWindowAlbumCard;
