import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TrackProfile from './TrackProfile'

import './Track.css';

const Track = () => {

  const { artistName, trackName } = useParams()
  console.log('trackName:', trackName)
  console.log('artistName:', artistName)

  const [track, setTrack] = useState([])
  console.log('track:', track)

  useEffect(() => {
    const getTrack = () => {
      fetch(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process.env.REACT_APP_API_KEY}&artist=${artistName}&track=${trackName}&format=json`)
        .then((res) => res.json())
        .then((res) => {
          console.log('res : ', res)
          setTrack(res)
        })
    }
    getTrack()
  },[])

  return (
    <div className="Track">
      <TrackProfile track={track} />
    </div>
  );
}

export default Track;
