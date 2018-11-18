import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { HeaderApp } from '../../components/HeaderApp';
import DeviceList from './DeviceList';
import DeviceAddDialog from './DeviceAddDialog';



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
      deviceData: deviceData,
      openDialog: false
    };

    // let zoneList = this.state.zoneDataList;
    console.log('ZoneDeviceHome constructor');
    
    
  }

  showSwitch = (data) => {
    // console.log('showDevice', data);
    this.props.navigation.navigate('ZoneSwitchs', { switchData : data});
  };

  showDialog = (flag) => {
    console.log('ZoneDeviceHome showDialog', flag);
    // this.props.toggleAddZoneDialog(flag);
    this.setState({openDialog: flag});
  };

  onAddData = (data) => {
    console.log('onAddData', data);
    let deviceList = this.state.deviceData.devices;
    deviceList = [...deviceList, data];
    let deviceData = this.state.deviceData;
    deviceData.devices = deviceList;
    this.setState({deviceData: deviceData});
    this.showDialog(false);
    
  };

  

  render() {
    
    return (
      <View style={styles.container}>
        <HeaderApp uri={this.state.deviceData.image} />
        <View style={styles.contentContainer}>
        
          <DeviceList dataList={this.state.deviceData.devices} onPressData={this.showSwitch} onShowDialog={this.showDialog} />
          <DeviceAddDialog showDialog={this.state.openDialog} onShowDialog={this.showDialog} onAddData={this.onAddData} />
          
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