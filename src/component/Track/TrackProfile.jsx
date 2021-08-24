import { Link } from 'react-router-dom';

import './TrackProfile.css'

const TrackProfile = ({ artist, name, duration, listeners, img }) => {

  const timeToMin = time => ((time / 1000) /60).toFixed(2);

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
              <p>Durée : {timeToMin(duration)}</p>
              <p>Nombres d'écoute : {listeners}</p>
              {/* <a href={artist.url}>Liens LastFM</a> */}
              <a href={`https://www.last.fm/music/${artist.name}/_/${name}`} target="_blank" rel="noreferrer">Liens LastFM</a>
            </div>
          </div>
        </div>
    );
}

export default TrackProfile;
