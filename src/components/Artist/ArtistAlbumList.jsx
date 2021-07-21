import { useEffect, useState } from "react";
import ArtistAlbum from './ArtistAlbum'

import '../style/ArtistAlbumList.css'

const ArtistAlbumList = ({ Artist }) => {

    const [ AlbumList, setAlbumList] = useState(null);
    
    useEffect(() => {
        fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=111239`)
        // fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=${Artist.idArtist}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.album);
            setAlbumList(data.album);
        })
        }, [])


    return (
        <>
            { AlbumList &&
                <div className="artist-album-list">
                    { AlbumList.map( (album) =>
                        <ArtistAlbum album={ album } /> )
                    }
                </div>
            }
        </>
    );
}

export default ArtistAlbumList;