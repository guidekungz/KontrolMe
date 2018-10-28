import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {  Container, Header, Form, Input, Content, Item, Thumbnail, Button } from 'native-base';

export default class LoginScreen extends Component {
  render() {
    return (
      <Container style={{justifyContent: 'flex-end'}}>
        <Header span style={styles.header}>
          <Thumbnail large source={require('../assets/images/robot-prod.png')} style={styles.logoLogin} />
        </Header>
        <Content style={{flex: 1}}>
          <Form>
            <Item regular>
              <Input placeholder='Username' />
            </Item>
            <Item regular>
              <Input placeholder='Password' />
            </Item>
          </Form>
        </Content>
        <Content style={styles.loginBtnPanel}>
          <Button block light style={{bottom:0}} onPress={() => this.props.onLogin()}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 190,
    backgroundColor: '#2699FB',
    
  },
  logoLogin: {
    marginTop: 120,
    position: 'absolute',
    zIndex: 10,
  },
  loginBtnPanel: {
    
  }
  
});