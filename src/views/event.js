import React, { Component } from 'react';

class Event extends Component {
  render() {
    return(
      <div className="event_data_container">
        <h2>{this.props.data.name}</h2>
        <p>{this.props.data.going} going</p>
        <p>{this.props.data.time}</p>
      </div>
    )
  }
}

export default Event
