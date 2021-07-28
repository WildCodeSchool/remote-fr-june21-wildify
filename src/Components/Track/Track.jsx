import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import TrackProfile from './TrackProfile'

import './Track.css';

const Track = () => {

  // const TrackId = '32793500'
  // const ArtistId = '112024'

  // // Reponse du call API
  // const [track, setTrack] = useState([]);
  // const [artist, setArtist] = useState([]);

  // Call API avec Valeur du TrackId
  // useEffect(() => {
  //     fetch(`https://theaudiodb.com/api/v1/json/1/track.php?h=${TrackId}`)
  //     .then(response => response.json())
  //     .then(data => setTrack(data.track[0]))

  //     fetch(`https://theaudiodb.com/api/v1/json/1/artist.php?i=${ArtistId}`)
  //     .then(response => response.json())
  //     .then(data => setArtist(data.artists[0]))
  //   }, [])

  return (
    <div className="Track">
      {/* <TrackProfile track={track} artist={artist} /> */}
    </div>
  );
}

export default Track;