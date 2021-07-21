import { useEffect, useState } from "react";
import '../style/ArtistSheet.css'

const ArtistSheet = () => {

    const [ Artist, setArtist ] = useState(null);
    
    useEffect(() => {
        fetch("https://theaudiodb.com/api/v1/json/1/search.php?s=Michael Jackson")
        .then(response => response.json())
        .then(data => {
            console.log(data.artists[0]);
            setArtist(data.artists[0]);
        })
        }, [])

    return (
        <>
            { Artist &&
                <div className="artist-sheet">
        
                    <img src={Artist.strArtistThumb} alt={`image of ${Artist.strArtist}`} />
                    <div>
                        <h2>{Artist.strArtist}</h2>
                        <p>{Artist.strCountry} ({Artist.strCountryCode})</p>
                    </div>
                </div>
            }
            
        </>
    );
}

export default ArtistSheet;