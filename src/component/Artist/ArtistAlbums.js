import { useState } from 'react';

import ArtistAlbumCard from './ArtistAlbumCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const ArtistAlbums = ({albums}) => {

    // Pagination
    const numRes = parseInt(5);
    const [firstAlbum, setFirstAlbum] = useState(0);
    const [lastAlbum, setLastAlbum] = useState(numRes);
    
    const prevClick = () => {
        setFirstAlbum(firstAlbum - numRes);
        setLastAlbum(lastAlbum - numRes);
    };
    const nextClick = () => {
        setFirstAlbum(firstAlbum + numRes);
        setLastAlbum(lastAlbum + numRes);
    };

    return (
        <div className="artistDisco">

            <div className="artistTitle">
                <span>Discographie</span>
            </div>
            {albums
                ?<div className="artistAlbums">
                    <div className="albumsPages">
                        {firstAlbum >= numRes
                            ? <p className="albumsPrev" onClick={prevClick}><FontAwesomeIcon icon={faChevronLeft} /></p>
                            : <p className="noPrev" onClick={prevClick}><FontAwesomeIcon icon={faChevronLeft} /></p>
                        }
                    </div>
                    {albums
                        .slice(firstAlbum, lastAlbum)
                        .map( (album, index) =>
                            <ArtistAlbumCard key={index} album={album}/>
                            )
                    }
                    <div className="albumsPages">
                        {lastAlbum < albums.length && <p className="albumsNext" onClick={nextClick}><FontAwesomeIcon icon={faChevronRight} /></p>}
                    </div>
                    </div>
                :<div>Discographie non disponible</div>
            }
        </div>

    );
}

export default ArtistAlbums;
// 