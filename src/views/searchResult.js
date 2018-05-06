import React, { Component } from 'react';

function SearchResult(props) {
    return(
      <div className="searchresult">
        <p>{props.value}</p>
      </div>
    )
  }


export default SearchResult;
