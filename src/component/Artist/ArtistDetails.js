
const ArtistDetails = ({artist, artistInfo}) => {
    console.log(artist)
    return (
        <div className="artistDetails">
            <div className="artistAvatar">
                <img src={artist.strArtistThumb} alt={artist.strArtist} />
            </div>
            <div className="artistInfo">
            <h2>{artist.strArtist}</h2>
                <p>Fans : {artist.strCountry} ({artist.strCountryCode})</p>
                <p>Origin : {artist.strCountry} ({artist.strCountryCode})</p>
                <p>Genre : {artist.strGenre}</p>
                <p>Facebook : <a href={`http://${artist.strFacebook}`} target="_blank" rel="noreferrer">{artist.strFacebook}</a></p>
                <p>Website : <a href = {`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">Web</a></p>
            </div>
        </div>
    );
}

export default ArtistDetails;
