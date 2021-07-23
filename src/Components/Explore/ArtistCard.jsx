import './ArtistCard.css'

const ArtisteCard = ({ artist, selectArtist }) => (
    <div className="ArtistCard" onClick={() => selectArtist(artist)}>
      <h3>{artist.strArtist}</h3>
      <div className="ArtistCardContent">
      <img src={artist.strArtistThumb} alt={`Img of ${artist.strArtist}`} />
      <div className="ArtistCardInfo">
        <p>Genre : {artist.strGenre}</p>
        <p>Former en : {artist.intFormedYear}</p>
        <p>{artist.strCountry}</p>
      </div>
      </div>
    </div>
  );

export default ArtisteCard;