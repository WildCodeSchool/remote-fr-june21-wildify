import { Link } from 'react-router-dom'

import imgNotFound from '../../assets/cover-wildify.png'

import './ExploreCard.css'

const ExploreAlbumCard = ({ album }) => {

const child = { width: `10em`, height: `100%`}

return (
  <Link to={`/album/${album.name}/${album.artist}`} style={child}>
    <div className="exploreCard">
      <img src={album.image[2]['#text'] ? album.image[2]['#text'] : imgNotFound} alt={`Img of ${album.name}`} />
      <h3>{album.name}</h3>
    </div>
  </Link>
)};

export default ExploreAlbumCard;
