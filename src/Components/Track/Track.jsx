import { useEffect, useState } from 'react';

import TrackProfile from './TrackProfile'

import './Track.css';
import { useParams } from 'react-router-dom';

const Track = () => {
  const { name } = useParams()

  console.log(name);

  useEffect(() => {

  }, [])

  return (
    <div className="Track">
      {/* <TrackProfile track={track} artist={artist} /> */}
    </div>
  );
}

export default Track;