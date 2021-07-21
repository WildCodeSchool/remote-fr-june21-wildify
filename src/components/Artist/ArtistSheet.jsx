import { useEffect, useState } from "react";
import ArtistAlbumList from "./ArtistAlbumList";
import ArtistBiography from './ArtistBiography';

import '../style/ArtistSheet.css'

const ArtistSheet = () => {

    const [ Artist, setArtist ] = useState(null);
    
    useEffect(() => {
        fetch("https://theaudiodb.com/api/v1/json/1/search.php?s=Britney Spears")
        .then(response => response.json())
        .then(data => {
            console.log(data.artists[0]);
            setArtist(data.artists[0]);
        })
        }, [])

    return (
        <>
            { Artist &&
                <div>
                    <div className="artist-title">Artist Page</div>
                    <div className="artist-sheet">
                        <img src={Artist.strArtistThumb} alt={`image of ${Artist.strArtist}`} />
                        <div>
                            <h2>{Artist.strArtist}</h2>
                            <p>{Artist.strCountry} ({Artist.strCountryCode})</p>
                        </div>
                        {/* <div className="artist-bio">{Artist.strBiographyFR}</div> */}
                    </div>
                    <ArtistAlbumList Artist={Artist}/>
                    <ArtistBiography Artist={Artist}/>
                </div>
            }
            
        </>
    );
}

export default ArtistSheet;