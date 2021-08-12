
const ArtistBio = ({ artistInfo }) => {
    return (
        <div className="artistBio">
            <div className="artistTitle">Biographie</div>
            {artistInfo
                ?   <p>{artistInfo.bio.summary.substring(0, artistInfo.bio.summary.indexOf("<a href")-1).concat("","..")}
                        <a href = {`https://${artistInfo.bio.summary.substring(artistInfo.bio.summary.indexOf("<a href"), artistInfo.bio.summary.length).replace('<a href="https://',"").replace('">Read more on Last.fm</a>',"")}`} target="_blank" rel="noreferrer">(click here to read more on www.last.fm)</a>
                    </p>
                :   <p>Biographie non disponible</p>
            }
        </div>
    );
}

export default ArtistBio;
