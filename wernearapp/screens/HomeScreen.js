import React from "react";
import {
  Dimensions,
  Text,
  View,
  FlatList,
  Image,
  StyleSheet
} from "react-native";

const dummy = [
  { availability: "Open", distance: "Got water" },
  { availability: "Open", distance: "Got more can goods" },
  { availability: "closed", distance: "Bannas came in" },
  { availability: "Open", distance: "Way more can goods came in" },
  { availability: "closed", distance: "Bannas came in" },
  { availability: "Open", distance: "More can goods" },
  { availability: "Open", distance: "Bannas came in" }
];

import { Availability } from "expo-calendar";
const { height, width } = Dimensions.get("window");
import { getResources } from "../services";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getResources().then(res => this.setState({ data: res }));
  }
  render() {
    return (
      <View style={styles.conatiner}>
        <FlatList
          data={dummy}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item }, i) => (
            <View style={styles.card}>
              <View>
                <Image
                  style={styles.logo}
                  displayMode="contain"
                  source={{
                    uri:
                      "https://cdn2.f-cdn.com/contestentries/109529/2903056/542da724ad8e4_thumb900.jpg"
                  }}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.mainText} key={i}>
                  {item.availability}
                </Text>
                <Text style={styles.secondaryText} key={i}>
                  {item.distance}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(index, i) => i.toString(8)}
        />
      </View>
    );
  }
}
HomeScreen.navigationOptions = {
  title: "Explore near by Stores"
};
const teal = "#6DC9C4";
const purple = "#622F88";
const gray = "#B6B6B6";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flexDirection: "row",
    height: height / 5,
    width: width * 0.9,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#6DC9C4",
    marginTop: height / 15,
    padding: "5%"
  },
  logo: { height: 100, width: 100 },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width
  },
  textContainer: {
    width: "60%"
  },
  mainText: {
    fontSize: 20,
    fontWeight: "700",
    color: teal
  },
  secondaryText: {
    fontSize: 20,
    color: teal
  }
});
