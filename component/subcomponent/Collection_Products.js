import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import Product from '../Product'
import gql from 'graphql-tag';
import { StyleSheet, View, Image,ScrollView, Text, TouchableOpacity } from 'react-native';
import Product_card from './Product_card'

import MainProduct from '../MainProduct'
class Collection_Products extends Component {



  constructor() {
    super();
    this.state = {
      products: [],
    };


  }


  onPressButton = (product) =>{
    this.props.navigation.navigate('MainProduct',product);

  }
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      shop: PropTypes.object,
    }).isRequired,
  }


  render() {


    if (this.props.data.loading) {
      return <Text>Loading ...</Text>;
    }
    if (this.props.data.error) {
      return <Text>{this.props.data.error.message}</Text>;
    }
    const { key } = this.props.navigation.state.params

    return (
    <View style={ styles.container }>
      <ScrollView>
        <View style={styles.grid}>

            { this.props.data.shop.collectionByHandle.products.edges.map(product =>
              <TouchableOpacity key={product.node.id.toString()} onPress={() => this.onPressButton(product)}>
                <Product_card  key={product.node.id.toString()} product={product.node} />
              </TouchableOpacity>
            )}


        </View>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        backgroundColor: "#ffffff",
        alignItems: 'stretch',
        flex: 1
    },
  grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingRight: 15,
        paddingLeft: 15,
        marginBottom: -20
    },
});

const query = gql`
  query query($name: String!) {
      shop {
        collectionByHandle(handle:$name){
          products(first:20) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                options {
                  id
                  name
                  values
                }
                variants(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      id
                      title
                      selectedOptions {
                        name
                        value
                      }
                      image {
                        src
                      }
                      price
                    }
                  }
                }
                images(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      src
                    }
                  }
                }
              }
            }
          }
          }
        }
      }
`;
const AppWithDataAndMutation = graphql(query, {
  options: (ownProps) => ({
    variables: {
      name: ownProps.navigation.state.params.key
    }
  })
})(Collection_Products)


export default AppWithDataAndMutation;
