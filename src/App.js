import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome'
import Hello from './Component/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="Sneha" id="1"> This is first greet</Greet>
      <Greet name="Sneha1" id="2"> This is 2nd greet</Greet>
      <Greet name="Sneha2" id="3">This is 3rd greet</Greet>
      <Welcome name="Sneha" id="1">This is Child attibute of Welcome</Welcome>
      <Hello/>
    </div>
  );
}

export default App;
