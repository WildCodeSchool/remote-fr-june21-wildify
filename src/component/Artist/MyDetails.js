import './MyDetails.css'

const MyDetails = ({artist}) => {
    console.log(artist)
    return (
        <div>
            <div className="artistDetails">
                <div className="artistAvatar">
                    <img src={artist.strArtistThumb} alt={artist.strArtist} />
                </div>
                <div className="artistInfo">
                <h2>{artist.strArtist}</h2>
                    <p>Origin : {artist.strCountry} ({artist.strCountryCode})</p>
                    <p>Genre : {artist.strGenre}</p>
                    <p>Facebook : <a href={artist.strFacebook} target="_blank">{artist.strFacebook}</a></p>
                    <p>Website : {artist.strWebsite}</p>
                </div>
            </div>
        </div>
        
    );
}

export default MyDetails;
