
const ArtistBio = ({ artist, artistInfo }) => {
    return (
        <div className="artistBio">
            <div className="artistTitle">Biographie</div>
            {artistInfo
                ? <p>{artistInfo.bio.summary}</p>
                : <p>Biographie non disponible</p>
            }
        </div>
    );
}

export default ArtistBio;