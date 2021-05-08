import React from 'react';
import '../styles/App.scss';
import SearchBar from './SearchBar';
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header title="SkyIsTheLimit" />
      <div className="container">
        <h1>Find the cheapest price <br /><span>of your flight!</span></h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;

