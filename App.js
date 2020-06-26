import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen.js';

export default class App extends React.Component {
  render() {
  return (
    <View style={{flex:1}}>
    <WelcomeScreen/>
    </View>
  );
}
}
