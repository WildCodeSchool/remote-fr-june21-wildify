import React from 'react';
import { Link } from 'react-router-dom';

import './MyAlbum.css'

const MyAlbum = ({ album }) => {
    return (
        // Data from lastFM
        album.name !== "(null)" && // remove albums with title = (null)
        <div className="artistAlbum">
            <Link to={`/album/${album.name}/${album.artist.name}`}> 
            {album.image[3]['#text']
                ? <img src={album.image[3]['#text']} alt={album.name}/>
                : <img src={"https://i.ibb.co/fD8vLPB/no-cover-ter.png"} alt={"Wildify3DCover"}/>
            }
            <p>{album.name}</p>
        </Link>
        </div>
    );
}

export default MyAlbum;
