import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./modules/index";
import { Watchlist } from "./components/Watchlist";
import { MovieList } from "./components/MovieList";
import "./font-awesome/css/all.min.css";
import './styles.css'
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <MovieList/>
        <Watchlist/>
      </GlobalProvider>
  </>
  );
}
export default App;
