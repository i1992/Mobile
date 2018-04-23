import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';


import {

  addVariantToCart,
} from '../../utils/checkout'



export default class Home extends React.Component {
  constructor() {
      super();

      this.addVariantToCart = addVariantToCart.bind(this);

    }

  render() {
    console.log(this.props)
    return (
      <Button  onPress={()=> this.addVariantToCart(variantid,variantQuantity)} bordered>
          <Text>Primary</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
