import './ArtistBiography.css'

const ArtistBiography = ({ artist }) => {
    return (
        <div>
            <div className="artistTitle">Biographie</div>
            {artist.bio.summary
        ? <div className="artistBio">{artist.bio.summary.replace('<a href="https://www.last.fm/music/','...').replace('">Read more on Last.fm</a>', '')}</div>
                : <div className="artistBio">Biographie non disponible</div>
            }
        </div>
    );
}

export default ArtistBiography;