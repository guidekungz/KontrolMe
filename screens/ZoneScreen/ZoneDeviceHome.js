import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { HeaderApp } from '../../components/HeaderApp';
import DeviceList from './DeviceList';

export default class ZoneDeviceHome extends Component {

  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);
    const { navigation } = props;
    const {setParams, getParam} = navigation;
    const deviceData = getParam('deviceData');
    setParams({ title: deviceData.name });
    this.state = {
      deviceData: deviceData
    };

    // let zoneList = this.state.zoneDataList;
    console.log('ZoneDeviceHome constructor');
    
    
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderApp uri={this.state.deviceData.image} />
        <View style={styles.contentContainer}>
          <DeviceList dataList={this.state.deviceData.devices} />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 50,
    flex: 1,
  }
});