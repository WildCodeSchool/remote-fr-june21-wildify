import './TrackProfile.css'

const TrackProfile = ({ track, artist }) => {
  console.log(track);

  // Converti la durée d'une track en min avec limit de 2 decimal.
  const timeToMin = time => ((time / 1000) /60).toFixed(2);

    return (
      <>
        <div className="Track-title">Track</div>
        <div className="Track-profile">
          <div className="Track-avatar">
            <img src={artist.strArtistThumb} alt={`Img de l'artist ${artist.strArtist}`} />
          </div>
          <div className="Track-info">
            <h2>{track.strTrack}</h2>
            <p>Artist : {track.strArtist}</p>
            <p>Album : {track.strAlbum}</p>
            <p>Genre : {track.strGenre}</p>
            <p>Durée : {timeToMin(track.intDuration)}min</p>
          </div>
        </div>
      </>
    );
}

export default TrackProfile;