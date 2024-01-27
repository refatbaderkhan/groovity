import React, { useEffect, useState, useRef } from 'react';
import { getTextWidth } from '@/utilities';

const MusicWindowPlaylistCard = ({ playlist , singleDisplay }) => {
  const { name, images } = playlist;
  const nameRef = useRef();
  const containerRef = useRef();
  const [longName, setLongName] = useState(false);
  const [marquee, setMarquee] = useState(false);
  const [truncate, setTruncate] = useState(false);
  const [textDirection, setTextDirection] = useState('ltr');

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

  useEffect(() => {
    const isArabic = /[\u0600-\u06FF]/.test(name);
    setTextDirection(isArabic ? 'rtl' : 'ltr');
  }, [name]);

  return (
    <div
      className={`w-card h-playlistcard rounded bg-[#3b3b3b] flex flex-col justify-start hover:bg-[#515151] transition duration-300 ease-in-out cursor-pointer ${singleDisplay ? 'mr-2.5 ml-2.5 mb-5' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-1.5 h-cardimage w-cardimage">
        <img
          src={images[0].url}
          alt={`${name} cover`}
          className="rounded w-full align-self-center"
        />
      </div>
      <div
        ref={containerRef}
        className={`playlist-name-container h-cardtitle pl-1.5 pr-1.5 pt-2 ${truncate ? 'truncate' : ''}`}
        style={{ direction: textDirection }}
      >
        <span ref={nameRef} className={`playlist-name-text font-semibold text-[#BFBFBF] `}>
          {marquee ? (
            <marquee scrollamount="4">
              {name}
            </marquee>
          ) : (
            name
          )}
        </span>
      </div>
      <div className="p-1.5 pt-2 pr-2 h-cardtype">
      <p className="text-xs text-[#989898] text-right">
        Playlist
      </p>
      </div>
    </div>
  );
};

export default MusicWindowPlaylistCard;
