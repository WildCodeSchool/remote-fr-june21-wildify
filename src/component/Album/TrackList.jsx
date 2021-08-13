import React from 'react';

import play from '../../assets/iconplay.png';
import time from '../../assets/icontime.png';

import './Album.css';

const TrackList = ({ tracklist }) => (
        <div className="track-list-bloc">
            <h3>Liste des pistes</h3>
            <div className="track-list-bloc-table">
                <table>
                    <thead>
                        <tr>
                            <th><img src={play} alt="Logo" /></th>
                            <th className="track-left">Titre</th>
                            <th><img src={time} alt="Logo" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tracklist.tracks.track.map((alb,index) => (
                        <tr key={index}>
                            <td className="track-center">{alb['@attr'].rank}</td>
                            <td className="track-left">{alb.name}</td>
                            <td className="track-center">{Math.floor(alb.duration / 60)}:{alb.duration % 60 ? alb.duration % 60 : '00'}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
)

export default TrackList;
