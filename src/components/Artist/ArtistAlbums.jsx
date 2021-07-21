import { useEffect, useState } from "react";

const ArtistAlbums = (Artist) => {

    const [ Albums, setAlbums] = useState(null);
    
    useEffect(() => {
        fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=${Artist.idArtist}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.album);
            setAlbums(data.album);
        })
        }, [])


    return (
        <>

            { Albums &&
                <div>
                    <h3>{Albums[0].strAlbum} ({Albums[0].intYearReleased})</h3>
                    <h3>{Albums[1].strAlbum}</h3>
                    <h3>{Albums[2].strAlbum}</h3>
                </div>
            }

            
        </>
    );
}

export default ArtistAlbums;