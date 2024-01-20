import { Progress } from "@/components/ui/progress"
import { spotifyGetTrackRecommendations } from "api/spotify/spotifyServices"
import React, {useEffect} from 'react'


const Test = () => {
  useEffect(() => {
    spotifyGetTrackRecommendations('4NHQUGzhtTLFvgF5SZesLK', 'classical,country', '0c6xIDDpzE81m2q797ordA')
  }, [])
  return (
    <div className='text-[#BFBFBF]'>
      <Progress value={33} />
    </div>
  )
}

export default Test