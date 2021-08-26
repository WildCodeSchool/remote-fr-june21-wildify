import { useEffect, useState} from 'react';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExploreArtistCard from './ExploreArtistCard';
import ExploreAlbumCard from './ExploreAlbumCard';
import ExploreTrackCard from './ExploreTrackCard';
// import useFavoris from '../Favoris/Favoris';

import './Explore.css';

const Explore = ({fav}) => {

  // Valeur de la recherche dans la barre de recherche.
  const [search, setSearch] = useState('');

  // Reponse du call API avec search pour :
  // Les Artists
  const [artistList, setArtistList] = useState(null);
  const [loaderArtist, setLoaderArtist] = useState(true);
  // Les Albums.
  const [albumList, setAlbumList] = useState(null);
  const [loaderAlbum, setLoaderAlbum] = useState(true);
  // Les tracks
  const [trackList, setTrackList] = useState(null);
  const [loaderTrack, setLoaderTrack] = useState(true);
  // Les favoris
  // const [favorisOnly, setFavorisOnly] = useState(false);
  // const [artistFavoris, toggleArtistFavoris] = useFavoris();
  // const [favorisState, setFavorisState] = useState(fav);

  // Call API avec Valeur du search.
  useEffect(() => {

      // Call API Artist
      const getArtist = () => {
        axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`
        ).then((results) => {
          setArtistList(results.data.results.artistmatches.artist)
          setLoaderArtist(false)
        })
      }
      search && getArtist();

      // Call API Album
      const getAlbum = () => {
        axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`
        ).then((results) => {
          setAlbumList(results.data.results.albummatches.album)
          setLoaderAlbum(false)
        })
      }
      search && getAlbum();

      // Call API Track
      const getTrack = () => {
        axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=${process.env.REACT_APP_API_KEY}&limit=16&format=json`
        ).then((results) => {
          setTrackList(results.data.results.trackmatches.track)
          setLoaderTrack(false)
        })
      }
      search && getTrack();
  },[search]);

// Favoris
  // useEffect(() => {
  //   setFavorisState(fav.filter((s) => (favorisOnly ? favoris.includes(s.id) : s)));
  // }, [fav, favorisOnly, favoris]);

  
    return (
    <div className="explore">
      <h1>Search</h1>
      <input type="text" minLength='1' maxLength="50" value={search} onChange={(event) => {setSearch(event.target.value)}}/>

      {/* Affichage des Card Artist */}
      <div className="ExploreBanner">
      {search && <h2>Artists</h2>}
        <i className="svg-inline--fa fa-podcast fa-w-14"></i>
      </div>
      {search && <div className="exploreCardContainer">
        {loaderArtist ? (
          <div>Loading...</div>
        ) : (
            artistList.map((artist) => (
            <ExploreArtistCard key={artist.mbid} artist={artist} />
            ))
        )
        }
      </div>}

      {/* Affichage des Card Album */}
      {search && <h2>Album</h2>}
      {search && <div className="exploreCardContainer">
        {loaderAlbum ? (
          <div>Loading...</div>
        ) : (
            albumList.map((album) => (
                // <div key={fav.id} className={`user ${isFavoris ? "favoris" : ""}`}>
                  <ExploreAlbumCard key={album.mbid} album={album} />
                  // {/* <button onClick={toggleFavoris(fav.id)}>{favoris.includes(fav.id) ? "Remove from bookmarks" : "Add to bookmarks"}</button> */}
                // </div>
          ))
        )
        }
      </div>}

      {/* Affichage des Card Track */}
      {search && <h2>Track</h2>}
      {search && <div className="exploreCardContainer">
        {loaderTrack ? (
          <div>Loading...</div>
        ) : (
            trackList.map((track) => (
            <ExploreTrackCard key={track.mbid} track={track} />
          ))
        )
        }
      </div>}

    </div>
  );
}

export default Explore;
