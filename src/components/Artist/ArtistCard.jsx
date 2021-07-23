import { useEffect, useState } from "react";
import ArtistProfile from './ArtistProfile';
import ArtistAlbumList from "./ArtistAlbumList";
import ArtistBiography from './ArtistBiography';

import './ArtistCard.css'

const ArtistCard = ({artistId}) => {

    const [ Artist, setArtist ] = useState(null);
    
    useEffect(() => {
        fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${artistId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.artists[0]);
            setArtist(data.artists[0]);
        })
    }, [artistId])

    return (
        <>
        { Artist &&
            <div>
                <ArtistProfile Artist={Artist}/>
                <ArtistAlbumList Artist={Artist}/>
                <ArtistBiography Artist={Artist}/>
            </div>
        }
        </>
    );
}

export default ArtistCard;