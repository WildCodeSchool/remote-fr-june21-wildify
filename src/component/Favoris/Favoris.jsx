import { useEffect, useState } from 'react';
import axios from 'axios';


import './Favoris.css';

const Favoris = () => {
    //     // Reponse du call API avec favoris pour :
    //     // Les Albums
        // const [albumListFav, setAlbumListFav] = useState();
    //     // Les tracks
    //     const [trackListFav, setTrackListFav] = useState();



    // Call API









    return (
        <div className="FavContainer">
            <h1>Mes Favoris</h1>
            <div className="favBlock">
                <div className="blockFav">
                    <h2>Album</h2>
                    {/* une image */}
                    {/* un nom */}
                </div>
                <div className="blockFav">
                    <h2>Track</h2>
                    {/* une image */}
                    {/* un nom */}
                </div>
            </div>
        </div>
    )
}

export default Favoris;