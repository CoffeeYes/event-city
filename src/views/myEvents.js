import React, { Component } from 'react';

  class MyEvents extends Component {
  render() {
    return(
      <div className="event-container">
        <ul>
          {this.props.list.map((item,index) => {
            return (
                    <div className="event" key={index}>
                      <button className="delete-event" name="delete" value={item.code} onClick={this.props.handle_delete}>x</button>
                      <h2>{item.title} - {item.location}</h2>
                      <p>{item.time}</p>
                      <p>{item.going_count} going</p>
                      <p>{item.date}</p>
                    </div>
            )
          })}
        </ul>
      </div>
    )
  }
  }


export default MyEvents;
