import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Device1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> 2 </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  container: {
      flex: 1
  }
  
});