import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
const { height, width } = Dimensions.get("window");
let nearby = [
  { marked: "Safe", time: "2 mins" },
  { marked: "Safe", time: "2 mins" },
  { marked: "Safe", time: "2 mins" },
  { marked: "Safe", time: "2 mins" },
  { marked: "Safe", time: "2 mins" },
  { marked: "Safe", time: "2 mins" },
  { marked: "Safe", time: "2 mins" },
  { marked: "Safe", time: "2 mins" }
];
export default class SafeScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.checkIn}>
          <Text style={styles.safeText}>Mark Safe</Text>
        </TouchableOpacity>
        {nearby.map((item, i) => (
          <View key={i} style={styles.nearby}>
            <Text>{"Marked: " + item.marked}</Text>
            <Text>{item.time}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

SafeScreen.navigationOptions = {
  title: "Mark yourself Safe"
};

const teal = "#6DC9C4";
const purple = "#622F88";
const gray = "#B6B6B6";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: width
  },
  checkIn: {
    width: "90%",
    padding: 15,
    backgroundColor: teal,
    marginTop: 30,
    borderRadius: 5
  },
  safeText: {
    alignSelf: "center",
    color: "white"
  },
  nearby: {
    backgroundColor: gray,
    width: "90%",
    padding: 15,
    marginTop: 30,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
