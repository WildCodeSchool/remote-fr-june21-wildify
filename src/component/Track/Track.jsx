import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TrackProfile from './TrackProfile'

import './Track.css';

const Track = () => {

  // https://coverartarchive.org/release/08f54f68-7c89-4e22-8a0f-ac2b06e48568

  const { artistName, trackName } = useParams()

  const [track, setTrack] = useState(null)
  const [imgAudioDb, setImgAudioDb] = useState(null)

  useEffect(() => {
    const getTrack = () => {
      fetch(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process.env.REACT_APP_API_KEY}&artist=${artistName}&track=${trackName}&format=json`)
        .then((res) => res.json())
        .then((res) => {
          setTrack(res.track)
        })
    }
    getTrack()
  },[artistName, trackName])

  useEffect(() => {
    const getImgAudioDb = () => {
      fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${track.artist.name}`)
      .then((res) => res.json())
      .then((res) => {
        setImgAudioDb(res.artists[0].strArtistThumb);
      })
    }
    track && getImgAudioDb()
  }, [track])

  return (
    <div className="Track">
      {track && <TrackProfile track={track} img={imgAudioDb}/>}
    </div>
  );
}

export default Track;
