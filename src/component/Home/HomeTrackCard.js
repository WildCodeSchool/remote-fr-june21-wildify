import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import imgNotFound from '../../assets/cover-wildify.png'

const HomeTrackCard = ({topTrack}) => {
    // Hook states
    const [topTrackImg, setTopTrackImg] = useState(null)

    // Get Album img from lastFM API
    useEffect(() => {
    const getTopTrackImg = () => (
        axios
            .get(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process.env.REACT_APP_API_KEY}&artist=${topTrack.artist.name}&track=${topTrack.name}&format=json`)
            .then(response => response.data)
            .then(data =>
                data.track.album
                    ? setTopTrackImg(data.track.album.image[3]['#text'])
                    : setTopTrackImg(imgNotFound)
            )
        );
        getTopTrackImg();
    }, [topTrack])

    return (
        <Link to={`/track/${topTrack.name}/${topTrack.artist.name}`}> 
            <img src={topTrackImg} alt={"Wildify3DCover"}/>
            <p>{topTrack.name}</p>
        </Link>
    );
}

export default HomeTrackCard;