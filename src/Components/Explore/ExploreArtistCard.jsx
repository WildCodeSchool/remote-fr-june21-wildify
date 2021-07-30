import React from 'react';
import { NavLink } from 'react-router-dom';

import './ExploreCard.css'

const ExploreArtistCard = ({ artist }) => (
  <NavLink to={`/artist/${artist.name}`} >
    <div className="ExploreCard">
      <img src={artist.image[2]['#text']} alt={`Img of ${artist.name}`} />
      <h3>{artist.name}</h3>
    </div>
  </NavLink>
  );

export default ExploreArtistCard;
