import { gql } from "@apollo/client";

import { cache } from "../../apollo";

export const GET_SNACKBAR_MESSAGE = gql`
  query GetSnackbarMsg {
    snackbarMessage @client
  }
`;

export function snackbarMessage() {
  try {
    const queryResult = cache.readQuery({
      query: GET_SNACKBAR_MESSAGE,
    });

    return queryResult?.snackbarMessage ? queryResult?.snackbarMessage : "";
  } catch (err) {
    console.error(err);
    return [];
  }
}
