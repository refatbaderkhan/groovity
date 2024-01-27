import React, {useState, useEffect} from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MusicWindowPlaylistCard from './MusicWindowPlaylistCard.jsx';
import { spotifyGetCategoryPlaylists } from 'api/spotify/spotifyServices'


const MusicWindowCategoryCarousel = ({ carouselTitle, categoryId }) => {
  const [playlists, setPlaylists] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    spotifyGetCategoryPlaylists(categoryId)
      .then((response) => {
        setPlaylists(response.playlists.items)
        setLoading(false)
      })
  }, [categoryId])

  return (
    <div>
      {loading ? (
        <div>
          Loading
        </div>
      ) : (
      <div>
      <div className='MusicWindowTitle text-xl font-semibold text-[#BFBFBF] mt-10'>
        {carouselTitle}
      </div>
      <div className="mt-3.5">
        <Carousel>
          <CarouselContent className="">
            {playlists.map((playlist) => (
              <CarouselItem key={playlist.id} className="basis-1/5">
                <MusicWindowPlaylistCard playlist={playlist} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border border-0 bg-[#515151] text-[#BFBFBF] hover:bg-[#FFDE5A]" />
          <CarouselNext className="border border-0  bg-[#515151] text-[#BFBFBF] hover:bg-[#FFDE5A]" />
        </Carousel>
      </div>
    </div>
  )}
  </div>
  )
}
  

export default MusicWindowCategoryCarousel;
