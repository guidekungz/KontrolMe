import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text as NBText } from 'native-base'

import ZoneNavigator from '../screens/ZoneScreen/ZoneNavigator';
import SceneScreen from '../screens/SceneScreen/SceneHome';
import ShareScreen from '../screens/ShareScreen/ShareHome';
import SettingsScreen from '../screens/SettingScreen/SettingHome';
import ZoneHomeContainer from '../containers/ZoneContainer/ZoneHomeContainer';

export default createBottomTabNavigator({
  Zone: { screen: ZoneNavigator },
  Scene: { screen: SceneScreen },
  Share: { screen: ShareScreen },
  Setting: { screen: SettingsScreen }
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: props => {
        return (
            <Footer >
                <FooterTab style={{backgroundColor: '#2699FB'}}>
                    <Button style={{backgroundColor: '#2699FB'}}
                        vertical
                        active={props.navigation.state.index === 0}
                        onPress={() => props.navigation.navigate("Zone")}>
                        <NBText>Zone</NBText>
                    </Button>
                    <Button style={{backgroundColor: '#2699FB'}}
                        vertical
                        active={props.navigation.state.index === 1}
                        onPress={() => props.navigation.navigate("Scene")}>
                        <NBText>Scene</NBText>
                    </Button>
                    <Button style={{backgroundColor: '#2699FB'}}
                        vertical
                        active={props.navigation.state.index === 2}
                        onPress={() => props.navigation.navigate("Share")}>
                        <NBText>Share</NBText>
                    </Button>
                    <Button style={{backgroundColor: '#2699FB'}}
                        vertical
                        active={props.navigation.state.index === 3}
                        onPress={() => props.navigation.navigate("Setting")}>
                        <NBText>Setting</NBText>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
});




// import React from 'react';
// import { createSwitchNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';

// export default createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// });