import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return(
      <form action="/signup" method="post">
      <p className="error">{this.props.error}</p>
      <label>Username :</label>
      <input name="user" onChange={this.props.handleChange}/>
      <label>Email :</label>
      <input name="email" onChange={this.props.handleChange}/>
      <label>Password :</label>
      <input name="pass1" type="password" onChange={this.props.handleChange}/>
      <label>Repeat Password :</label>
      <input name="pass2" type="password" onChange={this.props.handleChange}/>
      <button onClick={this.props.handleSignup}>Signup</button>
      </form>
    )
  }
}

export default Signup
