import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ExploreArtistCard from './ExploreArtistCard'
import ExploreAlbumCard from './ExploreAlbumCard'
import ExploreTrackCard from './ExploreTrackCard'

import './Explore.css';

const Explore = ({ selectArtist, selectAlbum, selectTrack}) => {
  // Valeur de la recherche dans la barre de recherche
  const [search, setSearch] = useState('');

  // Reponse du call API avec search
  const [artistList, setArtistList] = useState([]);
  const [albumList, setAlbumList] = useState([]);
  const [trackList, setTrackList] = useState([]);

  // Call API avec Valeur du search
  useEffect(() => {
    // const timer = setTimeout(() => {
      search && fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`)
      .then(response => response.json())
      .then(data => setArtistList(data.results.artistmatches.artist))

      search && fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`)
      .then(response => response.json())
      .then(data => setAlbumList(data.results))

      search && fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`)
      .then(response => response.json())
      .then(data => setTrackList(data.results))
    // }, 800)
    // return () => clearTimeout(timer)
  },[search])

  return (
    <div className="Explore">
      <h1>Search</h1>
      <input type="text" minLength='1' maxlength="50" value={search} onChange={(event) => {setSearch(event.target.value)}}/>

      <h2>Artist</h2>
      <div className="ExploreCardContainer">
        { !(artistList === null) && artistList.map((artist, index) => (
            <NavLink to="/artist"><ExploreArtistCard key={index} artist={artist}  selectArtist={selectArtist} /></NavLink>
          ))
        }
      </div>

      <h2>Album</h2>
      <div className="ExploreCardContainer">
        { !(albumList === undefined || albumList === null || albumList.length === 0) && albumList.albummatches.album.map((album, index) => (
            <NavLink to="/album"><ExploreAlbumCard key={index} album={album}  selectAlbum={selectAlbum} /></NavLink>
          ))
        }
      </div>

      <h2>Track</h2>
      <div className="ExploreCardContainer">
        {!(trackList === undefined || trackList === null || trackList.length === 0) && trackList.trackmatches.track.map((track, index) => (
            <NavLink to="/track"><ExploreTrackCard key={index} track={track}  selectTrack={selectTrack} /></NavLink>
          ))
        }
      </div>
    </div>
  );
}

export default Explore;
