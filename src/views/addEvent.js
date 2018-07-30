import React, { Component } from 'react';
import cities from '../assets/world-cities_json.json'

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
          <label>Date :</label>
          <input name="date" onChange={this.props.handleChange} />
          <label>Location :</label>
          <input name="location" onChange={this.props.handleChange}/>
          <label>City :</label>
          <select name="city-specific" onChange={this.props.handleChange}>
          {
            cities.map(item =>
              <option>{item.name}</option>
            )
          }
          </select>
          <button onClick={this.props.postAddEvent}>Submit</button>
        </form>
      </div>
    )
  }
}

export default addEvent;
