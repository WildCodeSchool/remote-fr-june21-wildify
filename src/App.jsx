import React from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import './App.css';

const App = () => {
  return (
    <Router>
       <>
        <Footer />
      </>
      <>
        <Navbar />
      </>

      <Switch>
        <Route exact path="/">
         </Route>
        <Route path="/Explore">
         </Route>
        <Route path="/MyLibrary">
         </Route>
        <Route path="/UserProfile">
         </Route>
        <Route path="/Legal">
          </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
       </Switch>
    </Router>
  );
}

export default App;
