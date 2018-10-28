import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';


import {  Header, Left, Body, Right, Title, Thumbnail, List, ListItem, Icon, Content } from 'native-base';


const data = [
  { key: 0, name: 'SW1', expiration : '07/07/2018' }, { key: 1, name: 'SW2', expiration : '08/08/2018' }, { key: 2, name: 'SW3', expiration : 'No' }
];

const renderItem = () => {
  return (
    data.map(d => (
      <ListItem key={d.key}>
        <Body>
          <Text>Device Name: {d.name}</Text>
          <Text note>Expiration: {d.expiration}</Text>
        </Body>
        <Right style={{justifyContent: 'center'}}>
          <Content >
            <Icon name='trash' />
          </Content>
          
        </Right>
      </ListItem>
    ))
  );
};

export default class ShareScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}>
          <Body style={styles.headerBody}>
            <Thumbnail large source={require('../../assets/images/robot-prod.png')} style={styles.profilePicture} />
          </Body>
        </Header>
        <View style={styles.contentContainer}>
          <ScrollView style={styles.container}>
            <List>
              <ListItem >
                <Left>
                  <Text>Profile</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
              <Left>
                  <Text>General</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Monitor</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Feedback</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>About</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </ScrollView>
        </View>
      </View>
    );
  }



 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profilePicture:{
    height: 150,
    width: 150,
    borderRadius: 150/2,
    marginTop: 90,
  },
  header: {
    backgroundColor: '#2699FB',
    height: (Dimensions.get('window').height * (0.25)),
    paddingTop: 25,
    
  },
  headerBody: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },  
  contentContainer: {
    paddingTop: 30,
    flex: 1,
  }
});
