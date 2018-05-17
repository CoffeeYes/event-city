import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

  class SearchResult extends Component {
  render() {
    return(
        <ul>
          {this.props.list.map(function(item,index) {
            return (
              <Route path='/' key={index} render= {(props) => (
                <Link to={"/city/" + item.city} key={index}>
                  <li key={index} className="result">{item.city}, {item.country}</li>
                </Link>
              )}/>
            )
          })}
        </ul>
    )
  }
  }


export default SearchResult;
