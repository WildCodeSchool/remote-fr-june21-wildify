import { Link } from 'react-router-dom'

import './ExploreCard.css'

const ExploreAlbumCard = ({ album }) => (
  <Link to={`/album/${album.name}`} >
    <div className="ExploreCard">
      <img src={album.image[2]['#text'] ? album.image[2]['#text'] : `https://i.ibb.co/fD8vLPB/no-cover-ter.png`} alt={`Img of ${album.name}`} />
      <h3>{album.name}</h3>
    </div>
  </Link>
  );

export default ExploreAlbumCard;
