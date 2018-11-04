import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { HeaderApp } from '../../components/HeaderApp';
import SwitchList from './SwitchList';

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
        <View style={styles.contentContainer}>
          <SwitchList dataList={this.state.switchData.switchs} />
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