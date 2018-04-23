import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import MainNav from './component/MainNav'

const networkInterface = createNetworkInterface({ uri: 'https://bestchoiceproducts.myshopify.com/api/graphql' });

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    req.options.headers['X-Shopify-Storefront-Access-Token'] = 'f09694d85fdb57df8a7ca8fc050f2636'
    next();
  }
}]);
const client = new ApolloClient({
  networkInterface,
});

export default class App extends React.Component {

  render() {
    return (
      <ApolloProvider client={client}>
          <MainNav />
      </ApolloProvider>
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
