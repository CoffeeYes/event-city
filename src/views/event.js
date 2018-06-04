import React, { Component } from 'react';

class Event extends Component {
  render() {
    return(
      <div className="eventcontainer">
        <p>{this.props.data.name}</p>
        <p>{this.props.data.going}</p>
        <p>{this.props.data.time}</p>
      </div>
    )
  }
}

export default Event
