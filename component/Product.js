import React, {Component} from 'react';
import VariantSelector from './VariantSelector';
import {
  ScrollView,
  TouchableHighlight,
  Image,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';


class Product extends Component {
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
      <View>
        <View style={styles.rowContainer}>
          {this.props.product.images.edges.length ? <Image style={styles.thumb} resizeMode='contain' source={{ uri: variantImage}} alt={`${this.props.product.title} product shot`}/> : null}
          <View style={styles.textContainer}>
            <Text style={styles.title}
                numberOfLines={2}>{this.props.product.title}</Text>
            <Text style={styles.price}>${variant.price}</Text>
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


export default Product;
