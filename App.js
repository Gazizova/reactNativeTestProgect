import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import { relative } from 'path';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Welcome!</Text>
          {/* <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text> */}
        </View>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box1: {
    marginTop: 20,
    height: 50,
    width: 50,
    backgroundColor: 'skyblue'
  },
  box2: {
    height: 50,
    width: 50,
    backgroundColor: 'blue'
  },
  container: {
    position: 'relative',
    justifyContent: 'center',
    // flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#30d0fe',
    height: 116,
    paddingLeft: 22,
    paddingTop: 71,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2
  },
  textStyle: {
    fontSize: 28,
    textAlign: 'center',
    // margin: 10,
    color: 'white'
  }
});
