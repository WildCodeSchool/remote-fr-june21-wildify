import ArtistAlbums from "./ArtistAlbums";
import ArtistDetail from "./ArtistDetail";

const ArtistCard = () => {
    return ( 
        <div className="artist-card">
            <h3>Artist</h3>
            <ArtistDetail />
            <ArtistAlbums Artist={Artist}/>
        </div>
);
}

export default ArtistCard;