import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Album from './components/Album/Album'
import Artist from './components/Artist/Artist'
import Contact from './components/Contact/Contact'
import Explore from './components/Explore/Explore'
import Footer from './components/Footer/Footer'
import Legal from './components/Legal'
import Navbar from './components/Navbar/Navbar'
import Track from './components/Track/Track'

import './App.css'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/explore">
          <Explore/>
        </Route>
        <Route path="/artist/:name">
          <Artist/>
        </Route>
        <Route path="/Album/:name">
          <Album />
        </Route>
        <Route path="/track/:name">
          <Track />
        </Route>
        <Route path="/myLibrary"></Route>
        <Route path="/userProfile"></Route>
        <Route path="/legal">
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

export default App
