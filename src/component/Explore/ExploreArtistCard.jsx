import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import imgNotFound from '../../assets/cover-wildify.png'

import './ExploreCard.css'

const ExploreArtistCard = ({ artist }) => {

  // Reponse Call API TheAudioDb pour img Artist
  const [img, setImg] = useState(null)

  // Call API TheAudioDb pour img Artist
  useEffect(() => {
    const getImgAudioDb = () => {
      axios.get(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist.name}`
      ).then((results) => {
        results.data.artists && setImg(results.data.artists[0].strArtistThumb)
      })
    }
    artist && getImgAudioDb()
  }, [artist]);

  const child = { width: `10em`}

return (
  <Link to={`/artist/${artist.name}`} style={child}>
    <div className="exploreCard">
      <img src={img ? img : imgNotFound} alt={`Img of ${artist.name}`} />
      <h3>{artist.name}</h3>
    </div>
  </Link>
)};

export default ExploreArtistCard;
