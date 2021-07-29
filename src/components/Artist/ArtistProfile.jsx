import './ArtistProfile.css'

const ArtistProfile = ({artist}) => {
    return (
        <div>
            <div className="artistProfile">
                <div className="avatar">
                    <img src={artist.strArtistThumb} alt={artist.strArtist} />
                </div>
                <div className="artistInfo">
                    <h2>{artist.strArtist}</h2>
                    <p>Pays : {artist.strCountry} ({artist.strCountryCode})</p>
                    <p>Genre : {artist.strGenre}</p>
                    <p>Facebook : {artist.strFacebook}</p>
                    <p>Website : {artist.strWebsite}</p>
                    {/* <p>MusicbrainzId : {artist.strMusicBrainzID}</p> */}
                </div>
            </div>
        </div>
        
    );
}

export default ArtistProfile;