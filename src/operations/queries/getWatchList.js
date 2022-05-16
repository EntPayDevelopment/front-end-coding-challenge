import { gql } from "@apollo/client";

import { cache } from "../../apollo";

export const GET_WATCH_LIST = gql`
  query GetWatchList {
    watchList @client
  }
`;

export function watchList() {
  try {
    const queryResult = cache.readQuery({
      query: GET_WATCH_LIST,
    });

    return queryResult?.watchList ? queryResult?.watchList : [];
  } catch (err) {
    console.error(err);
    return [];
  }
}
