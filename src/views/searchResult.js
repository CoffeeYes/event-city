import React, { Component } from 'react';

  class SearchResult extends Component {
  render() {
    return(
        <ul>
          {this.props.list.map(function(item,index) {
            return (
              <a href={item.city} key={index}>
                <li key={index} className="result">{item.city}, {item.country}</li>
              </a>
            )
          })}
        </ul>
    )
  }
  }


export default SearchResult;
