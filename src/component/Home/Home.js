import { useEffect, useState } from "react";
import axios from 'axios';

const Home = () => {
    const [topArtists, settopArtists] = useState([]);
    const [loader, setLoader] = useState(true)
    
    useEffect(() => {
        const getData = () => {
            axios
            .get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
            .then(response => { 
                setLoader(false)
                setTopArtists(response.data.artists.artist)
            })
        }
        getData()   
    }, [])

    return (
        <div>
{console.log('Top Artists', topArtists)}
            <h2>Home</h2>
             {
                loader ? <div>Loading...</div> :
                    <div>{topArtists.map(topArtist => <div>
                        <p>{topArtist.name}</p>
                        <img src={topArtist.image[3].['#text']} />
                    </div>)}</div>
            } 
        </div>
    );
}

export default Home;
