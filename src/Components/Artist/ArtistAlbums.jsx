import { useEffect, useState } from "react";
import axios from 'axios';

import ArtistAlbum from './ArtistAlbum';

import './ArtistAlbums.css';

const ArtistAlbums = ({ artist }) => {
    
    const [firstAlbum, setFirstAlbum] = useState(0);
    const [lastAlbum, setLastAlbum] = useState(10);
    
    const prevClick = () => {
        setFirstAlbum(firstAlbum - 10);
        setLastAlbum(lastAlbum - 10);
    };
    const nextClick = () => {
        setFirstAlbum(firstAlbum + 10);
        setLastAlbum(lastAlbum + 10);
    };
    
    // Data from lastFM
    const [ albums, setAlbums ] = useState(null);
        useEffect(() => {
            axios
            .get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
            .then(response => response.data)
            .then(data => {
                setAlbums(data.topalbums.album);
            })
        }, [artist])

    return (
        <>
        { albums
            ?<div>
                <div className="artistTitle">Discographie</div>
                <div className="center">
                    <div className="artistAlbums">
                        {albums.slice(firstAlbum, lastAlbum)
                        .map( (album, index) => <ArtistAlbum key={index} album={ album } /> )
                        }
                    </div>
                </div>
                <div className="albumsPages">
                    {firstAlbum >= 10 && <p className="albums-prev" onClick={prevClick}>Prec</p>}
                    {lastAlbum < albums.length && <p className="albums-next" onClick={nextClick}>Suiv</p>}
                </div>
            </div>
            :<div>Discographie non disponible</div>
        }
        </>
    );
}

export default ArtistAlbums;
