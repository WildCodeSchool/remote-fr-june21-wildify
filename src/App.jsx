import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Album from './components/Album/Album'
import Artist from './components/Artist/Artist'
import Explore from './components/Explore/Explore'
import Footer from './components/Footer/Footer'
import Legal from './components/Legal'
import Navbar from './components/Navbar/Navbar'
import Track from './components/Track/Track'

import './App.css'

const App = () => {

  const [selectedArtist, setSelectedArtist] = useState(null)
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  const [selectedTrack, setSelectedTrack] = useState(null)

  // useEffect qui permets de console.log le state selectedArtist Album et Track lorsque l'user clique sur la vignette de son choix.
  useEffect(() => {
    console.log('selectedArtist' + selectedArtist)
    console.log('selectedAlbum:' + selectedAlbum)
    console.log('selectedTrack:' + selectedTrack)
  }, [selectedArtist , selectedAlbum, selectedTrack])

  // selectArtist Function qui permets de set le state SelectedArtist avec l'artiste cliquer dans le composant Explore/ArtistCard.
  const selectArtist = Artist => setSelectedArtist(Artist)
  const selectAlbum = Album => setSelectedAlbum(Album)
  const selectTrack = Track => setSelectedTrack(Track)

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/explore">
          <Explore selectArtist={selectArtist} selectAlbum={selectAlbum} selectTrack={selectTrack}/>
        </Route>
        <Route path="/artist">
          <Artist />
        </Route>
        <Route path="/album">
          <Album/>
        </Route>
        <Route path="/track">
          <Track />
        </Route>
        <Route path="/myLibrary"></Route>
        <Route path="/userProfile"></Route>
        <Route path="/legal">
          <Legal/>
        </Route>
        <Route path="/contact"></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App
