import React from 'react';
import {
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
  View,
  TouchableOpacity
} from 'react-native';

import {  Thumbnail, ActionSheet, Text } from 'native-base';



const addEmptyData = (data) => {
  let emptyData = {
    addDataMode : true,
    key : 0
  };
  data.push(emptyData);
  return data;
}



const numColumns = 3;


export default class DeviceList extends React.Component {

  constructor(props) {
    super(props);
    
    console.log('DeviceList props',props);
  }


  formatData = (data, numColumns) => {
    let dataFormat = [...data];
    dataFormat = addEmptyData(dataFormat);
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
          this.props.onShowDialog(true);
        }}>
        <Text style={styles.itemText}>+</Text>
      </TouchableOpacity>
    }
    return (
      <TouchableOpacity style={styles.item} onPress={() => {
        this.props.onPressData(item);
      }} >
        <Thumbnail large square source={{uri: item.image}}></Thumbnail>
        <Text style={styles.itemText}>{item.shortName}</Text>
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
            data={this.formatData(this.props.dataList, numColumns)}
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
    backgroundColor: '#F3F3F3',
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
