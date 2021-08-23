import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import imgNotFound from '../../assets/cover-wildify.png'

const ArtistSimilarCard = ({ similarArtist }) => {
    // Hook states
    const [artistImg, setArtistImg] = useState(null)

    useEffect(() => {
        // Get Artist img from AudioDB API
        const getArtistImgDB = () => (
            axios
                .get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${similarArtist.name}`)
                .then((results) => 
                    results.data.artists
                        ? setArtistImg(results.data.artists[0].strArtistThumb)
                        : setArtistImg(imgNotFound)
                )
        );
        similarArtist && getArtistImgDB();
    }, [similarArtist])

    return (
        <div className="similarArtist">
            <Link to={`/artist/${similarArtist.name}`}> 
                <p>{similarArtist.name}</p>
                <img src={artistImg} alt={`Img of ${similarArtist.name}`} />
            </Link>
        </div>
    );
}

export default ArtistSimilarCard;
