import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCFBwYoRixKhMUx21CG0rUE4qtATMKeq4E',
      authDomain: 'authentication-9e1ca.firebaseapp.com',
      databaseURL: 'https://authentication-9e1ca.firebaseio.com',
      storageBucket: 'authentication-9e1ca.appspot.com',
      messagingSenderId: '459423795567'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
