import React from 'react';
import './Album.css';

const TrackList = ({tracklist}) => {

    return (
    <>
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
                        <tr>
                            <td>{tracklist.idTrack}</td>
                            <td>{tracklist.strTrack}</td>
                            <td>{tracklist.intDuration}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
    );
}

export default TrackList;