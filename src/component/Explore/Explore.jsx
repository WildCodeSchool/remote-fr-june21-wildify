import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import ExploreArtistCard from './ExploreArtistCard'
import ExploreAlbumCard from './ExploreAlbumCard'
import ExploreTrackCard from './ExploreTrackCard'

import './Explore.css';

const Explore = () => {

  // Valeur de la recherche dans la barre de recherche.
  const [search, setSearch] = useState('');

  // Reponse du call API avec search pour les Artists, Albums et tracks.
  const [artistList, setArtistList] = useState(null);
  const [loaderArtist, setLoaderArtist] = useState(true);

  const [albumList, setAlbumList] = useState(null);
  const [loaderAlbum, setLoaderAlbum] = useState(true);

  const [trackList, setTrackList] = useState(null);
  const [loaderTrack, setLoaderTrack] = useState(true);

  // Call API avec Valeur du search.
  useEffect(() => {

      // Call API Artist
      const getArtist = async () => {
        const results = await axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`
        )
          setArtistList(results.data.results.artistmatches.artist)
          setLoaderArtist(false)
      }
      search && getArtist()

      // Call API Album
      const getAlbum = async () => {
        const results = await axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`
        )
          setAlbumList(results.data.results.albummatches.album)
          setLoaderAlbum(false)
      }
      search && getAlbum()

      // Call API Track
      const getTrack = async () => {
        const results = await axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`
        )
        setTrackList(results.data.results.trackmatches.track)
        setLoaderTrack(false)
      }
      search && getTrack()
  },[search])

  return (
    <div className="Explore">
      <h1>Search</h1>
      <input type="text" minLength='1' maxLength="50" value={search} onChange={(event) => {setSearch(event.target.value)}}/>

      {/* Affichage des Card Artist */}
      {search && <h2>Artist</h2>}
      <div className="ExploreCardContainer">
        {search && !(artistList === null) && artistList.map((artist) => (
            <ExploreArtistCard key={artist.mbid} artist={artist} />
          ))
        }
      </div>

      {/* Affichage des Card Album */}
      {search && <h2>Album</h2>}
      <div className="ExploreCardContainer">
        {search && !(albumList === null) && albumList.map((album) => (
            <ExploreAlbumCard key={album.mbid} album={album} />
          ))
        }
      </div>

      {/* Affichage des Card Track */}
      {search && <h2>Track</h2>}
      <div className="ExploreCardContainer">
        {search && !(trackList === null) && trackList.map((track) => (
            <ExploreTrackCard key={track.mbid} track={track} />
          ))
        }
      </div>

    </div>
  );
}

export default Explore;
