import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { HeaderApp } from '../../components/HeaderApp';
import SwitchList from './SwitchList';

import {Button, Icon, Text, Content, Footer } from 'native-base';

export default class ZoneSwitchHome extends Component {

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
    const switchData = getParam('switchData');
    setParams({ title: switchData.name });
    this.state = {
      switchData: switchData
    };

    // let zoneList = this.state.zoneDataList;
    console.log('ZoneSwitchHome constructor');
    
    
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderApp uri={this.state.switchData.image} />
        <View style={{margin:5,paddingTop: 40}}>
          <Text>Model : {this.state.switchData.model}</Text>
          <Text>Serial : {this.state.switchData.serial}</Text>
        </View>
        <View style={styles.contentContainer}>
          <SwitchList dataList={this.state.switchData.switchs} />
        </View>
        <Footer style={{backgroundColor: '#fff'}}>
          <Button light style={styles.btnBottom}><Text>Scheduler</Text></Button>
          <Button light style={styles.btnBottom}><Text>Timer</Text></Button>
        </Footer>
        
        
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
    paddingTop: 0,
    flex: 1,
  },
  btnBottom: {
    margin: 5
  }
});