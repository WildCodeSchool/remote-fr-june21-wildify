import '../style/ArtistAlbum.css'

const ArtistAlbum = ({ album }) => {
    return (
        <div className="album">
            <img src={album.strAlbum3DThumb} alt={`Cover ${album.strAlbum}`}/>
            <p>{album.strAlbum}</p>
            <p>({album.intYearReleased})</p>
        </div>
    );
}

export default ArtistAlbum;