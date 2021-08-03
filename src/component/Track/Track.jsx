import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TrackProfile from './TrackProfile'

import './Track.css';
import TrackLyrics from './TrackLyrics';

const Track = () => {

// REACT_APP_API_KEY_MUSIXMATCH  https://api.musixmatch.com/ws/1.1/  track.lyrics.get?track_mbid musicbrainz recording or track id  q_lyricssearch for a text string among lyrics  f_lyrics_languageFilter the tracks by lyrics language
// https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_mbid=${trackMbib}&apikey=${process.env.REACT_APP_API_KEY_MUSIXMATCH}


  const { artistName, trackName } = useParams()

  const [track, setTrack] = useState(null)
  const [imgAudioDb, setImgAudioDb] = useState(null)
  const [lyrics, setLyrics] = useState(null)
  console.log('lyrics:', lyrics)
  const [loading, setLoading] = useState(true)

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

    const getLyrics = () => {
      //https://cors-anywhere.herokuapp.com/ a valider avant d'utiliser.
      fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_mbid=${track.mbid}&apikey=${process.env.REACT_APP_API_KEY_MUSIXMATCH}`)
      .then((res) => res.json())
      .then((res) => {
        res && setLyrics(res.message.body.lyrics.lyrics_body)
      })
    }
    track && getLyrics()

  }, [track])

  return (
    <div className="Track">
      {track && <TrackProfile track={track} img={imgAudioDb}/>}
      {lyrics && <TrackLyrics lyrics={lyrics}/>}
    </div>
  );
}

export default Track;
