import Explore from './Components/Explore/Explore.jsx'
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [selectedArtist, setSelectedArtist] = useState(null)

  // useEffect qui permets de console.log le state selectedArtist lorsque l'user clique sur l'artiste de son choix.
  useEffect(() => {
    console.log(selectedArtist);
  }, [selectedArtist])


  // selectArtist Function qui permets de set le state SelectedArtist avec l'artiste cliquer dans le composant Explore/ArtistCard.
  const selectArtist = Artist => setSelectedArtist(Artist)

  return (
    <div className="app">
      <Explore selectArtist={selectArtist} />
    </div>
  );
}

export default App;
