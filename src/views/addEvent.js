import React, { Component } from 'react';

class addEvent extends Component {
  render() {
    return(
      <div className="addContainer">
        <form className="addForm" action="/add-event" method="POST">
          <p className="error">{this.props.error}</p>
          <label>Title :</label>
          <input name="title" onChange={this.props.handleChange}/>
          <label>Time :</label>
          <input name="time" onChange={this.props.handleChange}/>
          <button onClick={this.props.handleLogin}>Login</button>
        </form>
      </div>
    )
  }
}

export default addEvent;
