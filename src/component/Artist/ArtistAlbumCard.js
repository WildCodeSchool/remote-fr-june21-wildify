import React from 'react';
import { Link } from 'react-router-dom';

const ArtistAlbumCard = ({ album }) => {
    return (
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

export default ArtistAlbumCard;
