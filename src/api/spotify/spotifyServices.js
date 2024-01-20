import { sendRequest } from "api/apiConfig";


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



export const spotifyGetSingleBrowseCategory = async (category_id) => {
  const response = await sendRequest({
    route: `/spotify/single-browse-category/${category_id}`,
  });
  return response;
}

export const spotifyGetSeveralBrowseCategories = async () => {
  const response = await sendRequest({
    route: "/spotify/several-browse-categories/",
  });
  console.log(response);
  return response;
}


