import React from 'react';
import { Link } from 'react-router-dom';

import play from '../../assets/iconplay.png';

import './Album.css';

const TrackList = ({ tracklist }) => (
    <div className="track-list-bloc">
        <h3>Liste des pistes</h3>
        <div className="track-list-bloc-table">
                    {tracklist.tracks.track.map((alb, index) => (
                        <div className="bloc" key={index}>
                            <Link to={`/track/${tracklist.name}/${tracklist.artist}`}>
                            <div className="blocpist">
                                <div>
                                    <img className="img-bloc-pist" src={tracklist.image[4]['#text']} alt={tracklist.image['#text']} />
                                </div>
                                <div className="blocpist-infos">
                                <div className="track-name">{alb.name}</div>
                                    <div className="blocpist-infos-time">
                                        <div><img src={play} alt="Logo" className="blocpist-infos-logo" /></div>
                                        <div className="track-duration">{Math.floor(alb.duration / 60)} m {alb.duration % 60 ? alb.duration % 60 : '00'} s</div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
        </div>
    </div>
)

export default TrackList;
