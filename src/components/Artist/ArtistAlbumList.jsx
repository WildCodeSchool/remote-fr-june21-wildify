import { useEffect, useState } from "react";
import ArtistAlbum from './ArtistAlbum'

import './ArtistAlbumList.css'

const ArtistAlbumList = ({ Artist }) => {
    
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
    
    const [AlbumList, setAlbumList] = useState(null);
    useEffect(() => {
        fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=${Artist.idArtist}`)
        .then(response => response.json())
        .then(data => {setAlbumList(data.album);
            })
    }, [Artist])

    return (
        <>
        { AlbumList
            ?<div>
                <div className="artist-title">Discographie</div>
                <div className="center">
                    <div className="artist-album-list">
                        {AlbumList.slice(firstAlbum, lastAlbum)
                        .map( (album) => <ArtistAlbum key={album.idAlbum} album={ album } /> )
                        }
                    </div>
                </div>
                <div className="albums-pages">
                    {firstAlbum >= 10 && <p className="albums-prev" onClick={prevClick}>Prec</p>}
                    {lastAlbum < AlbumList.length && <p className="albums-next" onClick={nextClick}>Suiv</p>}
                </div>
            </div>
            :<div>Discographie non disponible</div>
        }
        </>
    );
}

export default ArtistAlbumList;