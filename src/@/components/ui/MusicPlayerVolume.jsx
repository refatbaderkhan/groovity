import React from 'react';
import { IoVolumeHighSharp } from "react-icons/io5";
import MusicPlayerVolumeSlider from './MusicPlayerVolumeSlider';

const MusicPlayerVolume = ({ volumeToggle, setVolumeToggle, volume, setVolume }) => {
  return (
    <div className='cursor-pointer relative'>
      {volumeToggle && (
        <MusicPlayerVolumeSlider value={volume} onChange={setVolume} />
      )}
      <IoVolumeHighSharp
        size={24}
        color='#FFDE5A'
        onClick={() => setVolumeToggle(!volumeToggle)}
      />
    </div>
  );
};

export default MusicPlayerVolume;
