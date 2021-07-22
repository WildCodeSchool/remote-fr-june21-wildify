import './ArtistCard.css'

const Artiste = ({ artist }) => {

  return (
    <div className="ArtistCard">
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={`Img of ${artist.strArtist}`} />
      <div className="ArtistCardContent">
        <p>Genre : {artist.strGenre}</p>
        <p>Former en : {artist.intFormedYear}</p>
        <p>{artist.strCountry}</p>
      </div>
    </div>
  );
}

export default Artiste;