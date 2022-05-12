import React, { useState, useEffect } from "react";
import MainItem from "./components/MainItem";
import "./Main.style.scss";
import { getMedias } from "@api";

function Main() {
  const [medias, setMedias] = useState([]);

  const fetchMedias = async () => {
    await getMedias()
      .then((data) => {
        setMedias(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchMedias();
  }, []);

  return (
    <main className="main-container">
      {medias.length > 0 &&
        medias.map((media) => (
          <MainItem
            key={media.id}
            id={media.id}
            imgUrl={media.image}
            title={media.title}
          />
        ))}
    </main>
  );
}

export default Main;
