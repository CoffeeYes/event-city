import React, { Component } from 'react';
import SearchBar from './searchbar';

class Event extends Component {
  render() {
    if(this.props.loggedIn === false) {
      return(
        <div className="navbar">
          <SearchBar handleChange={this.props.handleChange} value={this.props.value} list={this.props.list} handleClick={this.props.handleClick }/>
          <a href="/login" className="loginLink">Login </a>
          <a href="Signup" className="loginLink">Signup</a>
        </div>
      )
    }
    else {
      return (
        <div className="navbar">
          <SearchBar handleChange={this.props.handleChange} value={this.props.value} list={this.props.list} handleClick={this.props.handleClick }/>
          <a href="/"className="loginLink">Logout</a>
        </div>
      )
    }
  }
}

export default Event
