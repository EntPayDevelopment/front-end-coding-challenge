import './styles.css'
import React, { useState, useEffect } from 'react'
import { Header, Grid } from './modules'
import { getMedias } from "./api/";

export default function App() {
  const [_items, _setItems] = useState([]);
  useEffect(() => {
    if (!_items.length) {
      getMedias().then(items => _setItems(items)).catch(console.error);
    }
  }, [_items, _setItems, getMedias]);

  return (
    <>
      <Header />
      <main>
        <Grid items={_items} />
      </main>
    </>
  )
}
