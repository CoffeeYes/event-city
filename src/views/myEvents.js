import React, { Component } from 'react';

  class MyEvents extends Component {
  render() {
    return(
      <div className="event-container">
        <ul>
          {this.props.list.map((item,index) => {
            return (
                    <div className="event">
                      <h2>{item.title} - {item.location}</h2>
                      <p>{item.time}</p>
                      <p>{item.going_count} going</p>
                      <p>{item.date}</p>
                      <p>Hosted By : {item.user}</p>
                      <button className="delete-event" name="delete" value={item.id} onClick={this.props.handle_delete}>x</button>
                    </div>
            )
          })}
        </ul>
      </div>
    )
  }
  }


export default MyEvents;
