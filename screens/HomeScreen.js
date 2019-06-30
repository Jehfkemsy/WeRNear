import React from "react";
import {
  Dimensions,
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import openMap from "react-native-open-maps";
import { Availability } from "expo-calendar";
const { height, width } = Dimensions.get("window");
import { getResources } from "../services";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      showMap: false
    };
  }

  componentDidMount() {
    getResources().then(res => this.setState({ data: res.data }));
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }
  _goToYosemite(la, lo) {
    openMap({ latitude: la, longitude: lo });
  }
  render() {
    if (this.state.isLoading)
      return (
        <View style={styles.activityIn}>
          <ActivityIndicator />
        </View>
      );
    else
      return (
        <View style={styles.conatiner}>
          <FlatList
            data={this.state.data.reverse()}
            contentContainerStyle={styles.contentContainer}
            renderItem={({ item }, i) => {
              console.log(item);
              return (
                <View style={styles.card}>
                  <View style={styles.description}>
                    <Text style={styles.mainText} key={i}>
                      {item.provider_name}
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#6DC9C4",
                        padding: 5,
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 5
                      }}
                      onPress={() =>
                        this._goToYosemite(
                          parseInt(item.latitude),
                          parseInt(item.longitude)
                        )
                      }
                    >
                      <Text style={{ color: "white" }}>Visit</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Image
                      style={styles.logo}
                      displayMode="contain"
                      source={{
                        uri: item.provider_logo
                      }}
                    />
                  </View>
                  <View>
                    <Text style={styles.secondaryText} key={i}>
                      {item.resource_message}
                    </Text>
                  </View>
                </View>
              );
            }}
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
  activityIn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  description: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  card: {
    flexDirection: "column",
    height: height / 2,
    width: width * 0.9,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    borderRadius: 15,
    marginTop: height / 30
    // backgroundColor: "#E9EBEE"
  },
  logo: { height: height / 2.3, width: width * 0.9 },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    paddingBottom: 20
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
    fontSize: 14,
    color: "#000"
  }
});
