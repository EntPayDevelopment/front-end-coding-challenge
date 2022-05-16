import {
  mediaList,
  watchList,
  isSnackbarOpen,
  snackbarMessage,
  addMediaToWatchList,
  removeMediaFromWatchList,
  openSnackbar,
  closeSnackbar,
} from "../operations";

export const resolvers = {
  Query: {
    mediaList,
    watchList,
    isSnackbarOpen,
    snackbarMessage,
  },
  Mutation: {
    addMediaToWatchList,
    removeMediaFromWatchList,
    openSnackbar,
    closeSnackbar,
  },
};
