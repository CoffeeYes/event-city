import React, { Component } from 'react';
import {Link} from 'react-router-dom';

  class EventResult extends Component {
  render() {
    return(
        <ul>
          {this.props.list.map((item,index) => {
            return (
                <Link to={"/event/" + item.code} key={index}>
                    <li key={index} className="result">{item.name}, {item.location}</li>
                </Link>
            )
          })}
        </ul>
    )
  }
  }


export default EventResult;
