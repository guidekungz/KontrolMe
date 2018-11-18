import React from 'react';
import {
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
  View,
  TouchableOpacity
} from 'react-native';

import {  Thumbnail, ActionSheet, Text, Icon } from 'native-base';






const numColumns = 2;


export default class SwitchList extends React.Component {

  constructor(props) {
    super(props);
    
    console.log('SwitchList props',props);
  }


  formatData = (data, numColumns) => {
    let dataFormat = [...data];
    console.log('formatData dataList', dataFormat.length);
    const numberOfFullRows = Math.floor(dataFormat.length / numColumns);
  
    let numberOfElementsLastRow = dataFormat.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      dataFormat.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return dataFormat;
  };
  

  renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }else if( item.addDataMode === true ){
      return <TouchableOpacity style={styles.item} onPress={()=> {
          //this.props.onShowDialog(true);
        }}>
        <Text style={styles.itemText}>+</Text>
      </TouchableOpacity>
    }
    return (
      <TouchableOpacity style={styles.item} onPress={() => {
        //this.props.onPressData(item);
      }} >
        <Icon name='power' style={{fontSize:100}} />
      </TouchableOpacity>
    );
  };
  

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
        <ScrollView style={styles.mainContainer} contentContainerStyle={styles.contentContainer}>
          <FlatList
            data={this.props.dataList}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={numColumns}
          />

          
        </ScrollView>
    );
  }



 
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 8,
    height: (Dimensions.get('window').width / numColumns) - (numColumns*8), // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#616161',
    fontSize: 36
  },
});
