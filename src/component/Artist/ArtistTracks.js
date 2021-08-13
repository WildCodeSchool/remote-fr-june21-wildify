import ArtistTrackCard from './ArtistTrackCard'

const ArtistTracks = ({ tracks }) => {

    return (
        <div className="bestSongs">
            <div className="artistTitle">
                <span>Top Tracks</span>
            </div>
            {tracks
                ?<div className="artistTracks">
                    {tracks
                        .slice(0, 10)
                        .map( (track, index) => <ArtistTrackCard key={index} track={track}/>)
                    }
                    </div>
                :<div>Pistes non disponible</div>
            }
        </div>
    );
}

export default ArtistTracks;
