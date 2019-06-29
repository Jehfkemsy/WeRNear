import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Item, Content, Button, Text, Input } from "native-base";
import { AsyncStorage } from "react-native";

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  handleSubmit = async () => {
    await AsyncStorage.setItem("username", this.state.username);
    this.props.navigation.navigate("Main");
  };
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
            <Input
              placeholder="What should we call you?"
              onChangeText={text => this.setState({ username: text })}
              value={this.state.username}
            />
          </Item>
          <Button onPress={this.handleSubmit} primary style={styles.button}>
            <Text> Sign In</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    alignSelf: "center",
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
    backgroundColor: "#6DC9C4",
    height: 40
  }
});
