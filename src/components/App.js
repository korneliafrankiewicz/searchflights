import React from 'react';
import { HashRouter, Route, Link, Switch, NavLink, } from 'react-router-dom';
import '../styles/App.scss';
import SearchBar from './SearchBar/SearchBar';
import Header from './Header/Header';
import LogIn from "./LogIn/LogIn";
import Footer from "./Footer/Footer"
import sample from "../images/ocean_video.mp4";
import {Contact} from "./Contact/Contact";

function App() {
  return (
    <div className="App">
                <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
      <Header title="SkyIsTheLimit" />
      <div className="container">
      <HashRouter>
        <>
          <LogIn />
          <Switch>
            <Route path='/contact' component={Contact} />
          </Switch>
        </>
      </HashRouter>
        <h1>Find the cheapest price <br /><span>of your flight!</span></h1>
        <SearchBar />
        <Footer/>
      </div>
    </div>
  );
}

export default App;

