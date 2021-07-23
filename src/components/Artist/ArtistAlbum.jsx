import '../style/ArtistAlbum.css'

const ArtistAlbum = ({ album }) => {
    return (
        <div className="artist-album">
            {album.strAlbum3DThumb
            ? <img src={album.strAlbum3DThumb} alt={`Cover ${album.strAlbum}`}/>
            : <img src={"https://i.ibb.co/fD8vLPB/no-cover-ter.png"} alt={"Wildify3DCover"}/>
            // : <img src={"https://i.ibb.co/2krkB0F/no-cover-bis.png"} alt={"Cover"}/>
            // : <img src={"https://i.ibb.co/VTsGkfV/no-cover.png"} alt={"Cover"}/>
            }
            <p>{album.strAlbum} ({album.intYearReleased})</p>
        </div>
    );
}

export default ArtistAlbum;