import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import imgNotFound from '../../assets/cover-wildify.png'

import './ExploreCard.css'

const ExploreTrackCard = ({ track }) => {

  // Reponse Call API TheAudioDb pour img Artist
  const [img, setImg] = useState(null)

  // Call API TheAudioDb pour img Artist
  useEffect(() => {
    const getImgAudioDb = () => {
      axios.get(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${track.artist}`
      ).then((results) => {
        results.data.artists && setImg(results.data.artists[0].strArtistThumb)
      })
    }
    track && getImgAudioDb()
  }, [track])

  const child = { width: `10em`}

  return (
  <Link to={`/track/${track.name}/${track.artist}`} style={child}>
    <div className="exploreCard">
      <img src={img ? img : imgNotFound} alt={`Img of ${track.name}`} />
      <h3>{track.name}</h3>
    </div>
  </Link>
  )};

export default ExploreTrackCard;
