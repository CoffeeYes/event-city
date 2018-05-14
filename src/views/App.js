import React, { Component } from 'react';
import '../stylesheets/App.css';
import SearchBar from './searchbar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'searchText' : '',
      'test_value_get': '',
      'city_arr_test' : []
    }

    this.updateSearchText = this.updateSearchText.bind(this);
  }

  componentDidMount() {
    fetch('/api/test')
      .then( res => res.json())
      .then( data => this.setState({'test_value_get' : data.test_key}))
  }

  updateSearchText(event) {
    this.setState({'searchText' : event.target.value},function() {
      fetch('/api/cities?query=' + this.state.searchText)
        .then( res => res.json())
        .then( data => this.setState({city_arr_test : data}))
    })
  }

  render() {
    return(
      <div>
        <SearchBar handleChange={this.updateSearchText} value={this.state.searchText} list={this.state.city_arr_test}/>
      </div>
    )
  }
}

export default App;
