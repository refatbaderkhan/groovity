import React, {useState, useEffect} from 'react'
import MusicWindowCategoryFilter from './MusicWindowCategoryFilter'
import MusicWindowAlbumsCarousel from './MusicWindowAlbumsCarousel'
import { spotifyNewAlbumReleases, spotifyGetFeaturedPlaylists, spotifyGetSeveralBrowseCategories } from 'api/spotify/spotifyServices'
import MusicWindowPlaylistsCarousel from './MusicWindowPlaylistsCarousel'
import MusicWindowSingleCategoryDisplay from './MusicWindowSingleCategoryDisplay'
import MusicWindowCategoryCarousel from './MusicWindowCategoryCarousel'
import MusicWindowSearchResult from './MusicWindowSearchResult'

const MusicWindow = ({search, tracksResult, artistsResult, albumsResult, playlistsResult}) => {
const [albums, setAlbums] = useState([])
const [featuredPlaylists, setFeaturedPlaylists] = useState([])
const [categories, setCategories] = useState([]);
const [selectedCategories, setSelectedCategories] = useState([]);

useEffect(() => {
  spotifyNewAlbumReleases()
    .then((response) => {
      setAlbums(response.albums.items)
    })
  spotifyGetFeaturedPlaylists()
    .then((response) => {
      setFeaturedPlaylists(response.playlists.items)
    })
  spotifyGetSeveralBrowseCategories()
  .then((response) => {
    const sortedCategories = response.categories.items.sort((a, b) => a.name.localeCompare(b.name));
    setCategories(sortedCategories);
  })
}, [])

  return (
    <div>
    {search.trim().length > 0 ? (
    <div className='MusicWindow h-82% pl-10 pr-10 pt-3.5 pb-3'>
      <MusicWindowSearchResult tracksResult={tracksResult} artistsResult={artistsResult} albumsResult={albumsResult} playlistsResult={playlistsResult} />
    </div>) : (
    <div className='MusicWindow h-82% pl-10 pr-10 pt-3.5 pb-3'>
      <MusicWindowCategoryFilter categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
      <div className='h-74% overflow-y-scroll pl-10 pr-10 mt-3.5 pb-3.5 scrollbar-thin scrollbar-thumb-bordercolor scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        {selectedCategories.length === 0 ? (
          <>
            <MusicWindowAlbumsCarousel carouselTitle='New Releases' albums={albums} />
            <MusicWindowPlaylistsCarousel carouselTitle='Featured Playlists' playlists={featuredPlaylists} />
          </>
        ) : (
          selectedCategories.length === 1 ? (
          <>
            <MusicWindowSingleCategoryDisplay categoryId={selectedCategories[0].id} />
          </>
        ) : (
          <>
            {selectedCategories.map((category) => (
              <MusicWindowCategoryCarousel key={category.id} carouselTitle={category.name} categoryId={category.id} />
            ))}
          </>
        )
        )}
      </div>
    </div>
    )}
    </div>
  )
}

export default MusicWindow
