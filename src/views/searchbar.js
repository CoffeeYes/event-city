import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return(
      <div className="searchbar">
        <input onChange={this.props.handleChange} className="search-input" placeHolder="Enter a city"/>
      </div>
    )
  }
}

export default SearchBar;
