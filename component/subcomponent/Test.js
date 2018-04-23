import React, {Component} from 'react';

import {
  ScrollView,
  TouchableHighlight,
  Image,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';


class Test extends Component {
  constructor(props) {
    super(props);


  }


  render() {


    return (
      <View>
        <View style={styles.rowContainer}>
          {this.props.line_item.variant.image ? <Image style={styles.thumb} resizeMode='contain' source={{ uri: this.props.line_item.variant.image.src}} alt={`${this.props.line_item.title} product shot`}/> : null}
          <View style={styles.textContainer}>
            <Text style={styles.title}
                numberOfLines={2}>{this.props.line_item.variant.title}</Text>
            <Text style={styles.price}>${this.props.line_item.variant.price}</Text>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
});


export default Test;
