import ArtistSimilarCard from "./ArtistSimilarCard";

const ArtistSimilar = ({similarArtists}) => {

    return (
        <div className="similar">
            <div className="artistTitle">
                <span>Similar artists</span>
            </div>
            {similarArtists
                ?<div className="similarArtists">
                    {similarArtists
                        .slice(0, 10)
                        .map( (similarArtist, index) => <ArtistSimilarCard key={index} similarArtist={similarArtist}/>)
                    }
                    </div>
                :<div>Aucun artiste similaire</div>
            }
        </div>
    );
}

export default ArtistSimilar;
