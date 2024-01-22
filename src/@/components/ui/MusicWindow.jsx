import React from 'react'
import { GenreCombobox } from './MusicWindowGenreCombobox' 

const MusicWindow = () => {

  const genres = [
    "acoustic",
    "afrobeat",
    "alt-rock",
    "alternative",
    "ambient",
    "anime",
    "black-metal",
    "bluegrass",
    "blues",
    "bossanova",
    "brazil",
    "breakbeat",
    "british",
    "cantopop",
    "chicago-house",
    "children",
    "chill",
    "classical",
    "club",
    "comedy",
    "country",
    "dance",
    "dancehall",
    "death-metal",
    "deep-house",
    "detroit-techno",
    "disco",
    "disney",
    "drum-and-bass",
    "dub",
  ]
  
  return (
    <div className='MusicWindow h-82% pl-10 pr-10 pt-3.5 pb-3'>
      <div className='genre-filter flex flex-row justify-end h-3%'>
        <GenreCombobox genres={genres} />
      </div>
    </div>
  )
}

export default MusicWindow
