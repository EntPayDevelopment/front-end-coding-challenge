import {createContext, useState} from "react";

const WatchListContext = createContext([]);

export const WatchListProvider = ({children}) => {
    const [watchList, setWatchList] = useState([])

    const addCard = (media) => {
        setWatchList(watchList => [...watchList, media])
    }

    const removeCard = (media) => {
        setWatchList(watchList.filter(item => item !== media))
    }

    return (
        <WatchListContext.Provider value={{watchList, addCard, removeCard}}>
            {children}
        </WatchListContext.Provider>
    )
}

export default WatchListContext;
