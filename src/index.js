import React from 'react';
import ReactDOM from 'react-dom';
import Explore from './Components/Explore/Explore.jsx'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Explore />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
