import { NavLink } from 'react-router-dom';

import './ExploreCard.css'

const ExploreTrackCard = ({ track }) => (
  <NavLink to={`/track/${track.name}/${track.artist}`}>
    <div className="ExploreCard">
      <img src={track.image[2]['#text']} alt={`Img of ${track.name}`} />
      <h3>{track.name}</h3>
    </div>
  </NavLink>
  );

export default ExploreTrackCard;