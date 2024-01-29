import React from 'react'
import MusicWindowArtistsCarousel from './MusicWindowArtistsCarousel'
import MusicWindowAlbumsCarousel from './MusicWindowAlbumsCarousel'
import MusicWindowPlaylistsCarousel from './MusicWindowPlaylistsCarousel'

const MusicWindowSearchResult = ({tracksResult, artistsResult, albumsResult, playlistsResult}) => {

  return (
    <div className='h-74% overflow-y-scroll pl-10 pr-10 mt-3.5 pb-3.5 scrollbar-thin scrollbar-thumb-bordercolor scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
      <MusicWindowArtistsCarousel carouselTitle='Artists' artists={artistsResult} />
      <div className='mt-10'></div>
      <MusicWindowAlbumsCarousel carouselTitle='Albums' albums={albumsResult} />
      <MusicWindowPlaylistsCarousel carouselTitle='Playlists' playlists={playlistsResult} />
    </div>
  )
}

export default MusicWindowSearchResult