import React, { useState } from 'react'
import logo from '../../../assets/logo.svg'
import SideMenuEntry from './SideMenuEntry'

const SideMenu = () => {
  const [menuToggle, setMenuToggle] = useState('Home')

  return (
    <div className='flex flex-col justify-start justify-items-center h-92% w-1/6 border-r border-bordercolor text-[#BFBFBF] font-bold'>
      <div className='logoarea pt-4'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='menuarea flex flex-col justify-start h-92%'>
      <div className='homearea pt-14'>
        <SideMenuEntry text='Home' menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
        <SideMenuEntry text='Feed' menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
      </div>
      <div className='libraryarea pt-20'>
        <div className='pb-2 indent-7 font-semibold text-[#666666] cursor-default'>
          your library
        </div>
        <SideMenuEntry text='Likes' menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
        <SideMenuEntry text='Playlists' menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
        <SideMenuEntry text='Artists' menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
        <SideMenuEntry text='Albums' menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
        <SideMenuEntry text='Listening History' menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
        <SideMenuEntry text='Listen Later' menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
      </div>
      </div>
    </div>
  )
}

export default SideMenu