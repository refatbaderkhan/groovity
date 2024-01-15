import React, { useState } from 'react'
import MusicPlayerNext from './MusicPlayerNext';
import MusicPlayerPlay from './MusicPlayerPlay';
import MusicPlayerPrevious from './MusicPlayerPrevious';
import MusicPlayerRepeat from './MusicPlayerRepeat';
import MusicPlayerShuffle from './MusicPlayerShuffle';
import MusicPlayerLike from './MusicPlayerLike';
import MusicPlayerQueue from './MusicPlayerQueue';
import MusicPlayerVolume from './MusicPlayerVolume';
import MusicPlayerSeek from './MusicPlayerSeek';

const MusicPlayer = () => {

  const [playToggle, setPlayToggle] = useState(false)
  const [shuffleToggle, setShuffleToggle] = useState(false)
  const [repeatToggle, setRepeatToggle] = useState(false)
  const [likeToggle, setLikeToggle] = useState(false)
  const [volumeToggle, setVolumeToggle] = useState(false)
  const [volume, setVolume] = useState(50)
  const [queueToggle, setQueueToggle] = useState(false)

  return (
    <div className=' flex flex-row justify-start justify-items-center h-8% w-screen border-t border-bordercolor text-[#BFBFBF] font-bold'>
      <div className='trackinfo flex flex-row w-1/6 pl-7'>
        <div className='trackimage bg-white mt-2 mb-2 rounded aspect-square'>
          &nbsp; 
        </div>
        <div className='tracktypography flex flex-col justify-between mt-2 mb-2 ml-4 leading-tight	'>
          <div className='trackname'>
            Track
          </div>
          <div className='artistname text-[#666666] font-semibold'>
            Artist
          </div>
        </div>
      </div>
      <div className='playercontrol flex flex-row self-center items-center w-5/6 justify-around pl-4 pr-16'>
        <MusicPlayerPrevious/>
        <MusicPlayerPlay playToggle={playToggle} setPlayToggle={setPlayToggle}/>
        <MusicPlayerNext/>
        <MusicPlayerShuffle shuffleToggle={shuffleToggle} setShuffleToggle={setShuffleToggle}/>
        <MusicPlayerRepeat repeatToggle={repeatToggle} setRepeatToggle={setRepeatToggle}/>
        <MusicPlayerSeek/>
        <MusicPlayerVolume volumeToggle={volumeToggle} setVolumeToggle={setVolumeToggle} volume={volume} setVolume={setVolume}/>
        <MusicPlayerLike likeToggle={likeToggle} setLikeToggle={setLikeToggle}/>
        <MusicPlayerQueue queueToggle={queueToggle} setQueueToggle={setQueueToggle}/>
      </div>
      <div className='tracksocial'>
      </div>
    </div>
  )
}

export default MusicPlayer