import React, {useState, useEffect} from 'react'
import MusicPlayer from "../components/ui/MusicPlayer";
import SideMenu from "../components/ui/SideMenu";
import NavBar from '@/components/ui/NavBar';
import MusicWindow from '@/components/ui/MusicWindow';
import { spotifySearch } from 'api/spotify/spotifyServices';

const Main = () => {
  
  const [search, setSearch] = useState('');
  const [tracksResult, setTracksResult] = useState([]);
  const [artistsResult, setArtistsResult] = useState([]);
  const [albumsResult, setAlbumsResult] = useState([]);
  const [playlistsResult, setPlaylistsResult] = useState([]);

  useEffect(() => {
    if (search.trim().length > 0) {
      spotifySearch(search)
        .then((response) => {
          setTracksResult(response.tracks.items);
          setArtistsResult(response.artists.items);
          setAlbumsResult(response.albums.items);
          setPlaylistsResult(response.playlists.items);
        });
    }
  }, [search]);

  return (
    <div className='flex flex-row justify-start h-screen w-screen'>
      <SideMenu />
      <div className='flex flex-col w-5/6 h-screen'>
        <NavBar setSearch={setSearch} />
        <MusicWindow search={search} tracksResult={tracksResult} artistsResult={artistsResult} albumsResult={albumsResult} playlistsResult={playlistsResult} />
        <MusicPlayer />
      </div>
    </div>
  )
}

export default Main