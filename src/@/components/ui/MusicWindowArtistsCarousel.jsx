import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MusicWindowArtistCard from './MusicWindowArtistCard';

const MusicWindowArtistsCarousel = ({ carouselTitle, artists }) => {
  return (
    <div>
      <div className='MusicWindowTitle text-xl font-semibold text-[#BFBFBF]'>
        {carouselTitle}
      </div>
      <div className="mt-3.5">
        <Carousel>
          <CarouselContent className="">
            {artists.map((artist) => (
              <CarouselItem key={artist.id} className="basis-1/5">
                <MusicWindowArtistCard artist={artist} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border border-0 bg-[#515151] text-[#BFBFBF] hover:bg-[#FFDE5A]" />
          <CarouselNext className="border border-0  bg-[#515151] text-[#BFBFBF] hover:bg-[#FFDE5A]" />
        </Carousel>
      </div>
    </div>
  );
}

export default MusicWindowArtistsCarousel;
