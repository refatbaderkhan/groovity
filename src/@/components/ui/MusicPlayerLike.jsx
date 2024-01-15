import React from 'react'
import { IoMdHeart } from "react-icons/io";


const MusicPlayerLike = ({ likeToggle, setLikeToggle }) => {

  return (
    <div className='cursor-pointer'>
      <IoMdHeart
      size={24}
      color={likeToggle ? '#FFDE5A' : '#BFBFBF'}
      onClick={() => setLikeToggle(!likeToggle)}
      />
    </div>
  )
}

export default MusicPlayerLike