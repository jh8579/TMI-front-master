import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './assets/components/Navigator'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Nav></Nav>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
