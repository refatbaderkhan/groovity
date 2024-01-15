import React from 'react'
import MusicPlayer from "../components/ui/MusicPlayer";
import SideMenu from "../components/ui/SideMenu";
import NavBar from '@/components/ui/NavBar';

const Main = () => {
  return (
    <div className='flex flex-row justify-start h-screen w-screen'>
      <SideMenu />
      <div className='flex flex-col w-5/6 h-screen'>
        <NavBar />
        <MusicPlayer />
      </div>
    </div>
  )
}

export default Main