import React from 'react';
import profilepicture from '../../../assets/profilepicture.png'

const MusicWindowArtistCard = ({ artist }) => {
  const { name, images, type } = artist;
  
  console.log(name, images)
  return (
    <div className="w-card h-artistcard rounded bg-[#3b3b3b] flex flex-col justify-start hover:bg-[#515151] transition duration-300 ease-in-out cursor-pointer">
      <div className="p-1.5 h-cardimage w-artistimage rounded-full">
        <img
          src={images.length > 0 ? images[0].url : profilepicture}
          alt={`${name} avatar`}
          className="object-cover overflow-hidden rounded-full aspect-square align-self-center"
        />
      </div>
      <div className="album-name-container h-cardartist pl-1.5 pr-1.5 pt-2 truncate">
        <span className="album-name-text font-semibold text-[#BFBFBF]">{name}</span>
      </div>
      <div className="p-1.5 pt-2 pr-2 h-cardtype">
        <p className="text-xs text-[#989898] text-right">{type}</p>
      </div>
    </div>
  );
};

export default MusicWindowArtistCard;
