import { Link } from 'react-router-dom';

import FavBtn from './star-regular.svg'

import './TrackProfile.css'

const TrackProfile = ({ artist, name, duration, listeners, img, toggleTrackFavoris }) => {
  const toggleFavorite = () => {
    toggleTrackFavoris();
  }
  const timeToSec = time => ((time / 1000) % 60).toFixed(0);

  return (
    <div className="trackProfile">
      <div className="trackContent">
        <div className="trackAvatar">
          <Link to={`/artist/${artist.name}`} >
            <img src={img} alt={`Album img of ${artist.name}}`} />
          </Link>
        </div>
        <div className="trackInfo">
          <Link to={`/artist/${artist.name}`} >
            <h2>{artist.name}</h2>
          </Link>
          <p>Track : {name} </p>
          <p>Durée : {Math.floor(duration / 60000)} min {duration % 60 ? timeToSec(duration) : '00'}</p>
          <p>Nombres d'écoute : {listeners}</p>
          <a href={`https://www.last.fm/music/${artist.name}/_/${name}`} target="_blank" rel="noreferrer">Liens LastFM</a>
          <button className="favoriteBtn" onClick={toggleFavorite}>
            <img src={FavBtn} alt="button fav"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackProfile;
