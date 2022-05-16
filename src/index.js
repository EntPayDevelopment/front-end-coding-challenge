import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";
import { BrowserRouter } from "react-router-dom";

import { cache, resolvers } from "./apollo";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Persist cache in local storage
persistCache({
  cache,
  storage: new LocalStorageWrapper(localStorage),
}).then(() => {
  const client = new ApolloClient({
    cache,
    resolvers,
  });

  root.render(
    <StrictMode>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </StrictMode>,
  );
});
