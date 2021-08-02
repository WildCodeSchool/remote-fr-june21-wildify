import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';

import './ExploreCard.css'

const ExploreArtistCard = ({ artist }) => {

  // Reponse Call API TheAudioDb pour img Artist
  const [img, setImg] = useState(null)

  // Call API TheAudioDb pour img Artist
  useEffect(() => {
    const getImgAudioDb = () => {
      fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist.name}`)
      .then((res) => res.json())
      .then((res) => {
        res.artists && setImg(res.artists[0].strArtistThumb);
      })
    }
    artist && getImgAudioDb()
  }, [artist])

return (
  <NavLink to={`/artist/${artist.name}`} >
    <div className="ExploreCard">
      <img src={img ? img : artist.image[2]['#text']} alt={`Img of ${artist.name}`} />
      <h3>{artist.name}</h3>
    </div>
  </NavLink>
)};

export default ExploreArtistCard;
