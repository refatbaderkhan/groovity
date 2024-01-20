import { Progress } from "@/components/ui/progress"
import { spotifyGetCategoryPlaylists } from "api/spotify/spotifyServices"
import React, {useEffect} from 'react'


const Test = () => {
  useEffect(() => {
    spotifyGetCategoryPlaylists('dinner')
  }, [])
  return (
    <div className='text-[#BFBFBF]'>
      <Progress value={33} />
    </div>
  )
}

export default Test