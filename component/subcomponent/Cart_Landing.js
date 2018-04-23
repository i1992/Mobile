import React, {Component} from 'react';
import Test from './Test';
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


export default class Cart_Landing extends Component {

  static propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    shop: PropTypes.object,
  }).isRequired,
  createCheckout: PropTypes.func.isRequired,
  }

  render(){
    if (this.props.data.loading) {
      return <Text>Loading ...</Text>;
    }
    if (this.props.data.error) {
      return <Text>{this.props.data.error.message}</Text>;
    }

    return(
      <View>
      { this.props.checkout.lineItems.edges.map(line_item =>
          <Test
            key={line_item.node.id.toString()}
            line_item={line_item.node}
          />
      )}
    </View>
    )
  }
}
