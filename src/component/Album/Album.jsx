import React from 'react';
import { useEffect, useState } from 'react';
import InfoAlbum from './InfoAlbum';
import TrackList from './TrackList';
import './Album.css';


const Album = () => {
  const [album, setAlbum] = useState();
  const idAlbum = "In the Zone";
  const idArtist = "Britney Spears";
  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=e46bdee78e4bad1a3edaa3ba6e3a981e&artist=${idArtist}&album=${idAlbum}&format=json`)
      .then(response => response.json())
      .then(data => setAlbum(data.album))
  }, [idAlbum]);
  return (
    <div>
      {album === null || album === undefined
        ? <div>Wait...</div>
        : <div>
          <InfoAlbum key={idAlbum} infoalbum={album} />
          <TrackList key={idAlbum} tracklist={album} />
          </div>
      }
    </div>
  );
}

export default Album;