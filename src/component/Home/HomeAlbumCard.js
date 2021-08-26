import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import imgNotFound from '../../assets/cover-wildify.png'

const HomeAlbumCard = ({topAlbum}) => {

    // Hook states
    const [topAlbumImg, setTopAlbumImg] = useState(null)

    // Get Album img from lastFM API
    console.log(topAlbum + "blabla")
    useEffect(() => {
    const getTopAlbumImg = () => {
        axios
        .get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_API_KEY}&artist=${topAlbum.artist}&album=${topAlbum.name}&format=json`)
        .then(result => {
            result.data.results.album.image
            ? setTopAlbumImg(result.data.results.album.image[1]['#text'])
            : setTopAlbumImg(imgNotFound)
        })
    }
    topAlbum && getTopAlbumImg();
    }, [topAlbum])

    return (
        <Link to={`/album/${topAlbum.name}/${topAlbum.artist}`}> 
            <img src={topAlbumImg} alt={`Img of ${topAlbum.name}`} />
            <p>{topAlbum.name}</p>
        </Link>
    );
}

export default HomeAlbumCard;