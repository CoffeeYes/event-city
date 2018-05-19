import React, { Component } from 'react';
import '../stylesheets/App.css';
import SearchBar from './searchbar';
import {Route} from 'react-router-dom';
import SearchResult from './searchResult';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'searchText' : '',
      'test_value_get': '',
      'city_arr_test' : [],
      'loading' : false
    }

    this.updateSearchText = this.updateSearchText.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    fetch('/api/test')
      .then( res => res.json())
      .then( data => this.setState({'test_value_get' : data.test_key}))
  }

  updateSearchText(event) {
    this.setState({'searchText' : event.target.value},function() {
      if(this.state.searchText.trim() !== '') {
        this.setState({'loading' : true})
      }
      else {
        this.setState({'loading' : false})
      }
      fetch('/api/cities?query=' + this.state.searchText)
        .then( res => res.json())
        .then( data => this.setState({city_arr_test : data}))
    })
  }

  handleClick(event) {
    this.setState({'city_arr_test' : []})
  }
  render() {
    return(
      <div>
        <SearchBar handleChange={this.updateSearchText} value={this.state.searchText} list={this.state.city_arr_test} handleClick={this.handleClick }/>
        <Route path='/city/*' render={(props) => (
          <p>city</p>
        )}/>
      </div>
    )
  }
}

export default App;
