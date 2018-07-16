import React, { Component } from 'react';

class addEvent extends Component {
  render() {
    return(
      <div className="addContainer">
        <form className="addForm" action="/add-event" method="POST">
          <p className="error">{this.props.error}</p>
          <label>Title :</label>
          <input name="title"/>
          <label>Time :</label>
          <input name="time"/>
          <label>Date :</label>
          <input name="date" />
          <label>Location :</label>
          <input name="location" />
        </form>
      </div>
    )
  }
}

export default addEvent;
