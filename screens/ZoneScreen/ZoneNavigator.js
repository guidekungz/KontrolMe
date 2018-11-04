import { createStackNavigator } from 'react-navigation';

import ZoneHomeContainer from '../../containers/ZoneContainer/ZoneHomeContainer';
import ZoneDeviceHome from './ZoneDeviceHome';

export default createStackNavigator({
    ZoneHome: { screen: ZoneHomeContainer },
    ZoneDevices: { screen: ZoneDeviceHome }
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