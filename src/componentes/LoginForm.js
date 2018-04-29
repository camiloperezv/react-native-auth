import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Input, Button, Card, CardSection, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', errorMessage: '', loading: false };
  
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ errorMessage: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({ 
      loading: false,
      email: '',
      password: '',
      errorMessage: ''
    });
  }

  onLoginFailed() {
    this.setState({ 
      errorMessage: 'Authentication failed',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label={'Email'} 
            placeholder={'email@youremail.com'}
            value={this.state.email} 
            onChange={email => this.setState({ email })} 
          />
        </CardSection>
        
        <CardSection>
          <Input 
            secureText
            label={'Password'} 
            placeholder={'********'}
            value={this.state.password} 
            onChange={password => this.setState({ password })} 
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.errorMessage}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
export default LoginForm;
