import React from 'react'
import {Button}  from './button.jsx'

const SideMenu = () => {
  return (
    <div className=' h-92% w-1/6 border-r border-bordercolor	'>
      <Button
      onClick={() => console.log('clicked')}
      variant="outline"
      >Button</Button>
    </div>
  )
}

export default SideMenu