import React, {Component} from 'react'
import { createStackNavigator } from 'react-navigation';

import Device1 from './Device1';
import Device2 from './Device2';
import Device3 from './Device3';

const paramsToProps = (SomeComponent) => { 
  // turns this.props.navigation.state.params into this.params.<x>
      return class extends Component {
          render() {
              const {navigation, ...otherProps} = this.props
              const {state: {params}} = navigation
              return <SomeComponent {...this.props} {...params} />
          }
      }
  }

export default createStackNavigator({
    Device1: {
      screen: Device1
    },
    Device2: { screen: Device2 },
    Device3: { screen: Device3 },
    
},
{
  initialRouteName: 'Device1',
  headerMode: 'float',
  headerTransitionPreset: 'fade-in-place',
  headerLayoutPreset: 'center',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#2699FB',
    },
    title: 'Zone',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
});

