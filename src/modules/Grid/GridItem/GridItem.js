import React, { } from 'react';
import { WatchlistBtn } from "../../WatchlistBtn";
import styles from "./GridItem.module.css";

export const GridItem = (props) => {
    const item = props.item || {};
    return (
        <div className={styles.GridItem}>
            <img src={item.image} alt={`poster for ${item.title}`} className={styles.Poster} />
            <div className={styles.Title}>{item.title}</div>
            <WatchlistBtn id={item.id} />
        </div>
    );
};