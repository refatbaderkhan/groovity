import React from 'react'
import { PiRepeatBold  } from "react-icons/pi";
import { PiRepeatOnceBold } from "react-icons/pi";


const MusicPlayerRepeat = ({ repeatToggle, setRepeatToggle }) => {

  return (
    <div className='cursor-pointer'>
      {repeatToggle ? (
        <PiRepeatOnceBold
          size={24}
          color='#FFDE5A'
          onClick={() => setRepeatToggle(!repeatToggle)}
        />
      ) : (
        <PiRepeatBold
          size={24}
          color='#FFDE5A'
          onClick={() => setRepeatToggle(!repeatToggle)}
        />
      )}
    </div>
  )
}

export default MusicPlayerRepeat