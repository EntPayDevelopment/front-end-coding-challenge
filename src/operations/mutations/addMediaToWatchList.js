import { gql } from "@apollo/client";

import { cache } from "../../apollo/cache";

import { addToWatchlist } from "../../api";

import { GET_MEDIA_AND_WATCH_LIST, openSnackbar } from "../../operations";

export const ADD_TO_WATCH_LIST = gql`
  mutation AddToWatchList($media: Media!) {
    addMediaToWatchList(media: $media) @client
  }
`;

export async function addMediaToWatchList(_, { media }) {
  try {
    // Call addToWatchlist api with media id
    const result = await addToWatchlist(media.id);

    if (result.status !== 200) {
      throw new Error(result);
    }

    const updateResult = cache.updateQuery(
      { query: GET_MEDIA_AND_WATCH_LIST },
      (data) => ({
        // Update the media with isAddedToWatchList: true
        mediaList: data.mediaList.map((item) => {
          if (item.id === media.id) {
            return { ...item, isAddedToWatchList: true };
          } else {
            return item;
          }
        }),
        // Add the media to watch list if it is not in the list
        watchList: data.watchList.some((item) => item.id === media.id)
          ? [...data.watchList]
          : [...data.watchList, { ...media, isAddedToWatchList: true }],
      }),
    );

    return updateResult;
  } catch (err) {
    // When error occurs Open snack bar with error message
    openSnackbar(null, {
      message: `Something went wrong. Please try again. (${err.message})`,
    });
    console.error(err);
    return err;
  }
}
