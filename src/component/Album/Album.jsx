import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import InfoAlbum from './InfoAlbum';
import TrackList from './TrackList';

import './Album.css';


const Album = ({albumFavoris, toggleAlbumFavoris}) => {
  const [album, setAlbum] = useState();
  const { albumName, artistName } = useParams();

  useEffect(() => {
    const getData = () => {
      axios
      .get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_API_KEY}&artist=${artistName}&album=${albumName}&format=json`)
      .then(data =>
        data.data.album && setAlbum(data.data.album))
    }
    albumName && artistName ? getData() : console.log(`albumName et artistName ne sont pas définis`);
  }, [albumName, artistName]);

  

  return (
    <div>
      {album === null || album === undefined
        ? <div>Wait...</div>
        : <div>
          <InfoAlbum key={albumName} infoalbum={album} albumFavoris={albumFavoris} toggleAlbumFavoris={toggleAlbumFavoris(album.idArtist)}/>
          <TrackList key={albumName} tracklist={album} />
          </div>
      }
    </div>
  );
}

export default Album;
