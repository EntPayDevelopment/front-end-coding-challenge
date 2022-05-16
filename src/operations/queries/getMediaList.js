import { gql } from "@apollo/client";

import { getMedias } from "../../api";

export const GET_MEDIA_LIST = gql`
  query GetMediaList {
    mediaList @client
  }
`;

export async function mediaList() {
  try {
    // Call getMedias api
    const medias = await getMedias();

    // Return media list with attribute isAddedToWatchList with false (will be used to handle state)
    return medias.map((media) => ({ ...media, isAddedToWatchList: false }));
  } catch (err) {
    console.error(err);
    return [];
  }
}
