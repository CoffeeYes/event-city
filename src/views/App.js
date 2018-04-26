import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../stylesheets/App.css';
import Test from './test'
import SearchBar from './searchbar'

class App extends Component {
  render() {
    return(
      <div>
        <SearchBar />
      </div>
    )
  }
}

export default App;
