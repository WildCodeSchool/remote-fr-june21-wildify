import { useEffect, useState } from "react";
import axios from 'axios';

import ArtistAlbums from "./ArtistAlbums";
import ArtistBiography from './ArtistBiography';
import ArtistProfile from './ArtistProfile';

import './ArtistCard.css'

const ArtistCard = ({ artistId }) => {

    // Get artist
    const [ artist, setArtist ] = useState(null);
        useEffect(() => {
            axios
            .get(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistId}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
            .then(response => response.data)
            .then(data => {
                // console.log(data.results.artistmatches.artist);
                setArtist(data.results.artistmatches.artist[0]);
            })
        }, [artistId])

    // Get artist info
    const [ artistInfo, setArtistInfo ] = useState(null);
        useEffect(() => {
            axios
            .get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistId}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
            .then(response => response.data)
            .then(data => {
                // console.log(data.artist);
                setArtistInfo(data.artist);
            })
        }, [artistId])

        // Get artist Audio DB
    const [ artistDB, setArtistDB] = useState(null);
    useEffect(() => {
        axios
        .get(`https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay`)
        .then(response => response.data)
        .then(data => {
            console.log(data);
            setArtistDB(data.artists[0]);
        })
    }, [artistId])

    return (
        <>
        { artist && 
            <div>
                {/* <div>{artist.name}</div> */}
                <ArtistProfile artist={artistDB}/>
                <ArtistAlbums artist={artistDB}/>
            </div>
        }
        {artistInfo &&
            <div>
                {/* <div>{artistInfo.name}</div> */}
                {/*<ArtistBiography artist={artist}/> */}
            </div>
        }
        </>
    );
}

export default ArtistCard;