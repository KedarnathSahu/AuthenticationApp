import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from '@firebase/app';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCwFwW04lIiGg2QcriboLi2dp5u1SnljGs',
      authDomain: 'authentication-9c40d.firebaseapp.com',
      databaseURL: 'https://authentication-9c40d.firebaseio.com',
      projectId: 'authentication-9c40d',
      storageBucket: 'authentication-9c40d.appspot.com',
      messagingSenderId: '493565089552',
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;