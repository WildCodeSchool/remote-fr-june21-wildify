import './ExploreCard.css'

const ExploreAlbumCard = ({ album, selectAlbum }) => (
    <div className="ExploreCard" onClick={() => selectAlbum(album)}>
      <img src={album.image[2]['#text']} alt={`Img of ${album.name}`} />
      <h3>{album.name}</h3>
    </div>
  );

export default ExploreAlbumCard;