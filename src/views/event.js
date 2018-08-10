import React, { Component } from 'react';

class Event extends Component {
  render() {
    return(
      <div className="event_data_container">
        <h2>{this.props.data.title} - {this.props.data.location}</h2>
        <p>{this.props.data.time} - {this.props.data.date}</p>
        <p>{this.props.data.going} going</p>
        <p>Hosted By : {this.props.data.user}</p>
      </div>
    )
  }
}

export default Event
