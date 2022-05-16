import { gql } from "@apollo/client";

import { cache } from "../../apollo";

export const GET_IS_SNACKBAR_OPEN = gql`
  query GetIsSnackbarOpen {
    isSnackbarOpen @client
  }
`;

export function isSnackbarOpen() {
  try {
    const queryResult = cache.readQuery({
      query: GET_IS_SNACKBAR_OPEN,
    });

    return queryResult?.isSnackbarOpen ? queryResult?.isSnackbarOpen : false;
  } catch (err) {
    console.error(err);
    return [];
  }
}
