import React, { Component } from 'react';

class Event extends Component {
  render() {
    return(
      <div className="loginContainer">
        <form className="loginForm" action="/login" method="POST">
          <label>Username :</label>
          <input name="user" onChange={this.props.handleChange}/>
          <label>Email :</label>
          <input name="email" onChange={this.props.handleChange}/>
          <label>Password :</label>
          <input name="pass1" type="password" onChange={this.props.handleChange}/>
          <button>Login</button>
          <a href="/signup">Signup</a>
        </form>
      </div>
    )
  }
}

export default Event
