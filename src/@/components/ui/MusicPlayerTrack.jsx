import React from 'react'

const MusicPlayerTrack = () => {

  return (
    <div className='trackinfo flex flex-row w-1/6 pl-7'>
      <div className='trackimage bg-white mt-2 mb-2 rounded aspect-square cursor-pointer'>
        &nbsp; 
      </div>
      <div className='tracktypography flex flex-col justify-between mt-2 mb-2 ml-4 leading-tight	'>
        <div 
        className='trackname cursor-pointer'
        >
          Track
        </div>
        <div
        className='artistname text-[#666666] font-semibold cursor-pointer'
        >
          Artist
        </div>
      </div>
    </div>
  )
}

export default MusicPlayerTrack