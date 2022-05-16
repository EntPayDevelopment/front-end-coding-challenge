import { gql } from "@apollo/client";

import { cache } from "../../apollo/cache";

import { GET_SNACKBAR_STATUS } from "../queries";

export const CLOSE_SNACKBAR = gql`
  mutation CloseSnackbar {
    closeSnackbar @client
  }
`;

export function closeSnackbar() {
  const updateResult = cache.updateQuery(
    { query: GET_SNACKBAR_STATUS },
    () => ({
      isSnackbarOpen: false,
      snackbarMessage: "",
    }),
  );

  return updateResult;
}
