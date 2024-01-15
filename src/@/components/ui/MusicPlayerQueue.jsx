import React from 'react'
import { PiQueueBold } from "react-icons/pi";
import MusicPlayerQueueMenu from './MusicPlayerQueueMenu';


const MusicPlayerQueue = ( { queueToggle, setQueueToggle } ) => {

  return (
    <div className='cursor-pointer relative'>
      {queueToggle && (
        <MusicPlayerQueueMenu />
      )}
      <PiQueueBold
        size={24}
        color='#FFDE5A'
        onClick={() => setQueueToggle(!queueToggle)}
        />
    </div>
  )
}

export default MusicPlayerQueue