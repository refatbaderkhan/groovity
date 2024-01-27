import React, {useState, useEffect} from 'react'
import MusicWindowPlaylistCard from './MusicWindowPlaylistCard'
import { spotifyGetCategoryPlaylists } from 'api/spotify/spotifyServices'

const MusicWindowSingleCategoryDisplay = ({ categoryId }) => {

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
    <div className='flex flex-row flex-wrap justify-start'>
      {loading ? (
        <div>
          Loading
        </div>
      ) : (
        playlists.map((playlist) => (
          <MusicWindowPlaylistCard key={playlist.id} playlist={playlist} singleDisplay={true} />
        ))
      )}
    </div>
  )
}

export default MusicWindowSingleCategoryDisplay