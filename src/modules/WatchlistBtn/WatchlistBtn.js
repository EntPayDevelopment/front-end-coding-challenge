import React, { useState } from 'react';
import { addToWatchlist, removeFromWatchlist } from "../../api/";
import styles from "./WatchlistBtn.module.css";

export const labels = {
    add: "(+) Add to Watchlist",
    remove: "(-) Remove from Watchlist"
};

export const testId = 'WatchlistButton';

export const WatchlistBtn = (props) => {
    const id = props.id || null;
    const [_isInWatchList, _setIsInWatchList] = useState(false);
    const toggleWatchlist = () => {
        if (id) {
            if (_isInWatchList) {
                removeFromWatchlist(id).then(() => { _setIsInWatchList(false) }).catch(() => { _setIsInWatchList(true) });
            } else {
                addToWatchlist(id).then(() => {
                    _setIsInWatchList(true)
                }).catch(() => { _setIsInWatchList(false) });
            }
        }
    };

    return (<>
        {id ? <button data-testid={testId} className={`${styles.Btn} ${_isInWatchList ? styles.Remove : styles.Add}`} onClick={toggleWatchlist}>{_isInWatchList ? labels.remove : labels.add}</button> : null}
    </>);
};