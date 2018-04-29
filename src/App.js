import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './componentes/common';
import LoginFrom from './componentes/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBQ0ZXDflE_2RfXJZU4FLdUG-GvyMrfQjs',
      authDomain: 'react-native-auth-a8958.firebaseapp.com',
      databaseURL: 'https://react-native-auth-a8958.firebaseio.com',
      projectId: 'react-native-auth-a8958',
      storageBucket: 'react-native-auth-a8958.appspot.com',
      messagingSenderId: '392792975619'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return this.setState({ loggedIn: true });
      }
      return this.setState({ loggedIn: false });
    });
  }
  logOut() {
    firebase.auth().signOut();
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={this.logOut.bind(this)}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginFrom />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}
const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default App;
