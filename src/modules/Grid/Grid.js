import React from "react";
import { GridItem } from './GridItem/GridItem';
import styles from './Grid.module.css';

export const Grid = (props) => {
    const items = props.items || [];
    const gridItems = items.map((item) => {
        return (
            <GridItem key={item.id} item={item} />
        );
    });

    return (
        <section className={styles.Grid}>
            {gridItems}
        </section>
    );
};

