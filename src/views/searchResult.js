import React, { Component } from 'react';
import {Link} from 'react-router-dom';

  class SearchResult extends Component {
  render() {
    return(
        <ul>
          {this.props.list.map(function(item,index) {
            return (
                <Link to={"/city/" + item.city} key={index}>
                  <li key={index} className="result">{item.city}, {item.country}</li>
                </Link>
            )
          })}
        </ul>
    )
  }
  }


export default SearchResult;
