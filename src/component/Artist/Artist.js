import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ArtistAlbums from './ArtistAlbums';
import ArtistBio from './ArtistBio';
import ArtistDetails from './ArtistDetails';

import './Artist.css'

const Artist = () => {
    // Get artist name from url
    const { name } = useParams()

    // Initial states
    const [ artistDB, setArtistDB] = useState([]);
    const [ artistInfo, setArtistInfo ] = useState(null);
    const [ albums, setAlbums ] = useState(null);
    
    useEffect(() => {
        // Get artist from AudioDB API
        const getArtistDB = () => (
            axios
                .get(`https://theaudiodb.com/api/v1/json/1/search.php?s=${name}`)
                .then(response => response.data)
                .then(data => setArtistDB(data.artists[0]))
        );
        getArtistDB();
        // Get artist info from lastFM API
        const getArtistInfo = () => (
            axios
            .get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
            .then(response => response.data)
            .then(data => setArtistInfo(data.artist))
        );
        getArtistInfo();
        // Get artist albums from lastFM API
        const getArtistAlbums = () => (
            axios
                .get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
                .then(response => response.data)
                .then(data => setAlbums(data.topalbums.album))
        );
        getArtistAlbums();
    }, [name])

    // Display artist related components
    return (
        <div className="artistCard">
            <ArtistDetails artist={artistDB} artistInfo={artistInfo}/>
            <ArtistAlbums albums={albums}/>
            <ArtistBio artistInfo={artistInfo}/>
        </div>
    );
}

export default Artist;
