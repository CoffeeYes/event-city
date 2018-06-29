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
      'error' : '',
      'user_data' : {
        'user' : '',
        'email' : '',
        'pass1' : '',
        'pass2' : '',
      },
      'loggedIn' : false
    }

    this.updateSearchText = this.updateSearchText.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEventClick = this.handleEventClick.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleUserState = this.handleUserState.bind(this);
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

  //handle backend data transfer of userinfo for signing up
  handleSignup(event) {
    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    event.preventDefault();
    //reset error
    this.setState({error: ""})
    //check for empty fields
    for(var item in this.state.user_data) {
      if(this.state.user_data[item].trim() == "") {
        return this.setState({error : "fields cannot be empty"})
      }
    }
    //check password match
    if(this.state.user_data.pass1 != this.state.user_data.pass2) {
      return this.setState({error: "Passwords do not match"})
    }

    if(email_regex.test(this.state.user_data.email) == false) {
      return this.setState({error: "Invalid email address"})
    }
    //post data to backend
    fetch('/signup', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(this.state.user_data)
    })
    .then(res => res.json())
    .then(data => {
      this.setState({error : data.error})
    })
  }


  //user state handler for signup form, takes current state of user_data and appends state depending on name of input being changed
  handleUserState(event) {
    this.setState({'user_data' : {...this.state.user_data,[event.target.name] : event.target.value}})
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
            <Signup handleSignup={this.handleSignup} handleChange={this.handleUserState} error={this.state.error}/>
          )}/>
        </div>
      </div>
    )
  }
}

export default App;
