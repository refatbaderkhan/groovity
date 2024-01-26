import React, {useState, useEffect} from 'react'
import MusicWindowCategoryFilter from './MusicWindowCategoryFilter'
import MusicWindowAlbumsCarousel from './MusicWindowAlbumsCarousel'
import { spotifyNewAlbumReleases, spotifyGetFeaturedPlaylists } from 'api/spotify/spotifyServices'
import MusicWindowPlaylistsCarousel from './MusicWindowPlaylistsCarousel'

const MusicWindow = () => {
  
const [albums, setAlbums] = useState([])
const [featuredPlaylists, setFeaturedPlaylists] = useState([])

useEffect(() => {
  spotifyNewAlbumReleases()
    .then((response) => {
      setAlbums(response.albums.items)
    })
  spotifyGetFeaturedPlaylists()
    .then((response) => {
      setFeaturedPlaylists(response.playlists.items)
    })
  console.log(featuredPlaylists)
}, [])

  return (
    <div className='MusicWindow h-82% pl-10 pr-10 pt-3.5 pb-3'>
      <MusicWindowCategoryFilter />
      <div className='h-74% overflow-y-scroll pl-10 pr-10 mt-3.5 pb-3.5 scrollbar-thin scrollbar-thumb-bordercolor scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
      <MusicWindowAlbumsCarousel carouselTitle='New Releases' albums={albums}/>
      <MusicWindowPlaylistsCarousel carouselTitle='Featured Playlists' playlists={featuredPlaylists}/>
      </div>
    </div>
  )
}

export default MusicWindow
