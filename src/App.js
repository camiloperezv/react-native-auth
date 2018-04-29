import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './componentes/common';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <Text> Some Text </Text>
      </View>
    );
  }
}

export default App;
