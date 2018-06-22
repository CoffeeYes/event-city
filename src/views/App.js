import React, { Component } from 'react';
import '../stylesheets/App.css';
import SearchBar from './searchbar';
import {Route} from 'react-router-dom';
import EventResult from './eventresult';
import createBrowserHistory from 'history/createBrowserHistory';
import Event_component from './event';
import Login from './login';
import Signup from './signup';
import NavBar from './navbar';

const history = createBrowserHistory()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'searchText' : '',
      'test_value_get': '',
      'city_arr_test' : [],
      'loading' : false,
      'city' : '',
      'city_events' : [],
      'current_event' : '',
      'event_data' : {},
      'user_data' : {
        'username' : '',
        'email' : '',
        'password1' : '',
        'password2' : '',
        'loggedIn' : '',
      }
    }

    this.updateSearchText = this.updateSearchText.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEventClick = this.handleEventClick.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  componentDidMount() {
    fetch('/api/test')
      .then( res => res.json())
      .then( data => this.setState({'test_value_get' : data.test_key}))
  }

  //update state of input searchbar
  updateSearchText(event) {
    this.setState({'searchText' : event.target.value},function() {
      if(this.state.searchText.trim() !== '') {
        this.setState({'loading' : true})
      }
      else {
        this.setState({'loading' : false})
      }
      fetch('/api/cities?query=' + this.state.searchText)
        .then( res => res.json())
        .then( data => this.setState({city_arr_test : data}))
    })
  }

  //handleclick on a searchresult when searching for cities
  handleClick(event,props) {
    this.setState({'city_arr_test' : []},function() {
      var city = window.location.href.split('/city/')[1]
      this.setState({'city' : city},function() {
        fetch('/api/city/' + this.state.city)
          .then( res => res.json())
          .then( data => this.setState({'city_events' : data}))
      })
    })
  }

  //handle click for search result of events happening in a city
  handleEventClick(eventID) {
    this.setState({'current_event' : eventID},function() {
      fetch('/event/?query=' + this.state.current_event)
        .then(res => res.json())
        .then( data => this.setState({'event_data' : data}))
    })
  }

  //handle state of userinfo for signing up
  handleSignup(event) {
    event.preventDefault();
    fetch('/signup', {
      method : 'POST'
    })
  }
  
  render() {
    return(
      <div>
        <NavBar handleChange={this.updateSearchText} value={this.state.searchText} list={this.state.city_arr_test} handleClick={this.handleClick}/>
        <div className="content-container">
          <Route path='/city/*' render={(props) => (
            <EventResult list={this.state.city_events} handleClick={this.handleEventClick}/>
          )}/>
          <Route path='/event/*' render={(props) => (
            <Event_component data={this.state.event_data}/>
          )}/>
          <Route exact path='/login' render={(props) => (
            <Login />
          )}/>
          <Route exact path='/signup' render={() => (
            <Signup handleSignup={this.handleSignup} />
          )}/>
        </div>
      </div>
    )
  }
}

export default App;
