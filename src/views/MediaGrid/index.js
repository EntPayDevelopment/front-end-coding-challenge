import React, {useEffect, useState} from "react";
import {getMedias} from "media-api";
import {MediaCard, WatchList} from "../../modules";
import "./styles.css"

const MediaGrid = () => {
    const [medias, setMedias] = useState([])

    const fetchMedias = async () => {
        await getMedias().then(res => {
            setMedias(res)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchMedias()
    }, [])

    return (
        <div className='mediaGrid'>
            {medias.length > 0 && medias.map((media, i) => (
                <MediaCard key={i} media={media}/>
            ))}
            <WatchList/>
        </div>
    )
};


export default MediaGrid;
