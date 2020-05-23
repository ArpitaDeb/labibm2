import React from 'react';
import ReactDOM from 'react-dom';
const virus = "corona";
const year = new Date().getFullYear();

ReactDOM.render(
  <div> 
  <h1>Canada is affected by {virus}</h1>
  <p>number of death is countable {Math.floor(Math.random() * 10)}</p>
  <p>it strated spreading in {year}</p>
  </div>,
  document.querySelector('#root'));