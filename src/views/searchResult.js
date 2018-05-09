import React, { Component } from 'react';

  class SearchResult extends Component {
  render() {
    return(
      <div className="result-container">
        <ul>
          {this.props.list.map(function(city,index) {
            return <li key={index} className="result">{city}</li>;
          })}
        </ul>
      </div>
    )
  }
  }


export default SearchResult;
