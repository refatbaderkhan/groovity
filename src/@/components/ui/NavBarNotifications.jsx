import React from 'react'
import { IoNotifications } from "react-icons/io5";
import NavBarNotificationsMenu from './NavBarNotificationsMenu';


const NavBarNotifications = ( { notificationsToggle, setNotificationsToggle } ) => {

  return (
    <div className='justify-self-center self-center cursor-pointer'>
      <IoNotifications 
        size={28}
        color= {notificationsToggle ? '#FFDE5A' : '#BFBFBF'}
        onClick={() => setNotificationsToggle(!notificationsToggle)}
      />
      {notificationsToggle && (
        <NavBarNotificationsMenu />
      )}
    </div>
  )
}

export default NavBarNotifications