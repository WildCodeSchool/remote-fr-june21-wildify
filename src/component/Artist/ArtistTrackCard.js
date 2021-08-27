import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import imgNotFound from '../../assets/cover-wildify.png'

const ArtistTopTrackCard = ({ track }) => {
    // Hook states
    const [trackImg, setTrackImg] = useState(null)

    // Get Album img from lastFM API
    useEffect(() => {
    const getTrackImg = () => (
        axios
            .get(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process.env.REACT_APP_API_KEY}&artist=${track.artist.name}&track=${track.name}&format=json`)
            .then(response => response.data)
            .then(data =>
                data.track.album
                    ? setTrackImg(data.track.album.image[3]['#text'])
                    : setTrackImg(imgNotFound)
            )
        );
        getTrackImg();
    }, [track])

    return (
        track.name !== "(null)" && // remove albums with title = (null)
        <div className="artistAlbum">
            <Link to={`/track/${track.name}/${track.artist.name}`}> 
                <img src={trackImg} alt={"Wildify3DCover"}/>
                <p>{track.name}</p>
            </Link>
        </div>
    );
}

export default ArtistTopTrackCard;
