import './ArtistProfile.css'

const ArtistProfile = ({Artist}) => {
    return (
        <div>
            <div className="artist-title">Artiste</div>
            <div className="artist-profile">
                <div className="avatar">
                    <img src={Artist.strArtistThumb} alt={Artist.strArtist} />
                </div>
                <div className="artist-info">
                    <h2>{Artist.strArtist}</h2>
                    <p>Pays : {Artist.strCountry} ({Artist.strCountryCode})</p>
                    <p>Genre : {Artist.strGenre}</p>
                    <p>Facebook : {Artist.strFacebook}</p>
                    <p>Website : {Artist.strWebsite}</p>
                    <p>MusicbrainzId : {Artist.strMusicBrainzID}</p>
                </div>
            </div>
        </div>
        
    );
}

export default ArtistProfile;