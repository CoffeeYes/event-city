import React, { Component } from 'react';
import {Link} from 'react-router-dom';

  class myEvents extends Component {
  render() {
    return(
      <div className="event-container">
        <ul>
          {this.props.events.map((item,index) => {
            return (
                    <div className="event" key={index}>
                      <h2>{item.title} - {item.location}</h2>
                      <p>{item.time}</p>
                      <p>{item.going_count} going</p>
                      <p>{item.date}</p>
                      <p>Hosted By : {item.user}</p>
                    </div>
            )
          })}
        </ul>
      </div>
    )
  }
  }


export default myEvents;
