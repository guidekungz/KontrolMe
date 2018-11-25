import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

import { HeaderAppEdit } from '../../components/HeaderAppEdit';
import DeviceListEdit from './DeviceListEdit';
import DeviceAddDialog from './DeviceAddDialog';
import { Icon, Input } from 'native-base';



export default class ZoneDeviceEdit extends Component {

  static navigationOptions = ({ navigation }) => {
    const {state, getParam, setParams} = navigation;
    const deviceData = getParam('deviceData');
    const title = getParam('title');
    return {
      headerTitle: 
        <Input value={title} onChangeText={ (text) => setParams({ title: text }) } />,
      headerRight:
        <TouchableOpacity>
          <Icon style={styles.titleEditBtn} type="FontAwesome" name="save"></Icon>
        </TouchableOpacity>
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
        <HeaderAppEdit uri={this.state.deviceData.image} />
        <View style={styles.contentContainer}>
        
          <DeviceListEdit dataList={this.state.deviceData.devices} onPressData={this.showSwitch} onShowDialog={this.showDialog} />
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
  },
  titleEditBtn: {
    color: '#fff',
    marginRight: 20
  }
});