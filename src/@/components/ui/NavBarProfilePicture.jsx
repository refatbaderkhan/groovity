import React from 'react'
import profilepicture from '../../../assets/profilepicture.png'


const NavBarProfilePicture = () => {

  return (
    <img
      src={profilepicture}
      alt='profilepicture'
      className='justify-self-center self-center h-10 w-10 rounded-full cursor-pointer'
    /> 
  )
}

export default NavBarProfilePicture