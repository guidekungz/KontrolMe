import { NavigationActions } from "react-navigation";
import RNExitApp from "react-native-exit-app";

export const navigateBack = () => NavigationActions.back();

export const exitApp = () => {
  RNExitApp.exitApp();
};
