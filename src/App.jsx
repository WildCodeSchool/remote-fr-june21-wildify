import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ArtistCard from './components/Artist/ArtistCard';

import logo from './assets/logo.png';
import './App.css';

const App = () => {
  return (
    <div class="app">
      <img src={logo} alt="WildCodeSchool Logo"/>
      <h1>Hello Wilders 👋</h1>
      {/* <p>Welcome in your project 2 structure</p> */}
      <ArtistCard />
    </div>
  );
}

export default App;
