import React, { Component } from "react";
import { View } from "react-native";
import { Container, Item, Content, Button, Text, Input } from "native-base";

export default class Auth extends Component {
  render() {
    return (
      <Container
        style={{
          flex: 1,
          padding: "5%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            width: "100%"
          }}
        >
          <Item regular>
            <Input placeholder="User Name" />
          </Item>
          <Item
            regular
            style={{ alignSelf: "center", width: "100%", marginTop: 15 }}
          >
            <Input placeholder="Password" />
          </Item>
          <Button
            onPress={() => this.props.navigation.navigate("Main")}
            primary
            style={{
              alignSelf: "center",
              width: "100%",
              marginTop: 30,
              justifyContent: "center"
            }}
          >
            <Text> Sign In</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
