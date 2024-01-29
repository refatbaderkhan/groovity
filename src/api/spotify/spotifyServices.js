import { sendRequest } from "api/apiConfig";


//Albums Endpoints
export const spotifyGetAlbum = async (album_id) => {
  const response = await sendRequest({
    route: `/spotify/get-album/${album_id}`,
  });
  return response;
}

export const spotifyGetSeveralAlbums = async (album_ids) => {
  const response = await sendRequest({
    route: `/spotify/get-several-albums/${album_ids}`,
  });
  return response;
}

export const spotifyGetAlbumTracks = async (album_id) => {
  const response = await sendRequest({
    route: `/spotify/get-album-tracks/${album_id}`,
  });
  return response;
}

export const spotifyNewAlbumReleases = async () => {
  const response = await sendRequest({
    route: `/spotify/new-releases`,
  });
  return response;
}


//Artists Endpoints
export const spotifyGetArtist = async (artist_id) => {
  const response = await sendRequest({
    route: `/spotify/get-artist/${artist_id}`,
  });
  return response;
}

export const spotifyGetSeveralArtists = async (artist_ids) => {
  const response = await sendRequest({
    route: `/spotify/get-several-artists/${artist_ids}`,
  });
  return response;
}

export const spotifyGetArtistAlbums = async (artist_id) => {
  const response = await sendRequest({
    route: `/spotify/get-artist-albums/${artist_id}`,
  });
  return response;
}

export const spotifyGetArtistTopTracks = async (artist_id) => {
  const response = await sendRequest({
    route: `/spotify/get-artist-top-tracks/${artist_id}`,
  });
  return response;
}

export const spotifyGetArtistRelatedArtists = async (artist_id) => {
  const response = await sendRequest({
    route: `/spotify/get-artist-related-artists/${artist_id}`,
  });
  return response;
}


//Categories Endpoints 
export const spotifyGetSingleBrowseCategory = async (category_id) => {
  const response = await sendRequest({
    route: `/spotify/single-browse-category/${category_id}`,
  });
  return response;
}

export const spotifyGetSeveralBrowseCategories = async () => {
  const response = await sendRequest({
    route: "/spotify/several-browse-categories/?offset=0&limit=50",
  });
  return response;
}


//Genres Endpoints
export const spotifyGetAvailableGenreSeeds = async () => {
  const response = await sendRequest({
    route: "/spotify/available-genre-seeds/",
  });
  return response;
}


//Playlists Endpoints
export const spotifyGetPlaylist = async (playlist_id) => {
  const response = await sendRequest({
    route: `/spotify/get-playlist/${playlist_id}`,
  });
  return response;
}

export const spotifyGetFeaturedPlaylists = async () => {
  const response = await sendRequest({
    route: "/spotify/featured-playlists/",
  });
  return response;
}

export const spotifyGetCategoryPlaylists = async (category_id) => {
  const response = await sendRequest({
    route: `/spotify/category-playlists/${category_id}`,
  });
  return response;
}

//Search Endpoint
export const spotifySearch = async (query) => {
  const response = await sendRequest({
    route: `/spotify/search/${query}`,
  });
  return response;
}


//Tracks Endpoints
export const spotifyGetTrack = async (track_id) => {
  const response = await sendRequest({
    route: `/spotify/get-track/${track_id}`,
  });
  return response;
}

export const spotifyGetSeveralTracks = async (track_ids) => {
  const response = await sendRequest({
    route: `/spotify/get-several-tracks/${track_ids}`,
  });
  return response;
}

export const spotifyGetTrackAudioFeatures = async (track_id) => {
  const response = await sendRequest({
    route: `/spotify/get-track-audio-features/${track_id}`,
  });
  console.log(response);
  return response;
}

export const spotifyGetTrackAudioAnalysis = async (track_id) => {
  const response = await sendRequest({
    route: `/spotify/get-track-audio-analysis/${track_id}`,
  });
  return response;
}

export const spotifyGetTrackRecommendations = async (seed_artists, seed_genres, seed_tracks) => {
  const response = await sendRequest({
    route: `/spotify/get-tracks-recommendations/${seed_artists}/${seed_genres}/${seed_tracks}`,
  });
  console.log(response);
  return response;
}





