import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from '@firebase/app';
import '@firebase/auth';

class App extends Component {
  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;