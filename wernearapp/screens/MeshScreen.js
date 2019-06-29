import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";
export default function SettingsScreen() {
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

SettingsScreen.navigationOptions = {
  title: "app.json"
};
