import React, { Component } from 'react';
import MainBlock from './components/MainBlock.js';
import './App.css';


const titleStyle = {
  display: 'flex',
  borderRadius: 8,
  marginLeft: '32%',
  marginTop: '1%',
  color: 'white',
  textShadow: '6px 6px 0px rgba(0,0,0,0.2)',
}


export default class App extends Component {
  render() {
   return (
     <div>
     <h1 style={titleStyle}>Generates random news articles</h1>
      <MainBlock />
      <MainBlock />
      <MainBlock />
      <MainBlock />
     </div>
    );
  }
}
