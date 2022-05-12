import React, { useState } from "react";
import "./MainItem.style.scss";
import { addToWatchlist, removeFromWatchlist } from "@api";

function MainItem(props) {
  const { imgUrl, title, id } = props;

  const [isAdded, setIsAdded] = useState(true);

  const handleAddCard = async () => {
    await addToWatchlist(id)
      .then(() => {
        setIsAdded(true);
        alert(`${id} is added!`);
      })
      .catch(console.error);
  };

  const handleRemoveCard = async () => {
    await removeFromWatchlist(id)
      .then(() => {
        setIsAdded(false);
        alert(`${id} is removed!`);
      })
      .catch(console.error);
  };

  return (
    <div className="main-item-card">
      <img src={imgUrl} alt="main-card-image" />
      <title>{title}</title>
      {isAdded && (
        <button onClick={handleRemoveCard}>Remove from watchlist</button>
      )}
      {!isAdded && <button onClick={handleAddCard}>Add to watchlist</button>}
    </div>
  );
}

export default MainItem;
