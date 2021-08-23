import { useEffect, useState } from "react";
import axios from 'axios';

import HomeArtistCard from "./HomeArtistCard";
import HomeTrackCard from "./HomeTrackCard";

import './Home.css'

const Home = () => {
    // Initial States
    const [topArtists, setTopArtists] = useState([]);
    const [topTracks, setTopTracks] = useState([]);
    const [loader1, setLoader1] = useState(true);
    const [loader2, setLoader2] = useState(true);
    
    useEffect(() => {
    // Get Top 50 artists from lastFM
    const getTopArtists = () => {
        axios
            .get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
            .then(response => { 
                setLoader1(false)
                setTopArtists(response.data.artists.artist)
            })
    }
    getTopArtists()

    // Get Top 50 tracks from lastFM
    const getTopTracks = () => {
        axios
            .get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
            .then(response => { 
                setLoader2(false)
                setTopTracks(response.data.tracks.track)
            })
    }
    getTopTracks()

    }, [])

    return (
        <div>
            {/* {console.log('Top Artists', topArtists)} */}
            <div className = "homeTitle">Top 10 Artists</div>
            {loader1
                ? <div>Loading...</div>
                : <div className = "homeTop">
                    {topArtists
                        .slice(0, 10) //limit to 10 results
                        .map( (topArtist, index) =>
                            <div className = "homeTopArtistCard" >
                                <HomeArtistCard key={index} topArtist={topArtist}/>
                            </div>
                    )}
                </div>
            }
            {/* {console.log('Top Tracks', toptracks)} */}
            <div className = "homeTitle">Top 10 Tracks</div>
            {loader2
                ? <div>Loading...</div>
                : <div className = "homeTop">
                    {topTracks
                        .slice(0, 10) //limit to 10 results
                        .map( (topTrack, index) =>
                            <div className = "homeTopTrackCard" >
                                <HomeTrackCard key={index} topTrack={topTrack}/>
                            </div>
                    )}
                </div>
            }
        </div>
    );
}

export default Home;
