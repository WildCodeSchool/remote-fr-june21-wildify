import { useEffect, useState } from 'react';
import InfoAlbum from './InfoAlbum';
import TrackList from './TrackList';
import './Album.css';


const Album = () => {
  const [album, setAlbum] = useState();
  const idAlbum = 2115888;
  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${idAlbum}`)
      .then(response => response.json())
      .then(data => setAlbum(data.album))
  }, [idAlbum]);

  return (
    <>
      {album === null || album === undefined
        ? <div>Wait...</div>
        : album.map((alb) => (
          <>
            <InfoAlbum key={alb.idAlbum} infoalbum={alb} />
            <TrackList key={alb.idAlbum} tracklist={alb} />
          </>
        ))
      }
    </>
  );
}

export default Album;