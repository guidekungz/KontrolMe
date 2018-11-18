import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Icon, Button} from 'native-base';

export default class Device1 extends Component {
  constructor(props) {
    super(props);
    console.log('Device1 props', props);
  }
  static navigationOptions = {
    title : "Add Device",
    headerRight: (
      <TouchableOpacity onPress={() => {
          this.props.openAddZoneDialog(false);
        }} >
        <Icon name='home' />
      </TouchableOpacity>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> 1 </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    
});