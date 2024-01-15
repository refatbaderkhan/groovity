import React from 'react'
import { PiShuffleBold } from "react-icons/pi";


const MusicPlayerShuffle = ({ shuffleToggle, setShuffleToggle }) => {
  
  return (
    <div className='cursor-pointer'>
      <PiShuffleBold
      size={24}
      color={shuffleToggle ? '#FFDE5A' : '#BFBFBF'}
      onClick={() => setShuffleToggle(!shuffleToggle)}
      />
    </div>
  )
}

export default MusicPlayerShuffle