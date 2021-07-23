import { useEffect, useState } from 'react';

import ExploreArtistCard from './ExploreArtistCard'

import './Explore.css';

const Explore = ({ selectArtist }) => {

  // Valeur de la recherche dans la barre de recherche
  const [search, setSearch] = useState('');

  // Reponse du call API avec search
  const [artistList, setArtistList] = useState([]);

  // Call API avec Valeur du search
  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${search}`)
      .then(response => response.json())
      .then(data => setArtistList(data.artists))
  },[search])

  return (
    <div className="Explore">
      <h2>Search</h2>
      <input type="text" value={search} onChange={event => setSearch(event.target.value)} />

      <div className="ExploreCardContainer">
        { artistList === null
          ? <div>Wait...</div>
          : artistList.map((artist) => (
            <ExploreArtistCard key={artist.idArtist} artist={artist}  selectArtist={selectArtist} />
          ))
        }
      </div>
    </div>
  );
}

export default Explore;
