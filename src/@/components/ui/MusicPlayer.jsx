import React from 'react'
import MusicPlayerNext from './MusicPlayerNext';
import MusicPlayerPlay from './MusicPlayerPlay';
import MusicPlayerPrevious from './MusicPlayerPrevious';
import MusicPlayerRepeat from './MusicPlayerRepeat';
import MusicPlayerShuffle from './MusicPlayerShuffle';
import { Progress } from "@/components/ui/progress" ;
import MusicPlayerLike from './MusicPlayerLike';
import MusicPlayerQueue from './MusicPlayerQueue';
import MusicPlayerVolume from './MusicPlayerVolume';

const MusicPlayer = () => {


  return (
    <div className=' flex flex-row justify-start justify-items-center h-8% w-screen border-t border-bordercolor text-[#BFBFBF] font-bold'>
      <div className='trackinfo flex flex-row w-1/6 ml-7'>
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
      <div className='playercontrol flex flex-row self-center items-center w-4/6'> 
        <MusicPlayerPrevious/>
        <MusicPlayerPlay/>
        <MusicPlayerNext/>
        <MusicPlayerShuffle/>
        <MusicPlayerRepeat/>
        <div className = 'h-fit w-1/2'>
          <Progress value={50} />
        </div>
        <MusicPlayerVolume/>
        <MusicPlayerLike/>
        <MusicPlayerQueue />
      </div>
      <div className='tracksocial'>
      </div>
    </div>
  )
}

export default MusicPlayer