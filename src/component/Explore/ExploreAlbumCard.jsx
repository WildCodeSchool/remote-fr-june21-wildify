import { Link } from 'react-router-dom'

import imgNotFound from '../../assets/cover-wildify.png'

import './ExploreCard.css'

const ExploreAlbumCard = ({ album }) => (
  <Link to={`/album/${album.name}`} >
    <div className="ExploreCard">
      <img src={album.image[2]['#text'] ? album.image[2]['#text'] : imgNotFound} alt={`Img of ${album.name}`} />
      <h3>{album.name}</h3>
    </div>
  </Link>
  );

export default ExploreAlbumCard;
