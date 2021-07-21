// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ArtistCard from './components/Artist/ArtistCard';
import './components/style/App.css';

const App = () => {
  return (
    <div className="app">
      <div className="artist-title">Artist Page</div>
      <ArtistCard />
    </div>
  );
}

export default App;
