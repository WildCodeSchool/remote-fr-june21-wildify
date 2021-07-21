

const ArtistBiography = ({Artist}) => {
    return (
        <div>
            <div className="artist-title">Biography</div>
            {Artist.strBiographyFR
            ? <div className="artist-bio">{Artist.strBiographyFR}</div>
            : <div className="artist-bio">Biographie non disponible</div>
            }
        </div>
    );
}

export default ArtistBiography;