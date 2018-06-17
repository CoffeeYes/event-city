import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return(
      <form action="/signup" method="post">
      <label>Username :</label>
      <input name="user"/>
      <label>Email :</label>
      <input name="email"/>
      <label>Password :</label>
      <input name="pass1" type="password"/>
      <label>Repeat Password :</label>
      <input name="pass2" type="password"/>
      <button onClick={this.props.handleSignup}>Signup</button>
      </form>
    )
  }
}

export default Signup
