import { NavLink } from 'react-router-dom';
import './ExploreCard.css'

const ExploreArtistCard = ({ artist }) => (
  <NavLink to={`/artist/${artist.name}`} >
    <div className="ExploreCard">
      <img src={artist.image[2]['#text']} alt={`Img of ${artist.name}`} />
      <h>{artist.name}</h>
    </div>
  </NavLink>
  );
export default ExploreArtistCard;