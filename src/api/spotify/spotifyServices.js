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