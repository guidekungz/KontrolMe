import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {  Header, Body, Thumbnail } from 'native-base';

export class HeaderApp extends React.Component {
  render() {
    return (
      <Header style={styles.header}>
        <Body style={styles.headerBody}>
          <Thumbnail large source={{uri :this.props.uri}} style={styles.picture} />
        </Body>
      </Header>
    );
  }
}

const styles = StyleSheet.create({

  picture:{
    height: 150,
    width: 150,
    borderRadius: 150/2,
    marginTop: 50,
  },
  header: {
    height: (Dimensions.get('window').height * (0.15)),
    backgroundColor: '#2699FB'
    
  },
  headerBody: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
});
