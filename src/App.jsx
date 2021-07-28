import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Album from './components/Album/Album';
import Artist from './components/Artist/Artist';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import Legal from './components/Legal';
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Track from './components/Track/Track'

import './App.css';

const App = () => {

  const [selectedArtist, setSelectedArtist] = useState(null)

  // useEffect qui permets de console.log le state selectedArtist lorsque l'user clique sur l'artiste de son choix.
  useEffect(() => {
    console.log(selectedArtist);
  }, [selectedArtist])

  // selectArtist Function qui permets de set le state SelectedArtist avec l'artiste cliquer dans le composant Explore/ArtistCard.
  const selectArtist = Artist => setSelectedArtist(Artist)

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/Explore">
          <Explore selectArtist={selectArtist} />
        </Route>
        <Route path="/Artist">
          <Artist />
        </Route>
        <Route path="/Album">
          <Album />
        </Route>
        <Route path="/Track">
          <Track />
        </Route>
        <Route path="/MyLibrary"></Route>
        <Route path="/UserProfile"></Route>
        <Route path="/Legal">
          <Legal/>
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
