import React, { Component } from 'react';

  class SearchResult extends Component {
  render() {
    return(
        <ul>
          {this.props.list.map(function(city,index) {
            return (
              <a href={city}>
                <li key={index} className="result">{city}</li>
              </a>
            )
          })}
        </ul>
    )
  }
  }


export default SearchResult;
