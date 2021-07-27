import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Explore from './Components/Explore/Explore'
import Artist from './Components/Artist/Artist';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Legal from './Components/Legal';
import Album from './Components/Album/Album';

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
      <Footer />
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
        <Route path="/MyLibrary"></Route>
        <Route path="/UserProfile"></Route>
        <Route path="/Legal">
          <Legal/>
        </Route>
        <Route path="/Contact"></Route>
      </Switch>
    </Router>
  );
};

export default App;
