import React from 'react';
import './Album.css';

const TrackList = ({ tracklist }) => (
        <div className="track-list-bloc">
            <h3>Liste des pistes</h3>
            <div className="track-list-bloc-table">
                <table>
                    <thead>
                        <tr>
                            <th>Piste</th>
                            <th>Titre</th>
                            <th>Durée</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tracklist.tracks.track.map((alb) => (
                        <tr>
                            <td>{alb['@attr'].rank}</td>
                            <td>{alb.name}</td>
                            <td>{alb.duration}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
)

export default TrackList;