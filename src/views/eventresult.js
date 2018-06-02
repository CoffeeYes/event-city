import React, { Component } from 'react';
import {Link} from 'react-router-dom';

  class EventResult extends Component {
  render() {
    return(
      <div className="event-container">
        <ul>
          {this.props.list.map((item,index) => {
            return (
                <Link to={"/event/" + item.code} key={index} onClick={ () => this.props.handleClick(item.code)}>
                    <div className="event">
                      <h2>{item.name} - {item.location}</h2>
                      <p>{item.time}</p>
                      <p>{item.going} going</p>
                    </div>
                </Link>
            )
          })}
        </ul>
      </div>
    )
  }
  }


export default EventResult;
