import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
// import { runInThisContext } from 'vm';
// import { relative } from 'path';
import ImageCard from './src/components/ImageCard';
import { h, w } from './constants';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

const url =
  'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'StarGate',
      value: '',
      data: [],
      image: []
    };
    console.log('constructor');
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data });
      console.log(data);
    } catch (error) {
      throw error;
    }
  };

  render() {
    console.log(w, h);
    const { container, containerList, textInputStyle } = styles;
    return (
      <ScrollView>
        <View style={container}>
          <Text style={styles.textStyle}>Welcome!</Text>
        </View>
        <TextInput
          style={textInputStyle}
          placeholder="Input something"
          onChangeText={value => this.setState({ value })}
        />
        <View style={containerList}>
          {this.state.data.map(i => (
            <ImageCard key={i.id} text={i.name} uri={i.image} />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerList: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 100
  },
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
    color: 'white'
  },
  textInputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40
  }
});
