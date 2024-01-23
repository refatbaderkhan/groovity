import React, {useState, useEffect} from 'react'
import { MusicWindowGenreFilterCombobox } from './MusicWindowGenreFilterCombobox'
import { spotifyGetAvailableGenreSeeds } from 'api/spotify/spotifyServices'
import MusicWindowGenreFilterButton from './MusicWindowGenreFilterButton'


const MusicWindowGenreFilter = () => {

  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])

  const handleUnselect = (currentValue) => {
    setSelectedGenres((prevGenres) => {
      return prevGenres.filter((existingValue) => existingValue !== currentValue);
    })
  }

  useEffect(() => {
    spotifyGetAvailableGenreSeeds()
      .then((response) => {
        setGenres(response.genres)
      })
  }, [])

  return (
    <div className='genre-filter flex flex-row h-3% w-full justify-between'>
      <div className='selected-genres flex flex-row justify-start'>
        {selectedGenres.map((genre) => (
          <MusicWindowGenreFilterButton genre={genre} handleUnselect={handleUnselect} />
        ))}
      </div>
      <div className='select-genre justify-self-end'>
      <MusicWindowGenreFilterCombobox genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
      </div>
    </div>
  )
}

export default MusicWindowGenreFilter