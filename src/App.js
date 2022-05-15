import './styles.css'
import React from 'react'
import {Header} from './modules'
import MediaGrid from "./views/MediaGrid";
import {WatchListProvider} from "./context";

export default function App() {
    return (
        <>
            <WatchListProvider>
                <Header/>
                <main><MediaGrid/></main>
            </WatchListProvider>
        </>
    )
}
