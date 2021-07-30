import React from 'react';
import './Album.css';

const InfoAlbum = ({ infoalbum }) => (
    <div className="info-album-bloc">
      <div className="info-album-bloc-img">
        <img src={infoalbum.image[4]['#text']} alt={infoalbum.image['#text']} />
      </div>
      <article className="info-album-bloc-article">
        <h2>{infoalbum.name}</h2>
        <div>
          <p>{infoalbum.strArtist}</p>
          <p>{infoalbum.artist}</p>
        </div>
      </article>
    </div>
)

export default InfoAlbum;