import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/index.css';

class searchBar extends Component {
  render() {
    return (
      <div className="searchBar">
          <input className="searchfield" />
      </div>
    )
  }
}

export default searchBar
