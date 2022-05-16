import { Route, Routes } from "react-router-dom";

import { MediaListPage, WatchListPage } from "../pages";

export const Router = () => (
  <Routes>
    <Route path="/" element={<MediaListPage />} />
    <Route path="/watch-list" element={<WatchListPage />} />
  </Routes>
);
