import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Album from './component/Album/Album'
import Artist from './component/Artist/Artist'
import Contact from './component/Contact/Contact'
import Explore from './component/Explore/Explore'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import Legal from './component/Legal/Legal'
import Navbar from './component/Navbar/Navbar'
import Track from './component/Track/Track'

import './App.css'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/explore">
          <Explore/>
        </Route>
        <Route path="/artist/:name">
          <Artist/>
        </Route>
        <Route path="/Album/:name">
          <Album />
        </Route>
        <Route path="/track/:trackName/:artistName">
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
