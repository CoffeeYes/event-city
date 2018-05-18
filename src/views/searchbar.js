import React, { Component } from 'react';
import SearchResult from './searchResult';
import {Route} from 'react-router-dom';

class SearchBar extends Component {
  render() {
    return(
      <div className="searchbar">
        <input onChange={this.props.handleChange} className="search-input" placeholder="Enter a city"/>
        <Route exact path='/' render={(props) => (
          <SearchResult list={this.props.list} />
        )}/>
      </div>
    )
  }
}

export default SearchBar;
