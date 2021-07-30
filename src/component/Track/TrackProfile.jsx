import './TrackProfile.css'

const TrackProfile = ({ track }) => {
console.log('trackProfile:', track)


  const timeToMin = time => ((time / 1000) /60).toFixed(2);

    return (
        <div className="Track">
          <div className="Track-title">Track</div>
              {track &&  <div className="Track-profile">
              <div className="Track-avatar">
                <img src={track.album.image[2]['#text']} alt={`Album img of ${track.artist.name}}`} />
              </div>
              <div className="Track-info">
                <h2>{track.artist.name}</h2>
                <p>Track : {track.name} </p>
                <p>Durée : {timeToMin( track.duration)}</p>
                <p>Nombres d'écoute : {track.listeners}</p>
                <a href={track.artist.url}>Liens LastFM</a>
              </div>
          </div>}
        </div>
    );
}

export default TrackProfile;