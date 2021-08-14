import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import imgNotFound from '../../assets/cover-wildify.png'

const HomeArtistCard = ({topArtist}) => {

    // Reponse Call API TheAudioDb pour img Artist
    const [img, setImg] = useState(null)

    // Call API TheAudioDb pour img Artist
    useEffect(() => {
    const getImgAudioDb = () => {
        axios.get(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${topArtist.name}`
        ).then((results) => {
            results.data.artists ? setImg(results.data.artists[0].strArtistThumb)
            : setImg(imgNotFound)
        })
    }
    topArtist && getImgAudioDb()
    }, [topArtist])

    return (
        <Link to={`/artist/${topArtist.name}`}> 
            <p>{topArtist.name}</p>
            <img src={img} alt={`Img of ${topArtist.name}`} />
        </Link>
    );
}

export default HomeArtistCard;
