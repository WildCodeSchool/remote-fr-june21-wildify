import { useEffect, useState } from "react";

const ArtistDetail = () => {

    const [ Artist, setArtist ] = useState(null);
    
    useEffect(() => {
        fetch("https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay")
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
                    <h3>{Artist.strArtist}</h3>
                    <h5>{Artist.strCountry}</h5>
                    <h4>{Artist.strBiographyFR}</h4>
                    <img src={Artist.strArtistThumb} alt={`image of ${Artist.strArtist}`} />
                </div>
            }
            
        </>
    );
}

export default ArtistDetail;