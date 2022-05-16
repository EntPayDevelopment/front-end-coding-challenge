import { gql } from "@apollo/client";

import { cache } from "../../apollo/cache";

import { removeFromWatchlist } from "../../api";

import { GET_MEDIA_AND_WATCH_LIST } from "../queries";

export const REMOVE_FROM_WATCH_LIST = gql`
  mutation RemoveFromWatchList($media: Media!) {
    removeMediaFromWatchList(media: $media) @client
  }
`;

export async function removeMediaFromWatchList(_, { media }) {
  try {
    // Call removeFromWatchlist api with media id
    const result = await removeFromWatchlist(media.id);

    if (result.status !== 200) {
      throw new Error(result);
    }

    const updateResult = cache.updateQuery(
      { query: GET_MEDIA_AND_WATCH_LIST },
      (data) => ({
        // Update the media with isAddedToWatchList: false
        mediaList: data.mediaList.map((item) => {
          if (item.id === media.id) {
            return { ...item, isAddedToWatchList: false };
          } else {
            return item;
          }
        }),
        // Remove the media from watch list
        watchList: data.watchList.filter((item) => item.id !== media.id),
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
