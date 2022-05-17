import "./styles.css";
import React from "react";
import { Header } from "./modules";
import {
  Route,
  BrowserRouter as Router,
  Navigate,
  Routes,
} from "react-router-dom";
import indexRoutes from "./routes";
import { history, store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate replace to="/dashboard" />}
            />
            {indexRoutes.map((route, key) => {
              return (
                <Route
                  exact
                  path={route.path}
                  element={route.component}
                  key={key}
                />
              );
            })}
          </Routes>
        </PersistGate>
      </Provider>
      <ToastContainer />
    </Router>
  );
}
