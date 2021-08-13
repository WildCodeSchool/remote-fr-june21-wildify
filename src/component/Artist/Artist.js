import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ArtistAlbums from './ArtistAlbums';
import ArtistBio from './ArtistBio';
import ArtistDetails from './ArtistDetails';
import ArtistSimilar from './ArtistSimilar';
import ArtistTracks from './ArtistTracks';

import './Artist.css'

const Artist = () => {
    // Get artist name from url
    const { name } = useParams()

    // Hook states
    const [ albums, setAlbums ] = useState(null);
    const [ artistDB, setArtistDB] = useState([]);
    const [ artistInfo, setArtistInfo ] = useState(null);
    const [ similarArtists, setSimilarArtists ] = useState(null);
    const [ tracks, setTracks ] = useState(null);
    
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
        // Get artist top albums from lastFM API
        const getArtistAlbums = () => (
            axios
                .get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
                .then(response => response.data)
                .then(data => setAlbums(data.topalbums.album))
        );
        getArtistAlbums();
        // Get artist top tracks from lastFM API
        const getArtistTracks = () => (
            axios
                .get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
                .then(response => response.data)
                .then(data => setTracks(data.toptracks.track))
        );
        getArtistTracks();
         // Get similar artists from lastFM API
        const getSimilarArtists= () => (
            axios
                .get(`https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
                .then(response => response.data)
                .then(data => setSimilarArtists(data.similarartists.artist))
        );
        getSimilarArtists();
    }, [name])

    // Display artist-related components
    return (
        <div className="artistCard">
            <ArtistDetails artist={artistDB} artistInfo={artistInfo}/>
            <ArtistBio artistInfo={artistInfo}/>
            <ArtistAlbums albums={albums}/>
            <ArtistTracks tracks={tracks}/>
            <ArtistSimilar similarArtists={similarArtists}/>
        </div>
    );
}

export default Artist;
