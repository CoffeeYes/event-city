import React, { Component } from 'react';
import SearchResult from './searchResult'

class SearchBar extends Component {
  render() {
    return(
      <div className="searchbar">
        <input onChange={this.props.handleChange} className="search-input" placeholder="Enter a city"/>
        <SearchResult list={this.props.list} />
      </div>
    )
  }
}

export default SearchBar;
