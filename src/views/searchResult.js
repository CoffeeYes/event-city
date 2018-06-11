import React, { Component } from 'react';
import {Link} from 'react-router-dom';

  class SearchResult extends Component {
  render() {
    return(
      <div className="searchresult">
          <ul>
            {this.props.list.map((item,index) => {
              return (
                  <Link to={"/city/" + item.city} key={index} onClick={this.props.handleClick}>
                      <li key={index} className="result">{item.city}, {item.country}</li>
                  </Link>
              )
            })}
          </ul>
        </div>
    )
  }
  }


export default SearchResult;
