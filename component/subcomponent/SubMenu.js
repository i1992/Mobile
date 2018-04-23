import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Right, Icon, Left, Text } from 'native-base';
import Collection_Products from './Collection_Products';
import Product_card from './Product_card';



export default class SubMenu extends React.Component {

  changeScreen = (child) => {
      this.props.navigation.navigate('Collection_Products',child);
  }

  render() {

    const { childs } = this.props.navigation.state.params


    return (
      <Container>

        <Content style={styles.container}>

          <List dataArray={childs}
            renderRow={(child) =>
              <TouchableOpacity

              >
              <ListItem
                key={child.key}
                 onPress = {() => this.changeScreen(child)}
              >
                <Left>
                  <Text>{child.name}</Text>
                </Left>

                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              </TouchableOpacity>
            }>

          </List>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
