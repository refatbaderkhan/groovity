import React, { useEffect, useState, useRef } from 'react';
import { getTextWidth } from '@/utilities';

const MusicWindowAlbumCard = ({ album }) => {

  const { name, artists, images } = album;
  const nameRef = useRef();
  const containerRef = useRef();
  const [longName, setLongName] = useState(false);
  const [marquee, setMarquee] = useState(false);
  const [truncate, setTruncate] = useState(false);


  useEffect(() => {
    checkLength();
    window.addEventListener('resize', checkLength);
    return () => {
      window.removeEventListener('resize', checkLength);
    };
  }, []);


  const checkLength = () => {
    const nameWidth = getTextWidth(name, 'bold 16px sans-serif');
    const containerWidth = containerRef.current.getBoundingClientRect().width;

    if (nameWidth > containerWidth) {
      setLongName(true);
    }
  }

  const handleMouseEnter = () => {
    if (longName) {
      setMarquee(true);
      setTruncate(false);
    }
  }

  const handleMouseLeave = () => {
    if (longName) {
      setMarquee(false);
      setTruncate(true);
    }
  }


  return (
    <div
      className="w-card h-card rounded bg-[#3b3b3b] flex flex-col justify-start hover:bg-[#515151] transition duration-300 ease-in-out cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-1.5 h-cardimage w-cardimage">
        <img
        src={images[1].url}
        alt={`${name} cover`}
        className="rounded w-full align-self-center"
        />
      </div>
      <div
        ref={containerRef}
        className={`album-name-container h-cardtitle pl-1.5 pr-1.5 pt-2 ${truncate ? 'truncate' : ''}`}
      >
        <span ref={nameRef} className={`album-name-text font-semibold text-[#BFBFBF] `}>
          {marquee ? (
            <marquee scrollamount="4">
              {name}
            </marquee>
          ) : (
            name
          )}
        </span>
      </div>
      <p className="text-[#BFBFBF] h-cardartist pl-1.5 pr-1.5 font-normal text-sm leading-tight	">
        {artists.map((artist) => artist.name).join(', ')}
      </p>
      <div className="p-1.5 pt-2 pr-2 h-cardtype">
        <p className="text-xs text-[#989898] text-right">{album.type}</p>
      </div>
    </div>
  );
};

export default MusicWindowAlbumCard;
