import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity
} from 'react-native';


import { Thumbnail, Icon, Text, Item, Label, Input, Button, ActionSheet } from 'native-base';

import { Dialog } from 'react-native-simple-dialogs';

import { ImagePicker, Permissions } from 'expo';

import { Col, Row, Grid } from "react-native-easy-grid";


const BUTTONS = ["Take a photo", "Choose from gallery", "Cancel"];
const DESTRUCTIVE_INDEX = 1;
const CANCEL_INDEX = 2;

export default class ZoneAddDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoneName: '',
      shortZoneName: '',
      zoneImageUrl: '',
      showAddZoneDialog: props.showAddZoneDialog
    };
    console.log('ZoneAddDialog props', props);
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('ZoneAddDialog shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('ZoneAddDialog getSnapshotBeforeUpdate prevProps', prevProps);
    console.log('ZoneAddDialog getSnapshotBeforeUpdate prevState', prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ZoneAddDialog componentDidUpdate');
    console.log('ZoneAddDialog prevProps',prevProps);
    console.log('ZoneAddDialog prevState',prevState);
    console.log('ZoneAddDialog this.state',this.state);
  }
  componentWillUnmount() {
    console.log('ZoneAddDialog componentWillUnmount');
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
        this.setState({ zoneImageUrl: image.uri });
      }else{
        this.setState({ zoneImageUrl: null });
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
        this.setState({ zoneImageUrl: image.uri });
      }else{
        this.setState({ zoneImageUrl: null });
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
            this.setState({ zoneImageUrl: null });
            break;
        }
        console.log('buttonIndex', buttonIndex);
      }
    )
  ;

  openAddZoneDialog = (show) => {
    // this.props.toggleAddZoneDialog(show);
    // this.props.showAddZoneDialog = show;
    this.props.onShowDialog(show);
  };

  doAddZone = () => {
    let data = {};
    data.key = (new Date()).getTime();
    data.id = (new Date()).getTime();
    data.name = this.state.zoneName;
    data.shortName = this.state.shortZoneName;
    data.image = this.state.zoneImageUrl;
    console.log('doAddZone data', data);
    console.log('doAddZone state', this.state);
    this.setState({
      zoneName: '',
      shortZoneName: '',
      zoneImageUrl: ''
    })
    this.props.onAddData(data);
    // "key": 1,
    // "id": 1,
    // "name": "หน้าบ้าน",
    // "shortName": "นบ",
  };

  render() {
    return (
      <Dialog
          title="Create Zone"
          animationType="fade"
          contentStyle={
              {
                  alignItems: "center",
                  justifyContent: "center",
              }
          }
          visible={ this.props.showAddZoneDialog }
        >
          <View style={styles.imagePickerBox}>
            <Thumbnail square style={styles.imagePicker} source={{uri: !(this.state.zoneImageUrl) ? "https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png" : this.state.zoneImageUrl  }} 
                />
            <TouchableOpacity style={styles.imagePickerBtnPanel} onPress={this.selectPhoto}>
              <Icon name="camera" size={30} color="#FFF" style={styles.imagePickerBtn} />
            </TouchableOpacity>
          </View>
          <View style={styles.formAddPanel} >
            <Item >
              <Label>Zone Name</Label>
              <Input value={this.state.zoneName}
                onChangeText={ (text) => this.setState({ zoneName: text }) }/>
            </Item>
            <Item >
              <Label>Short label tag</Label>
              <Input value={this.state.shortZoneName}
                onChangeText={ (text) => this.setState({ shortZoneName: text }) }/>
            </Item>
          </View>
          <Grid style={{paddingTop: 50, paddingBottom: 50}}>
            <Col>
              <Button full onPress={ () => this.openAddZoneDialog(false) }>
                <Text>Close</Text>
              </Button>
            </Col>
            <Col>
              <Button full success onPress={ () => this.doAddZone() } >
                <Text>Save</Text>
              </Button>
            </Col>
          </Grid>
          
      </Dialog>
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
  },
  btn: {
    paddingTop: 50
  }
  
});
