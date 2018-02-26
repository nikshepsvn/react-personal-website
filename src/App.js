import React, { Component } from 'react';
import logo from './logo.gif';
import background from './10.jpg';
import './App.css';

var FontAwesome = require('react-fontawesome');

class App extends Component {
  render() {
    return (
      <div className="Landing">
        <header className="Landing-Info">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Landing-title">Nikshep Svn</h1>
          <h1 className="Landing-text">CS @ <glow> University of Waterloo </glow>. Previously FullStack Intern @ <glow>Magmic</glow>. <br/> Incoming Core Infrastructure Intern @ <glow> PagerDuty. </glow> </h1>
          <div className = "icons">
          <a href= "https://linkedin.com/in/nikshepsvn" target="_blank"> <FontAwesome name='linkedin' className = "icon" size='2x'/> </a>
          <a href= "https://github.com/nikshepsvn" target="_blank"> <FontAwesome name='github' className = "icon" size='2x'/> </a>
          <a href= "mailto:nikshepsvn@gmail.com" target="_blank"> <FontAwesome name='envelope' className = "icon" size='2x'/> </a>
          <a href= "https://drive.google.com/file/d/1EVsm2fzZDn-4H1DGbwbT9ouHWEgAKDgY/view?usp=sharing" target="_blank"> <FontAwesome name='file-text' className = "icon" size='2x'/> </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
