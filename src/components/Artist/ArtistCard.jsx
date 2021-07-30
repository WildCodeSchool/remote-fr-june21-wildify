import { useEffect, useState } from "react";
import axios from 'axios';

import ArtistAlbums from "./ArtistAlbums";
import ArtistBiography from './ArtistBiography';
import ArtistProfile from './ArtistProfile';

import './ArtistCard.css'

const ArtistCard = ({ artistId }) => {

    // Get artist lastFM
    const [ artist, setArtist ] = useState(null);
        useEffect(() => {
        axios
        .get(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistId}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
        .then(response => response.data)
        .then(data => {
            setArtist(data.results.artistmatches.artist[0]);
        })
    }, [artistId])

        // Get artist Audio DB
    const [ artistDB, setArtistDB] = useState(null);
    useEffect(() => {
        axios
        .get(`https://theaudiodb.com/api/v1/json/1/search.php?s=${artistId}`)
        .then(response => response.data)
        .then(data => {
            setArtistDB(data.artists[0]);
        })
    }, [artistId])

    // Get artist info last FM
    const [ artistInfo, setArtistInfo ] = useState(null);
    useEffect(() => {
        axios
        .get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistId}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
        .then(response => response.data)
        .then(data => {
            setArtistInfo(data.artist);
            })
    }, [artistId])

    // Get artist top albums
    // artist = artistId

    return (
        <>
        { artist && 
            <div>
                <ArtistProfile artist={artistDB}/>
                {/* <ArtistAlbums artist={artistDB}/> */}
                <ArtistAlbums artist={artistId}/>
            </div>
        }
        {artistInfo &&
            <div>
                <ArtistBiography artist={artistInfo}/>
            </div>
        }
        </>
    );
}

export default ArtistCard;
