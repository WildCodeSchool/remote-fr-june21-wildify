import React from 'react';
import { useEffect, useState } from 'react';

import ExploreArtistCard from './ExploreArtistCard'
import ExploreAlbumCard from './ExploreAlbumCard'
import ExploreTrackCard from './ExploreTrackCard'

import './Explore.css';

const Explore = () => {
  // Valeur de la recherche dans la barre de recherche
  const [search, setSearch] = useState('');

  // Reponse du call API avec search
  const [artistList, setArtistList] = useState([]);
  const [albumList, setAlbumList] = useState([]);
  const [trackList, setTrackList] = useState([]);

  // Call API avec Valeur du search
  useEffect(() => {
    // const timer = setTimeout(() => {
      const getArtist = () => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`)
          .then(response => response.json())
          .then(data => setArtistList(data.results.artistmatches.artist))
      }
      search && getArtist()

      const getAlbum = () => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`)
          .then(response => response.json())
          .then(data => setAlbumList(data.results))
      }
      search && getAlbum()

      const getTrack = () => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`)
          .then(response => response.json())
          .then(data => setTrackList(data.results))
      }
      search && getTrack()
    // }, 800)
    // return () => clearTimeout(timer)
  },[search])

  return (
    <div className="Explore">
      <h1>Search</h1>
      <input type="text" minLength='1' maxLength="50" value={search} onChange={(event) => {setSearch(event.target.value)}}/>

      {search && <h2>Artist</h2>}
      <div className="ExploreCardContainer">
        {search && !(artistList === null) && artistList.map((artist) => (
            <ExploreArtistCard key={artist.mbid} artist={artist} />
          ))
        }
      </div>

      {search && <h2>Album</h2>}
      <div className="ExploreCardContainer">
        {search && !(albumList === undefined || albumList === null || albumList.length === 0) && albumList.albummatches.album.map((album) => (
            <ExploreAlbumCard key={album.mbid} album={album} />
          ))
        }
      </div>

      {search && <h2>Track</h2>}
      <div className="ExploreCardContainer">
        {search && !(trackList === undefined || trackList === null || trackList.length === 0) && trackList.trackmatches.track.map((track) => (
            <ExploreTrackCard key={track.mbid} track={track} />
          ))
        }
      </div>
    </div>
  );
}

export default Explore;
