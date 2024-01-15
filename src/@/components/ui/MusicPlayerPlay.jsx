import React from 'react'
import { MdPlayArrow } from "react-icons/md";
import { MdPause } from "react-icons/md";



const MusicPlayerPlay = ({ playToggle, setPlayToggle }) => {

  return (
    <div className='flex flex-row justify-start justify-items-center'>
      {playToggle ? (
        <MdPause
          className='w-8 h-8 cursor-pointer'
          color='#FFDE5A'
          onClick={() => setPlayToggle(!playToggle)}
        />
      ) : (
        <MdPlayArrow
          className='w-8 h-8 cursor-pointer'
          onClick={() => setPlayToggle(!playToggle)}
          color='#FFDE5A'
        />
      )}
    </div>
  )
}

export default MusicPlayerPlay