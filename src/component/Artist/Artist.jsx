import ArtistCard from './ArtistCard';

import './ArtistCard.css';

const Artist = () => {
    const searchArtist = "Michael Jackson"

    return (
        <div className="artist-card">
            <ArtistCard artistId={searchArtist}/>
        </div>
    );
}

export default Artist;