import { Link } from 'react-router-dom';

import './TrackProfile.css'

const TrackProfile = ({ track, img }) => {

  const timeToMin = time => ((time / 1000) /60).toFixed(2);

    return (
        <div className="Track-profile">
          <div className="Track-content">
            <div className="Track-avatar">
              <Link to={`/artist/${track.artist.name}`} >
                <img src={img} alt={`Album img of ${track.artist.name}}`} />
              </Link>
            </div>
            { track && <div className="Track-info">
              <h2>{track.artist.name}</h2>
              <p>Track : {track.name} </p>
              <p>Durée : {timeToMin( track.duration)}</p>
              <p>Nombres d'écoute : {track.listeners}</p>
              <a href={track.artist.url}>Liens LastFM</a>
            </div>}
          </div>
        </div>
    );
}

export default TrackProfile;
