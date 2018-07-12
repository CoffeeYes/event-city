import React, { Component } from 'react';
import SearchBar from './searchbar';

class Event extends Component {
  render() {
    //conditional render based on login status
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
          <a href="/add-event" className="loginLink">Add Event</a>
          <a href="/"className="loginLink" onClick={this.props.logout}>Logout</a>
        </div>
      )
    }
  }
}

export default Event
