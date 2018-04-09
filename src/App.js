import React, { Component } from 'react';
import logo from './noose.png';
import './App.css';
import GuessesLeft from './components/GuessesLeft'

class App extends Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" />
          <h1 className="App-title">Play The Hangman Game</h1>
        </header>

          <h1 className="App-intro">Total Guesses: 6</h1>

        <GuessesLeft />


      </div>
    );
  }
}

export default App;
