import React from 'react'
import { Progress } from "@/components/ui/progress" ;


const MusicPlayerSeek = () => {
  return (
    <div className = 'h-fit w-4/6'>
      <Progress value={50} />
    </div>
  )
}

export default MusicPlayerSeek