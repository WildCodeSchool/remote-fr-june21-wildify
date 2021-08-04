import { Link } from 'react-router-dom';

const HomeArtistCard = ({topArtist}) => {

    return (
        <div className = "homeTopCard" >
            <Link to={`/artists/${topArtist.name}`}> 
                <p>{topArtist.name}</p>
                <img src={topArtist.image[3]['#text']} alt="top artists"/>
            </Link>
        </div>
    );
}

export default HomeArtistCard;
