


const ArtistDetails = ({artist, artistInfo}) => {

    return (
        <div className="artistDetails">
            <div className="artistAvatar">
                <img src={artist.strArtistThumb} alt={artist.strArtist} />
            </div>
            <div className="artistInfo">
                <div className = "artistName">
                    <h2>{artist.strArtist}</h2>
                </div>
                <p>Fans : {artistInfo && artistInfo.stats.listeners}</p>
                <p>Origin : {artist.strCountry} ({artist.strCountryCode})</p>
                <p>Genre : {artist.strGenre}</p>
                <p>Facebook : <a href={`http://${artist.strFacebook}`} target="_blank" rel="noreferrer">Facebook Logo</a></p>
                <p>Website : <a href = {`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">Web Logo</a></p>
            </div>
            
        </div>
    );
}

export default ArtistDetails;
