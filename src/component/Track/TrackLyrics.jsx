import "./TrackLyrics.css";

const TrackLyrics = ({ lyrics }) => {
  return (
    <div className="trackLyrics">
      <p>{lyrics}</p>
    </div>
  );
}

export default TrackLyrics;