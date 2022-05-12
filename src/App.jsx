import "./styles.css";
import React from "react";
import { Header } from "./modules";
import Main from "./modules/Main";
import { addToWatchlist } from "../api/";
import { useEffect } from "react";

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
