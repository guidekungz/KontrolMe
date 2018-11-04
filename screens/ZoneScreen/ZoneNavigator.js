import { createStackNavigator } from 'react-navigation';

import ZoneHomeContainer from '../../containers/ZoneContainer/ZoneHomeContainer';
import ZoneDeviceHome from './ZoneDeviceHome';
import ZoneSwitchHome from './ZoneSwitchHome';

export default createStackNavigator({
    ZoneHome: { screen: ZoneHomeContainer },
    ZoneDevices: { screen: ZoneDeviceHome },
    ZoneSwitchs: { screen: ZoneSwitchHome }
},
{
  initialRouteName: 'ZoneHome',
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
    },
  }
});