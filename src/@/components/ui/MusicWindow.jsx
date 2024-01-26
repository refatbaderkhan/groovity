import React, {useState, useEffect} from 'react'
import MusicWindowGenreFilter from './MusicWindowGenreFilter'
import MusicWindowAlbumsCarousel from './MusicWindowAlbumsCarousel'
import { spotifyNewAlbumReleases } from 'api/spotify/spotifyServices'

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
      <MusicWindowAlbumsCarousel carouselTitle='New Releases' albums={albums}/>
    </div>
  )
}

export default MusicWindow
