import React from 'react';
import './Album.css';

const InfoAlbum = ({ infoalbum }) => (
  <>
    <div className="info-album-bloc">
      <div className="info-album-bloc-img">
        <img src={infoalbum.strAlbumThumb} alt={infoalbum.strAlbum} />
      </div>
      <article className="info-album-bloc-article">
        <h2>{infoalbum.strAlbum}</h2>
        <div>
          <p>{infoalbum.strArtist}</p>
          <p>{infoalbum.intYearReleased}</p>
          <p>{infoalbum.strStyle}</p>
        </div>
      </article>
    </div>
  </>
)

export default InfoAlbum;