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
import PropTypes from 'prop-types';
import { graphql, gql, compose } from 'react-apollo';
import Swiper from 'react-native-swiper';
import { Button } from 'native-base';
const { width } = Dimensions.get('window')
import {
  addVariantToCart,
 } from '../utils/checkout'


class MainProduct extends Component {

  render() {
    let variantid = this.props.navigation.state.params.node.variants.edges["0"].node.id;
    let variantQuantity =  1 ;
    console.log(this.props);
    return (
      <View style={styles.container}>
        {/* <Swiper>
          <View style={styles.slide}>
            {this.props.navigation.state.params.node.images.edges.map((img, key) =>


                 <Image key={key} style={ styles.image } resizeMode='contain' source={{ uri: img.node.src}} alt={`${this.props.navigation.state.params.node.title} product shot`}/>

            )}
          </View>
        </Swiper> */}

        <Text>{this.props.navigation.state.params.node.title}</Text>
        <Button  onPress={() => this.props.screenProps(variantid, variantQuantity)} bordered>
            <Text>Primary</Text>
        </Button>
        <Button  onPress={this.props.method1} bordered>
            <Text>Primary</Text>
        </Button>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1
  },
});


export default MainProduct;
