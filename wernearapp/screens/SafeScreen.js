import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";
export default function LinksScreen() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>//Your text here</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

LinksScreen.navigationOptions = {
  title: "Safety"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
