import React, {useContext, useState} from "react";
import {addToWatchlist, removeFromWatchlist} from "media-api";
import WatchListContext from "../../context";
import './styles.css';

export const MediaCard = ({media}) => {
    const [isAdded, setIsAdded] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const {addCard, removeCard} = useContext(WatchListContext)

    const addCardHandler = async () => {
        setIsClicked(true)
        await addToWatchlist(media.id).then((res) => {
            setIsAdded(!isAdded)
            addCard(media)
            setIsClicked(false)
            console.log(res.message)
        }).catch(error => {
            if (error.status === 422) {
                alert(`${error.message} ${media.title} add to watchlist failed, please try again`)
                setIsClicked(false)
            }
        })
    }
    const removeCardHandler = async () => {
        setIsClicked(true)
        await removeFromWatchlist(media.id).then(() => {
            removeCard(media)
            setIsAdded(!isAdded)
            setIsClicked(false)
        }).catch(error => {
            console.log(error)
            setIsClicked(false)
        })
    }
    return (
        <div className="mediaCard">
            <img className="image" src={media.image} alt="media image"/>
            <h3 className="title">{media.title}</h3>
            {isAdded ?
                <button onClick={removeCardHandler} disabled={isClicked}>(-) Remove from watchlist</button>
                : <button onClick={addCardHandler} disabled={isClicked}>(+) Add to watchlist</button>}
        </div>
    );
};

