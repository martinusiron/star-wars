import React, { Component } from 'react';
import './App.css';
import MoviesList from './components/MoviesList'

class App extends Component {
  render(){
    return (
      <div className="container">
          <header className="App-header">Star Wars</header>
          <MoviesList />
      </div>
    );
  }
  
}

export default App;
