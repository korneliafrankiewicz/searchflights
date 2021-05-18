import React from 'react';
import '../styles/App.scss';
import SearchBar from './SearchBar/SearchBar';
import Header from './Header/Header';
import Shop from "../components/Shop/Shop";
import sample from "../images/ocean_video.mp4"

function App() {
  return (
    <div className="App">
                  <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
      <Header title="SkyIsTheLimit" />
      <div className="container">
        <h1>Find the cheapest price <br /><span>of your flight!</span></h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;

