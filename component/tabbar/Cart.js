import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cart_Landing from '../subcomponent/Cart_Landing'
import PropTypes from 'prop-types';
import { graphql, gql, compose } from 'react-apollo'

export default class Cart extends React.Component {




  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>

        <Text>Hitarth</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
