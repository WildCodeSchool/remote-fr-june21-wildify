import { useEffect, useState } from "react";
import axios from 'axios';


const Home = () => {
    // const [topAlbums, setTopAlbums] = useState([]);
    const [topAlbums, settopAlbums] = useState([]);
    const [loader, setLoader] = useState(true)
    
    useEffect(() => {
        const getData = () => {
            axios
            .get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
            .then(response => { 
                setLoader(false)
                settopAlbums(response.data.artists.artist)
            })
        }
        getData()   
    }, [])

    return (
        <div>
{console.log('topAlbums02', topAlbums)}
            <h2>Home</h2>
             {
                loader ? <div>Loading...</div> :
                    <div>{topAlbums.map(elem => <div>
                        <p>{elem.name}</p>
                        <img src={elem.image[1].['#text']} />
                    </div>)}</div>
            } 
        </div>
    );
}

export default Home;