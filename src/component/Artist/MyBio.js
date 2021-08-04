import './MyBio.css'

const MyBio = ({ artistInfo }) => {
    return (
        <div>
        <div className="artistTitle">Biographie</div>
        {artistInfo
            ? <div className="artistBio">{artistInfo.bio.summary}</div>
            : <div className="artistBio">Biographie non disponible</div>
        }
        </div>
    );
}

export default MyBio;