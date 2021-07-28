import './ExploreCard.css'

const ExploreArtistCard = ({ artist, selectArtist }) => (
    <div className="ExploreCard" onClick={() => selectArtist(artist)}>
      <img src={artist.image[2]['#text']} alt={`Img of ${artist.name}`} />
      <h>{artist.name}</h>
    </div>
  );

export default ExploreArtistCard;