import { gql } from "@apollo/client";

import { cache } from "../../apollo/cache";

import { GET_SNACKBAR_STATUS } from "../queries";

export const OPEN_SNACKBAR = gql`
  mutation OpenSnackbar($message: String!) {
    openSnackbar(message: $message) @client
  }
`;

export function openSnackbar(_, { message }) {
  const updateResult = cache.updateQuery(
    { query: GET_SNACKBAR_STATUS },
    () => ({
      isSnackbarOpen: true,
      snackbarMessage: message,
    }),
  );

  return updateResult;
}
