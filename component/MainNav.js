import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Constants } from 'expo';
import PropTypes from 'prop-types';
import {purple, white,red } from '../utils/colors'
import Home from './tabbar/Home'
import Department from './tabbar/Department'
import Cart from './tabbar/Cart'
import Favorites from './tabbar/Favorites'
import SubMenu from '../component/subcomponent/SubMenu';
import Collection_Products from '../component/subcomponent/Collection_Products'
import MainProduct from './MainProduct'
import {
        addVariantToCart,
         createCheckout,
        checkoutLineItemsAdd,
        checkoutLineItemsUpdate,
 } from '../utils/checkout'
import { graphql, gql, compose } from 'react-apollo';


export const DepartmentStack = StackNavigator ({
  Department: {
    screen : Department,
    navigationOptions : {
      title : 'Department'
    },
  },
  SubMenu : {
    screen : SubMenu,
    navigationOptions :  ({ navigation }) => ({

      title : `${navigation.state.params.name.toUpperCase()}`
    }),

  },



});

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name='home' size={20} color={tintColor} />
      )
    }
  },
Department: {
    screen: DepartmentStack,
    navigationOptions: {
      tabBarLabel: 'Departments',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name='menu' size={20} color={tintColor} />
      )
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name='favorite' size={20} color={tintColor} />
      )
    }
  },
  Cart: {
    screen: (props) => <Cart {...props} />,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name='cart' size={20} color={tintColor} />
      )
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? red : white,
    style: {
      height: 45,
      backgroundColor: Platform.OS === 'ios' ? white : red,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },

  Collection_Products : {
    screen : Collection_Products,
    navigationOptions :  ({ navigation }) => ({

      title : `${navigation.state.params.name.toUpperCase()}`
    }),
  },

  MainProduct : {
    screen : (props) => <MainProduct {...props} />,
  },
  Cart : {
    screen : (props) => <Cart {...props} />
  },
});


 class MainNav extends React.Component {
  constructor() {
    super();
    this.state = {
      checkout: { lineItems: { edges: [] } }
    };
    this.addVariantToCart = addVariantToCart.bind(this);

  }


  componentWillMount() {
      this.props.createCheckout({
        variables: {
          input: {}
        }}).then((res) => {
        this.setState({
          checkout: res.data.checkoutCreate.checkout
        });
      });
    }
  render() {

    console.log(this.state.checkout)
    return (
      <View style={{flex: 1}}>
        {console.log(this.props)}
       <MainNavigator  screenProps={this.state.checkout, this.addVariantToCart}/>
      </View>
    );
  }
}


const AppWithDataAndMutation = compose(

  graphql(createCheckout, {name: "createCheckout"}),
  graphql(checkoutLineItemsAdd, {name: "checkoutLineItemsAdd"}),
  graphql(checkoutLineItemsUpdate, {name: "checkoutLineItemsUpdate"}),
)(MainNav);

export default AppWithDataAndMutation;
