import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import TrackProfile from './TrackProfile'
import TrackLyrics from './TrackLyrics';
import imgNotFound from '../../assets/cover-wildify.png'

import './Track.css';

const Track = () => {

  const { artistName, trackName } = useParams()

  const [track, setTrack] = useState(null)
  const [loaderTrack, setLoaderTrack] = useState(true)

  const [imgAudioDb, setImgAudioDb] = useState(null)

  const [lyrics, setLyrics] = useState(null)
  const [loaderLyric, setLoaderLyric] = useState(true)


  useEffect(() => {
    const getTrack = () => {
        axios.get(
        `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process.env.REACT_APP_API_KEY}&artist=${artistName}&track=${trackName}&format=json`
      ).then((results) => {
        setTrack(results.data.track)
        setLoaderTrack(false)
      })
    }
    getTrack()
  },[artistName, trackName])

  useEffect(() => {

    // Get Image Artist
    const getImgAudioDb = () => {
      axios.get(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${track.artist.name}`
      ).then((results) => {
        setImgAudioDb(results.data.artists[0].strArtistThumb)
      })
    }
    track && getImgAudioDb()

    // Get Lyrics
    const getLyrics = () => {
      //https://cors-anywhere.herokuapp.com/ a valider avant d'utiliser.
      axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_mbid=${track.mbid}&apikey=${process.env.REACT_APP_API_KEY_MUSIXMATCH}`
      )
      .then((results) => {
        console.log('Lyric : ', results.data);
        results.data.message.body.lyrics ?
          setLyrics(results.data.message.body.lyrics.lyrics_body) || setLoaderLyric(false)
          : setLyrics('Lyrics not found...') || setLoaderLyric(false)
      })
    }
    track && getLyrics()

  }, [track])

  return (
    <div className="track">
      {loaderTrack ? (
        <div>Loading...</div>
      ) : (
        <TrackProfile {...track} img={imgAudioDb ? imgAudioDb : imgNotFound}/>
        )}
        {loaderLyric ? (
          <div>Loading...</div>
        ) : (
          <TrackLyrics lyrics={lyrics}/>
          )}
    </div>
  );
}

export default Track;
