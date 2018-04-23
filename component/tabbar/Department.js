import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Right, Icon, Left, Text } from 'native-base';
import {items} from "../../utils/Menus";
import SubMenu from '../subcomponent/SubMenu'

export default class Department extends React.Component {

changeScreen = (item) => {
  this.props.navigation.navigate('SubMenu', item);
};

  render() {
    console.log(this.props)
    return (
      <Container>

        <Content style={styles.container}>

          <List dataArray={items}
            renderRow={(item) =>
              <TouchableOpacity
                // onPress={this.onPress}
              >
              <ListItem
                key={item.key}
                onPress = {() => this.changeScreen(item)}
              >
                <Left>
                  <Text>{item.name}</Text>
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
