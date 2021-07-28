import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import TrackProfile from './TrackProfile'

import './Track.css';

const Track = () => {

  const TrackId = '32793500'
  const ArtistId = '112024'

  // Reponse du call API
  const [track, setTrack] = useState([]);
  const [artist, setArtist] = useState([]);

  // Call API avec Valeur du TrackId
  useEffect(() => {
      fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
      .then(response => response.json())
      .then(data => console.log('Artist : ' + data))

      fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
      .then(response => response.json())
      .then(data => console.log('Album : ' + data))

      fetch(`http://ws.audioscrobbler.com/2.0/??method=track.search&track=Believe&api_key=${process.env.REACT_APP_API_KEY}&format=json`)
      .then(response => response.json())
      .then(data => console.log('Track ' + data))
    }, [])

  return (
    <div className="Track">
      {/* <TrackProfile track={track} artist={artist} /> */}
    </div>
  );
}

export default Track;