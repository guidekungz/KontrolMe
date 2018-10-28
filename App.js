import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppMain from './AppMain';
import { Provider } from "react-redux";
import myStore from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={myStore}>
          <AppMain />
      </Provider>
    );
  }

  
}


