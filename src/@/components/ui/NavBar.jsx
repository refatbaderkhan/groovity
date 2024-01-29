import React, { useState } from 'react'
import NavBarProfilePicture from './NavBarProfilePicture';
import NavBarNotifications from './NavBarNotifications';
import NavBarSearch from './NavBarSearch';



const NavBar = ({setSearch}) => {

  const [notificationsToggle, setNotificationsToggle] = useState(false);

  return (
    <div className='flex flex-row justify-between w-full h-10% '>
      <div className='w-2/6 mt-7 ' >
      <NavBarSearch setSearch={setSearch}/>
      </div>
      <div className='profilesection flex flex-row justify-between content-center w-1/12 mr-10 mt-7 h-10'>
        <NavBarNotifications notificationsToggle={notificationsToggle} setNotificationsToggle={setNotificationsToggle}/>
        <NavBarProfilePicture />
      </div>
    </div>
  )
}

export default NavBar