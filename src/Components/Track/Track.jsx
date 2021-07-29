import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TrackProfile from './TrackProfile'

import './Track.css';

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