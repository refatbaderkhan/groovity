import React, {useState, useEffect} from 'react'
import MusicWindowGenreFilter from './MusicWindowGenreFilter'
import MusicWindowAlbumCard from './MusicWindowAlbumCard'
import { spotifyNewAlbumReleases } from 'api/spotify/spotifyServices'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"

const MusicWindow = () => {
  
const [albums, setAlbums] = useState([])

useEffect(() => {
  spotifyNewAlbumReleases()
    .then((response) => {
      setAlbums(response.albums.items)
    })
}, [])

  return (
    <div className='MusicWindow h-82% pl-10 pr-10 pt-3.5 pb-3'>
      <MusicWindowGenreFilter />
      <div className='MusicWindowTitle text-xl font-semibold text-[#BFBFBF] mt-3.5'>
      New Releases
      </div>
      <div className="mt-3.5">
      <Carousel>
        <CarouselContent className="pl-5">
          {albums.map((album) => (
            <CarouselItem key={album.id} className="basis-1/5">
              <MusicWindowAlbumCard album={album} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-0 bg-[#515151] text-[#BFBFBF] hover:bg-[#FFDE5A]"/>
        <CarouselNext className="border border-0  bg-[#515151] text-[#BFBFBF] hover:bg-[#FFDE5A]"/>
      </Carousel>
      </div>
    </div>
  )
}

export default MusicWindow
