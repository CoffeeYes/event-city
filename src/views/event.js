import React, { Component } from 'react';

class Event extends Component {
  render() {
    return(
      <div className="event_data_container">
        <h2 className="content-title">{this.props.data.title} - {this.props.data.location}</h2>
        <p className="content-time">{this.props.data.time} - {this.props.data.date}</p>
        <p className="content-going">{this.props.data.going_count} going</p>
        <p className="content-host">Hosted By : {this.props.data.user}</p>
        <button className="add-going" name="addGoing" onClick={this.props.handleGoing}>Im Going</button>
      </div>
    )
  }
}

export default Event
