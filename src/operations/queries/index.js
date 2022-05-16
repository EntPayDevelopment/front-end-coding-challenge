import { gql } from "@apollo/client";

export * from "./getMediaList";
export * from "./getWatchList";
export * from "./getIsSnackbarOpen";
export * from "./getSnackbarMessage";

export const GET_MEDIA_AND_WATCH_LIST = gql`
  query GetMediaAndWatchList {
    mediaList @client
    watchList @client
  }
`;

export const GET_SNACKBAR_STATUS = gql`
  query GetSnackbarStatus {
    isSnackbarOpen @client
    snackbarMessage @client
  }
`;
