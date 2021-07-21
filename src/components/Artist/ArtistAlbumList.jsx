import { useEffect, useState } from "react";
import ArtistAlbum from './ArtistAlbum'

import '../style/ArtistAlbumList.css'

const ArtistAlbumList = ({ Artist }) => {

    const [ AlbumList, setAlbumList] = useState(null);

    useEffect(() => {
        // fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=111492`)
        fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=${Artist.idArtist}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.album);
            setAlbumList(data.album);
        })
        }, [Artist])


    return (
        <>
            { AlbumList &&
                <div>
                    <div className="artist-title">Discography</div>
                    <div className="artist-album-list">
                        { AlbumList.slice(0, 10).map( (album) =>
                            <ArtistAlbum album={ album } /> )
                        }
                    </div>
                </div>
            }
        </>
    );
}

export default ArtistAlbumList;