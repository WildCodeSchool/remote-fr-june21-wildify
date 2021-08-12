// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

// import imgNotFound from '../../assets/cover-wildify.png'

const HomeTrackCard = ({topTrack}) => {

    return (
        <div className = "homeTopCard" >
            <Link to={`/track/${topTrack.name}`}> 
                <p>{topTrack.name}</p>
                <img src={topTrack.image[3]['#text']} alt="top Tracks"/>
            </Link>
        </div>
    );
}

export default HomeTrackCard;