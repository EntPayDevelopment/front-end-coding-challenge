import React, { useState } from "react";
import "./MainItem.style.scss";
import { addToWatchlist, removeFromWatchlist } from "@api";

function MainItem(props) {
  const { imgUrl, title, id } = props;
  const [isAdded, setIsAdded] = useState(false);

  const handleAddCard = async () => {
    await addToWatchlist(id)
      .then(() => {
        setIsAdded(true);
      })
      .catch((error) => {
        if (error.response.status === 422) {
          alert(`Error: ${error.message}. Please try again!`);
        }
      });
  };

  const handleRemoveCard = async () => {
    await removeFromWatchlist(id)
      .then(() => {
        setIsAdded(false);
      })
      .catch(console.error);
  };

  return (
    <div className="main-item-card">
      <div className="main-item-content">
        <div className="card-image-wrapper">
          <img src={imgUrl} alt="main-card-image" />
        </div>
        <p>{title}</p>
        {isAdded && (
          <button onClick={handleRemoveCard}>Remove from watchlist</button>
        )}
        {!isAdded && <button onClick={handleAddCard}>Add to watchlist</button>}
      </div>
    </div>
  );
}

export default MainItem;
