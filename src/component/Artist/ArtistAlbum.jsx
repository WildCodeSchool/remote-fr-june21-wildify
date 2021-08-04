import React from 'react';
import { NavLink } from 'react-router-dom';

import './ArtistAlbum.css'

const ArtistAlbum = ({ album }) => {
    return (
        // Data from lastFM
        album.name !== "(null)" && // remove albums with title = (null)
        <div className="artistAlbum">
            <NavLink to={`/album/${album.name}/${album.artist.name}`}> 
            {album.image[3]['#text']
                ? <img src={album.image[3]['#text']} alt={album.name}/>
                : <img src={"https://i.ibb.co/fD8vLPB/no-cover-ter.png"} alt={"Wildify3DCover"}/>
            }
            <p>{album.name}</p>
        </NavLink>
        </div>
    );
}

export default ArtistAlbum;
