import { NavLink } from 'react-router-dom'
import './ExploreCard.css'


const ExploreAlbumCard = ({ album }) => (
  <NavLink to={`/album/${album.name}`} >
    <div className="ExploreCard">
      <img src={album.image[2]['#text']} alt={`Img of ${album.name}`} />
      <h3>{album.name}</h3>
    </div>
  </NavLink>
  );

export default ExploreAlbumCard;