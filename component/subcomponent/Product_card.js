import React from 'react';
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import {gray, bd_input} from '../../utils/colors'
import { Button } from 'native-base';
import MainProduct from '../MainProduct'

const { width } = Dimensions.get('window')
const prdWidth = (width - 45) / 2

export default class Product_card extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.findImage = this.findImage.bind(this);
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }




  render() {

    let variantImage = this.state.selectedVariantImage || this.props.product.images.edges[0].node.src
    let variant = this.state.selectedVariant || this.props.product.variants.edges[0].node
    
    return (
      <View style={ styles.holder }>
          {this.props.product.images.edges.length ? <Image style={ styles.productImage } resizeMode='contain' source={{ uri: variantImage}} alt={`${this.props.product.title} product shot`}/> : null}
          <Text style={ styles.name } ellipsizeMode='tail' numberOfLines={2}>
              {this.props.product.title}
          </Text>
          <Text>${variant.price}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  holder: {
        width: prdWidth,
        height: prdWidth + 110
    },
    productImage: {
        width: prdWidth,
        height: prdWidth,


    },
    name: {
        marginTop: 6,
        marginBottom: 6,
        color: gray
    },
    add_to_cart : {

      width : 100,
    }
});
