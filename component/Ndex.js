import React, { Component } from 'react';
import Product from '../component/Product';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { StyleSheet, View, Image,ScrollView, Text } from 'react-native';

class Ndex extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
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
    return (
      <View style={styles.wrapper}>
        <ScrollView>
        { this.props.data.shop.products.edges.map(product =>
            <Product  key={product.node.id.toString()} product={product.node} />
        )}
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
    marginTop: 70,
    flex: 1,
    backgroundColor: '#ffffff',
  },
})


const query = gql`
  query query {
    shop {
      name
      description
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
`;

const AppWithDataAndMutation = compose(
  graphql(query),
)(Ndex);

export default AppWithDataAndMutation;
