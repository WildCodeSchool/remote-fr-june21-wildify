import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import './ExploreCard.css'

const ExploreTrackCard = ({ track }) => {

  // Reponse Call API TheAudioDb pour img Artist
  const [img, setImg] = useState(null)

  // Call API TheAudioDb pour img Artist
  useEffect(() => {
    const getImgAudioDb = () => {
      track && fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${track.artist}`)
      .then((res) => res.json())
      .then((res) => {
        res.artists && setImg(res.artists[0].strArtistThumb);
      })
    }
    track && getImgAudioDb()
  }, [track])


  return (
  <Link to={`/track/${track.name}/${track.artist}`}>
    <div className="ExploreCard">
      <img src={img ? img : `https://i.ibb.co/fD8vLPB/no-cover-ter.png`} alt={`Img of ${track.name}`} />
      <h3>{track.name}</h3>
    </div>
  </Link>
  )};

export default ExploreTrackCard;
