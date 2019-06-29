import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  AsyncStorage
} from "react-native";
import { checkIn } from "../services";

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
  constructor(props) {
    super(props);

    this.state = {
      isSafe: false
    };
  }

  getCoords = () =>
    new Promise((resolve, reject) => {
      const { getCurrentPosition } = navigator.geolocation;
      getCurrentPosition(({ coords }) => resolve(coords), err => reject(err));
    });

  _checkIn = async () => {
    try {
      const username = await AsyncStorage.getItem("username");
      const geo = this.getCoords()
        .then(position => {
          console.log(position);
        })
        .catch(err => {
          console.error(err.message);
        });
      console.log(geo);
      await checkIn(username, geo).then(
        alert("You've successfully checked in!")
      );
      this.setState(prevState => ({ isSafe: !prevState.isSafe }));
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          style={this.state.isSafe ? styles.checkIn : styles.notSafe}
          onPress={this._checkIn}
        >
          <Text style={styles.safeText}>
            {this.state.isSafe ? "Currently Safe" : "Mark safe"}
          </Text>
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
  notSafe: {
    width: "90%",
    padding: 15,
    backgroundColor: "red",
    marginTop: 30,
    borderRadius: 5
  },
  safeText: {
    alignSelf: "center",
    color: "white"
  },
  nearby: {
    backgroundColor: "#fafafa",
    width: "90%",
    padding: 15,
    marginTop: 30,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
