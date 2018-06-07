import React, { Component } from 'react';
import SearchBar from './searchbar';
import Login from './login';

class Event extends Component {
  render() {
    return(
      <div className="navbar">
        <SearchBar handleChange={this.props.handleChange} value={this.props.value} list={this.props.list} handleClick={this.props.handleClick }/>
        <a href="/login">Login </a>
      </div>
    )
  }
}

export default Event
