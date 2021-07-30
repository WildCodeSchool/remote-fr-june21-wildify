import React from 'react';
import { NavLink } from 'react-router-dom';

import './ArtistAlbum.css'

const ArtistAlbum = ({ album }) => {
    return (
        // With audioDB
        // <div className="artistAlbum">
        //     <NavLink to={`/album/${album.strAlbum}`}>
        //     {album.strAlbumThumb
        //         ? <img src={album.strAlbumThumb} alt={`Cover ${album.strAlbum}`}/>
        //         : <img src={"https://i.ibb.co/fD8vLPB/no-cover-ter.png"} alt={"Wildify3DCover"}/>
        //     }
        //     <p>{album.strAlbum} ({album.intYearReleased})</p>
        // </NavLink>
        // /</div>
        
        // With lastFM
        album.name !== "(null)" && // remove albums with title = (null)
        <div className="artistAlbum">
            <NavLink to={`/album/${album.name}`}> 
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
