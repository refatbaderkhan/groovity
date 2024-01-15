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
import MusicPlayerTrack from './MusicPlayerTrack';

const MusicPlayer = () => {

  const [playToggle, setPlayToggle] = useState(false)
  const [shuffleToggle, setShuffleToggle] = useState(false)
  const [repeatToggle, setRepeatToggle] = useState(false)
  const [likeToggle, setLikeToggle] = useState(false)
  const [volumeToggle, setVolumeToggle] = useState(false)
  const [volume, setVolume] = useState(50)
  const [queueToggle, setQueueToggle] = useState(false)

  return (
    <div className=' flex flex-row justify-start justify-items-center h-8% w-screen border-t border-bordercolor text-[#BFBFBF] font-bold left-0 bottom-0 fixed z-20'>
        <MusicPlayerTrack/>
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