import { Link } from 'react-router-dom';

import './TrackProfile.css'

const TrackProfile = ({ artist, name, duration, listeners, img }) => {

  const timeToMin = time => ((time / 1000) /60).toFixed(2);

    return (
        <div className="Track-profile">
          <div className="Track-content">
            <div className="Track-avatar">
              <Link to={`/artist/${artist.name}`} >
                <img src={img} alt={`Album img of ${artist.name}}`} />
              </Link>
            </div>
            <div className="Track-info">
              <h2>{artist.name}</h2>
              <p>Track : {name} </p>
              <p>Durée : {timeToMin(duration)}</p>
              <p>Nombres d'écoute : {listeners}</p>
              <a href={artist.url}>Liens LastFM</a>
            </div>
          </div>
        </div>
    );
}

export default TrackProfile;
