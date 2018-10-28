import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {  Header, Body, Thumbnail } from 'native-base';

export class HeaderApp extends React.Component {
  render() {
    return (
      <Header style={styles.header}>
        <Body style={styles.headerBody}>
          <Thumbnail large source={require('../assets/images/robot-prod.png')} style={styles.profilePicture} />
        </Body>
      </Header>
    );
  }
}

const styles = StyleSheet.create({

  profilePicture:{
    height: 150,
    width: 150,
    borderRadius: 150/2,
    marginTop: 90,
  },
  header: {
    height: (Dimensions.get('window').height * (0.25)),
    paddingTop: 25,
    
  },
  headerBody: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
});
