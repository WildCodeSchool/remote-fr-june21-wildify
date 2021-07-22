import {useEffect, useState} from 'react';
import InfoAlbum from './InfoAlbum';
// import TrackList from './TrackList';
import './Album.css';


const Album = () => {

  const [album, setalbum] = useState();
  const [idAlbum, setIdAlbum] = useState(2115888)

    useEffect(() => {
      fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${idAlbum}`)
    .then(response => response.json())
    .then(data => setalbum(data.album))
    }, [idAlbum])

    console.log(album);

    return (
      <>
      {album === null || album === undefined
      ? <div>Wait...</div>
      :album.map((alb) => (
        <InfoAlbum key={alb.idAlbum} infoalbum={alb}/>
        // <TrackList key={alb.idAlbum} {...alb}/>
      ))
      }
      </>
    );
  }
  
export default Album;