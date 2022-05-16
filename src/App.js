import { useQuery } from "@apollo/client";
import styled, { ThemeProvider } from "styled-components";

import { Header } from "./modules";
import { Router } from "./routes";
import { Snackbar } from "./components";
import { Theme, GlobalStyles } from "./styles";

import { GET_MEDIA_AND_WATCH_LIST, GET_SNACKBAR_STATUS } from "./operations";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.main`
  padding: 2rem 4vw;
  width: 100%;
`;

export default function App() {
  // Set and Get initial state
  useQuery(GET_MEDIA_AND_WATCH_LIST);
  useQuery(GET_SNACKBAR_STATUS);

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <GlobalStyles />
        <Header />
        <Wrapper>
          <Router />
        </Wrapper>
        <Snackbar />
      </Container>
    </ThemeProvider>
  );
}
