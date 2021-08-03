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
    const getTrack = async () => {
      const results = await axios.get(
        `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process.env.REACT_APP_API_KEY}&artist=${artistName}&track=${trackName}&format=json`
      )
        setTrack(results.track)
        setLoaderTrack(false)
    }
    getTrack()
  },[artistName, trackName])

  useEffect(() => {

    // Get Image Artist
    const getImgAudioDb = async () => {
      const results = await axios.get(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${track.artist.name}`
      )
      results ? setImgAudioDb(results.artists[0].strArtistThumb)
      : setImgAudioDb(imgNotFound)
    }
    track && getImgAudioDb()

    // Get Lyrics
    const getLyrics = async () => {
      //https://cors-anywhere.herokuapp.com/ a valider avant d'utiliser.
      const results = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_mbid=${track.mbid}&apikey=${process.env.REACT_APP_API_KEY_MUSIXMATCH}`
      )
        results ? setLyrics(results.message.body.lyrics.lyrics_body)
          : setLyrics('Lyrics not found...')
        setLoaderLyric(false)
    }
    track && getLyrics()

  }, [track])

  return (
    <div className="Track">
      {loaderTrack ? (
        <div>Loading...</div>
      ) : (
        <TrackProfile {...track} img={imgAudioDb}/>
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
