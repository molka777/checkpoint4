import React from 'react';
import logo from '../src/morphus.jpg';
import './App.css';
import Profile from './profile/Profile.js'


function App() {

  return (
    <Profile name="Morphus" bio=" Maintenance en informatique et réseaux informatique" profession="fondateur">{logo}</Profile>
  );
}

export default App;
