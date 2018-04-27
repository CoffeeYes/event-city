import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../stylesheets/App.css';
import Test from './test'
import SearchBar from './searchbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'searchText' : ''
    }

    this.updateSearchText = this.updateSearchText.bind(this);
  }

  updateSearchText(event) {
    this.setState({'searchText' : event.target.value})
  }

  render() {
    return(
      <div>
        <SearchBar handleChange={this.updateSearchText} value={this.state.searchText}/>
      </div>
    )
  }
}

export default App;
