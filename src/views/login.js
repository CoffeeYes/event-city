import React, { Component } from 'react';

class Event extends Component {
  render() {
    return(
      <div className="loginContainer">
        <form className="loginForm" action="/login" method="POST">
          <p className="error">{this.props.error}</p>
          <label>Username :</label>
          <input name="user" onChange={this.props.handleChange}/>
          <label>Password :</label>
          <input name="pass1" type="password" onChange={this.props.handleChange}/>
          <button onClick={this.props.handleLogin}>Login</button>
        </form>
      </div>
    )
  }
}

export default Event
