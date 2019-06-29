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
  { availability: "Open", distance: "12 miles away" },
  { availability: "Open", distance: "12 miles away" },
  { availability: "Open", distance: "12 miles away" },
  { availability: "Open", distance: "12 miles away" },
  { availability: "Open", distance: "12 miles away" },
  { availability: "Open", distance: "12 miles away" },
  { availability: "Open", distance: "12 miles away" }
];

import { Availability } from "expo-calendar";
const { height, width } = Dimensions.get("window");

export default class HomeScreen extends React.Component {
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
                      "https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_960_720.png"
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
