import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAcnP6mzI8JtqDMLuXtsAXg_67kf-Lvk1E",
    authDomain: "reactfirebase-c1935.firebaseapp.com",
    databaseURL: "https://reactfirebase-c1935.firebaseio.com",
    projectId: "reactfirebase-c1935",
    storageBucket: "reactfirebase-c1935.appspot.com",
    messagingSenderId: "826828054647"
  };
  firebase.initializeApp(config);


class App extends Component {
  constructor() {
    super()
    console.log(firebase.database());
  }
  render() {
    return (
      <div className="App">
        <h1>Bienvenido a la red social</h1>
        <Login/>
        <Home/>
      </div>
    );
  }
}

export default App;
