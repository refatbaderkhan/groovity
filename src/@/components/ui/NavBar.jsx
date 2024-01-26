import React, { useState } from 'react'
import { Input } from './input'
import NavBarProfilePicture from './NavBarProfilePicture';
import NavBarNotifications from './NavBarNotifications';


const NavBar = () => {

  const [notificationsToggle, setNotificationsToggle] = useState(false);

  return (
    <div className='flex flex-row justify-between w-full h-10% '>
      <Input type='text' placeholder='Search' className='w-2/6 ml-20 mt-7 text-[#BFBFBF]'/>
      <div className='profilesection flex flex-row justify-between content-center w-1/12 mr-10 mt-7 h-10 '>
        <NavBarNotifications notificationsToggle={notificationsToggle} setNotificationsToggle={setNotificationsToggle}/>
        <NavBarProfilePicture />
      </div>
    </div>
  )
}

export default NavBar