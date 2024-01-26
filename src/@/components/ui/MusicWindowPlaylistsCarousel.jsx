import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MusicWindowPlaylistCard from './MusicWindowPlaylistCard.jsx';

const MusicWindowPlaylistsCarousel = ({ carouselTitle, playlists }) => {
  return (
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
  );
};

export default MusicWindowPlaylistsCarousel;
