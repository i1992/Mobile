import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Ndex from '../Ndex'

export default class Favorites extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Ndex />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
