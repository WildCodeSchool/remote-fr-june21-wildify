import { Link } from 'react-router-dom';

const HomeTrackCard = ({topTrack}) => {

    return (
        <div className = "homeTopCard" >
            <Link to={`/track/${topTrack.name}`}> 
                <p>{topTrack.name}</p>
                <img src={topTrack.image[3]['#text']} alt="top Tracks"/>
            </Link>
        </div>
    );
}

export default HomeTrackCard;