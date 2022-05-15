import {useContext} from "react";
import WatchListContext from "../../context";
import "./styles.css"

export const WatchList = () => {
    const {watchList} = useContext(WatchListContext)

    return (
        <div className="container">
            {watchList.length > 0 ?
                <div className="watchList">
                    WatchList
                    <span className="badge">{watchList.length}</span>
                </div> : null}
        </div>
    )
}
