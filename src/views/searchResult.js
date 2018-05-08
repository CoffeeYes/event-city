import React, { Component } from 'react';

  class SearchResult extends Component {
  render() {
    return(
        <ul>
          {this.props.list.map(function(city) {
            return <li>{city}</li>;
          })}
        </ul>
    )
  }
  }


export default SearchResult;
