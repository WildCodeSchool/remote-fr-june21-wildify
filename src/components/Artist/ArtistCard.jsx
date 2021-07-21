import ArtistAlbumList from "./ArtistAlbumList";
import ArtistSheet from './ArtistSheet';
import ArtistBiography from './ArtistBiography';

import '../style/ArtistCard.css';

const ArtistCard = () => {

    return (
        <div className="artist-card">
            <ArtistSheet />
            <ArtistAlbumList />
            {/* <ArtistBiography artistBio = {Artist}/> */}
        </div>
);
}

export default ArtistCard;