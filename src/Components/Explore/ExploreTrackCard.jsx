import './ExploreCard.css'

const ExploreTrackCard = ({ track, selectTrack }) => (
    <div className="ExploreCard" onClick={() => selectTrack(track)}>
      <img src={track.image[2]['#text']} alt={`Img of ${track.name}`} />
      <h3>{track.name}</h3>
    </div>
  );

export default ExploreTrackCard;