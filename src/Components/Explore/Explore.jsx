import { useEffect, useState } from 'react';
import ArtistCard from './ArtistCard'

import './Explore.css';

const Explore = () => {

  const [search, setSearch] = useState('');
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${search}`)
      .then(response => response.json())
      .then(data => {
        setArtistList(data.artists)
      })
  },[search])

  return (
    <div className="Explore">
      <h2>Search</h2>
      <input type="text" value={search} onChange={event => setSearch(event.target.value)} />

      <div className="CardContainer">
        { artistList === null
          ? <div>Wait...</div>
          : artistList.map((artist) => (
            <ArtistCard artist={artist} />
          ))
        }
      </div>
    </div>
  );
}

export default Explore;