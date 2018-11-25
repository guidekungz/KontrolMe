import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Modal
} from 'react-native';


import { Thumbnail, Icon, Text, Item, Label, Input, Button, ActionSheet, Container, Header, Content, Form, Left, Body, Right, Title, Footer, Picker  } from 'native-base';

import { Dialog } from 'react-native-simple-dialogs';

import { ImagePicker, Permissions } from 'expo';

import { Col, Row, Grid } from "react-native-easy-grid";


import DeviceNavigator from './DeviceNavigator';


const BUTTONS = ["Take a photo", "Choose from gallery", "Cancel"];
const DESTRUCTIVE_INDEX = 1;
const CANCEL_INDEX = 2;

const TEMP_DEVICE = [
  {
    "model": "Test_2_switch",
    "serial": "test2",
    "switchs": [
    {
      "key": 1,
      "id": 1,
      "status": "on",
      "name":"sw1"
    },
    {
      "key": 2,
      "id": 2,
      "status": "on"
    }]
  },
  {
    "model": "Test_1_switch",
    "serial": "test1",
    "switchs": [
    {
      "key": 1,
      "id": 1,
      "status": "on"
    }]
  },
  {
    "model": "Test_3_switch",
    "serial": "test3",
    "switchs": [
    {
      "key": 1,
      "id": 1,
      "status": "on"
    },
    {
      "key": 2,
      "id": 2,
      "status": "on"
    },
    {
      "key": 3,
      "id": 3,
      "status": "on"
    }]
  },
  {
    "model": "Test_4_switch",
    "serial": "test4",
    "switchs": [
    {
      "key": 1,
      "id": 1,
      "status": "on"
    },
    {
      "key": 2,
      "id": 2,
      "status": "on"
    },
    {
      "key": 3,
      "id": 3,
      "status": "on"
    },
    {
      "key": 4,
      "id": 4,
      "status": "on"
    }]
  }
  
];

export default class DeviceAddDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
      shortName: '',
      imageUrl: '',
      showAddZoneDialog: props.showDialog
    };
    console.log('DeviceAddDialog props', props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps nextProps', nextProps);
    console.log('getDerivedStateFromProps prevState', prevState);
    if (nextProps.showDialog === true) {
      return { step: 1 };
    }
    return null;
    }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('DeviceAddDialog shouldComponentUpdate',nextProps,nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('DeviceAddDialog getSnapshotBeforeUpdate prevProps', prevProps);
    console.log('DeviceAddDialog getSnapshotBeforeUpdate prevState', prevState);
    
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('DeviceAddDialog componentDidUpdate');
    // console.log('DeviceAddDialog prevProps',prevProps);
    // console.log('DeviceAddDialog prevState',prevState);
    // console.log('DeviceAddDialog this.state',this.state);
    // if(!(prevProps.showDialog)){
    //   this.state = {...this.state , step: 1};
    // }
  }
  componentWillUnmount() {
    console.log('DeviceAddDialog componentWillUnmount');
  }

  pickFromGallery = async () => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);

    console.log(permissions, status);
    if(status === 'granted') {
      let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
      }).catch(error => console.log(permissions, { error }));
      console.log(permissions, 'SUCCESS', image);
      if(image && !image.cancelled){
        this.setState({ imageUrl: image.uri });
      }else{
        this.setState({ imageUrl: null });
      }
    }
  }

  pickFromCamera = async () => {
    const permissions = Permissions.CAMERA;
    const { status } = await Permissions.askAsync(permissions);

    console.log(permissions, status);
    if(status === 'granted') {
      let image = await ImagePicker.launchCameraAsync({
        mediaTypes: 'Images',
      }).catch(error => console.log(permissions, { error }));
      console.log(permissions, 'SUCCESS', image);
      if(image && !image.cancelled){
        this.setState({ imageUrl: image.uri });
      }else{
        this.setState({ imageUrl: null });
      }
    }
  }

  selectPhoto = () => 
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: "Select a photo"
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            this.pickFromCamera();
            break;
          case 1:
          this.pickFromGallery();
            break;
          default:
            this.setState({ imageUrl: null });
            break;
        }
        console.log('buttonIndex', buttonIndex);
      }
    )
  ;

  onNextStep = () => {
    // this.props.toggleAddZoneDialog(show);
    // this.props.showAddZoneDialog = show;
    if(this.state.step == 1){
      let rand = Math.floor(Math.random() * (4))
      let deviceData = TEMP_DEVICE[rand];
      deviceData.key = (new Date()).getTime();
      deviceData.id = (new Date()).getTime();
      deviceData.name = "";
      deviceData.shortName = "";
      deviceData.image = "";
      this.setState({step: this.state.step+1, deviceData: deviceData});
    }else{
      this.setState({step: this.state.step+1});
    }
  };

  openDialog = (show) => {
    // this.props.toggleAddZoneDialog(show);
    // this.props.showAddZoneDialog = show;

    this.props.onShowDialog(show);
  };

  doAddDevice = () => {
    let data = this.state.deviceData;
    data.key = (new Date()).getTime();
    data.id = (new Date()).getTime();
    data.name = this.state.name;
    data.shortName = this.state.shortName;
    data.image = this.state.imageUrl;
    this.setState({
      name: '',
      shortName: '',
      imageUrl: ''
    })
    this.props.onAddData(data);
    // "key": 1,
    // "id": 1,
    // "name": "หน้าบ้าน",
    // "shortName": "นบ",
  };

  closeModal = ()=>{
    console.log('closeModal');
  };

  renderButton = () => {
    if(this.state.step < 3){
      return <Button  full onPress={ () => this.onNextStep() } style={{backgroundColor: '#2699FB'}}>
        <Text>Next</Text>
      </Button>      
    } else {
      return <Button  full onPress={ () => this.doAddDevice() } style={{backgroundColor: '#2699FB'}} >
        <Text>Save</Text>
      </Button>
    }
  };

  renderStep = () => {
    switch (this.state.step) {
      case 1:
        return <Content>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Icon name='wifi' style={{
                    fontSize: 150,
                  }} />
                </View>
                <Form>
                  <Item fixedLabel>
                    <Label>SSID</Label>
                    <Picker
                      style={{ height: 50, width: 250 }}
                      >
                      <Picker.Item label="wifi 1" value="java" />
                      <Picker.Item label="wifi 2" value="js" />
                      <Picker.Item label="wifi 3" value="wifi3" />
                    </Picker>
                  </Item>
                  <Item fixedLabel last>
                    <Label>Password</Label>
                    <Input secureTextEntry={true} />
                  </Item>
                </Form>
              </Content>
      case 2:
        return  <Content>
                  <Form>
                    <Item fixedLabel>
                      <Label>Model</Label>
                      <Text>{this.state.deviceData.model}</Text>
                    </Item>
                    <Item fixedLabel>
                      <Label>Serial</Label>
                      <Text>{this.state.deviceData.serial}</Text>
                    </Item>
                  </Form>
                </Content> 
      default:
        return  <Content>
                  <View style={styles.formAddPanel}>

                  
                  <View style={styles.imagePickerBox}>
                      <Thumbnail square style={styles.imagePicker} source={{uri: !(this.state.imageUrl) ? "https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png" : this.state.imageUrl  }} 
                          />
                      <TouchableOpacity style={styles.imagePickerBtnPanel} onPress={this.selectPhoto}>
                        <Icon name="camera" size={30} color="#FFF" style={styles.imagePickerBtn} />
                      </TouchableOpacity>
                  </View>
                </View>
                <Form>
                  <Item fixedLabel>
                    <Label>Name</Label>
                    <Input value={this.state.name}
                      onChangeText={ (text) => this.setState({ name: text }) }/>
                  </Item>
                  <Item fixedLabel>
                    <Label>Short label tag</Label>
                    <Input value={this.state.shortName}
                      onChangeText={ (text) => this.setState({ shortName: text }) }/>
                  </Item>
                  <Item fixedLabel>
                    <Label>Model</Label>
                    <Text style={{alignItems: 'center'}}>{this.state.deviceData.model}</Text>
                  </Item>
                  <Item fixedLabel>
                    <Label>Serial</Label>
                    <Text>{this.state.deviceData.serial}</Text>
                  </Item>
                </Form>
              </Content>
    }
  }

  render() {

    const fields = [
      {
        type: 'text',
        name: 'user_name',
        required: true,
        icon: 'ios-person',
        label: 'Username',
      },
      {
        type: 'password',
        name: 'password',
        icon: 'ios-lock',
        required: true,
        label: 'Password',
      },
      {
        type: 'picker',
        name: 'country',
        mode: 'dialog',
        label: 'Select Country',
        defaultValue: 'INDIA',
        options: ['US', 'INDIA', 'UK', 'CHINA', 'FRANCE'],
      },
    ];

    

    return (
      <Modal
      transparent={true}
          animationType="fade"
          contentStyle={
              {
                  alignItems: "center",
                  justifyContent: "center",
              }
          }
          onRequestClose={this.closeModal}
          visible={ this.props.showDialog }
          
        >
            <View  style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#00000080'
            }}>

            
              <View style={{
                      width: 400,
                      height: 500,
                      backgroundColor: '#FFF'
                      }}>
                <Header style={{backgroundColor: '#2699FB'}}>
                  <Body>
                    <Title>Add Device</Title>
                  </Body>
                  <Right>
                    <Button hasText transparent onPress={ () => this.openDialog(false) }>
                      <Icon name='close' />
                    </Button>
                  </Right>
                </Header>
                {/* <GenerateForm
                  ref={(c) => {
                    this.formGenerator = c;
                  }}
                  fields={fields}
                /> */}
                <this.renderStep />
                {/* <DeviceNavigator openAddZoneDialog={this.openAddZoneDialog} /> */}
                <Footer style={{backgroundColor: '#2699FB'}}>
                  <Body>
                    <this.renderButton />
                  </Body>
                  
                </Footer>
              </View>
            </View> 
          
          
      </Modal>
    );
  }
 
}

const styles = StyleSheet.create({
  imagePickerBox: {
    position: 'relative',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: 150,
    height: 150,
  },
  imagePicker:{
    position: 'absolute',
    width: 150,
    height: 150,
  },
  imagePickerBtnPanel: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  imagePickerBtn: {
    flex: 1,
    marginTop: 20
  },
  formAddPanel: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    
  }
  
});
