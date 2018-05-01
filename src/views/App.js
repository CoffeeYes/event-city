import React, { Component } from 'react';
import '../stylesheets/App.css';
import SearchBar from './searchbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'searchText' : '',
      'test_value_get': ''
    }

    this.updateSearchText = this.updateSearchText.bind(this);
  }

  componentDidMount() {
    fetch('/api/test')
      .then( res => res.json())
      .then( data => this.setState({'test_value_get' : data.test_value}))
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
