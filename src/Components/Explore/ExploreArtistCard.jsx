import './ExploreArtistCard.css'

const ExploreArtistCard = ({ artist, selectArtist }) => (
    <div className="ExploreArtistCard" onClick={() => selectArtist(artist)}>
      <h3>{artist.strArtist}</h3>
      <div className="ExploreArtistCardContent">
      <img src={artist.strArtistThumb} alt={`Img of ${artist.strArtist}`} />
      <div className="ExploreArtistCardInfo">
        <p>Genre : {artist.strGenre}</p>
        <p>Former en : {artist.intFormedYear}</p>
        <p>{artist.strCountry}</p>
      </div>
      </div>
    </div>
  );

export default ExploreArtistCard;