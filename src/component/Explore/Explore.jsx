import { useEffect, useState } from 'react';
import axios from 'axios';
import HorizontalScroll from 'react-scroll-horizontal'

import ExploreArtistCard from './ExploreArtistCard';
import ExploreAlbumCard from './ExploreAlbumCard';
import ExploreTrackCard from './ExploreTrackCard';

import './Explore.css';

const Explore = () => {

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

  // Call API avec Valeur du search.
  useEffect(() => {

      // Call API Artist
      const getArtist = () => {
        axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&api_key=${process.env.REACT_APP_API_KEY}&format=json`
        ).then((results) => {
          setArtistList(results.data.results.artistmatches.artist)
          setLoaderArtist(false)
        })
      }
      search && getArtist();

      // Call API Album
      const getAlbum = () => {
        axios.get(
          `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=${process.env.REACT_APP_API_KEY}&format=json`
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

  return (
    <div className="explore">
      <h1>Search</h1>
      <input type="text" minLength='1' maxLength="50" value={search} onChange={(event) => {setSearch(event.target.value)}}/>

      {/* Affichage des Card Artist */}
      {search &&
      <div className="segment">
        <h2 className="segmentTitle">Artists</h2>
      </div>
      }
      {search && <div className="exploreCardContainer">
        {loaderArtist ? (
          <div>Loading...</div>
        ) : (
          <HorizontalScroll
          reverseScroll = { true }>
            {artistList.map((artist) => (
              <ExploreArtistCard key={artist.mbid} artist={artist} />
            ))}
          </HorizontalScroll>
          )
        }
      </div>}

      {/* Affichage des Card Album */}
      {search &&
        <div className="segment">
        <h2 className="segmentTitle">Albums</h2>
      </div>}
      {search && <div className="exploreCardContainer">
        {loaderAlbum ? (
          <div>Loading...</div>
        ) : (
          <HorizontalScroll
          reverseScroll = { true }>
            {albumList.map((album) => (
            <ExploreAlbumCard key={album.mbid} album={album} />
          ))}
          </HorizontalScroll>
        )
        }
      </div>}

      {/* Affichage des Card Track */}
      {search &&
        <div className="segment">
          <h2 className="segmentTitle">Tracks</h2>
        </div>
      }
      {search && <div className="exploreCardContainer">
        {loaderTrack ? (
          <div>Loading...</div>
        ) : (
          <HorizontalScroll
          reverseScroll = { true }>
            {trackList.map((track) => (
            <ExploreTrackCard key={track.mbid} track={track} />
          ))}
          </HorizontalScroll>
        )
        }
      </div>}

    </div>
  );
}

export default Explore;
