import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SafeScreen from "../screens/SafeScreen";
import MeshScreen from "../screens/MeshScreen";
import MessageScreen from "../screens/MessageScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Stores",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-basket` : "md-basket"}
    />
  )
};

HomeStack.path = "";

// const MessageStack = createStackNavigator(
//   {
//     Message: MessageScreen
//   },
//   config
// );

// MessageStack.navigationOptions = {
//   tabBarLabel: "Message",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-text" : "md-text"}
//     />
//   )
// };

// MessageStack.path = "";

const SafeStack = createStackNavigator(
  {
    Safe: SafeScreen
  },
  config
);

SafeStack.navigationOptions = {
  tabBarLabel: "Checkin",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-checkbox" : "md-checkbox"}
    />
  )
};

SafeStack.path = "";

// const MeshStack = createStackNavigator(
//   {
//     Mesh: MeshScreen
//   },
//   config
// );

// MeshStack.navigationOptions = {
//   tabBarLabel: "Meshs",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-cellular" : "md-cellular"}
//     />
//   )
// };

// MeshStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SafeStack,
  // MeshStack,
  // MessageStack
});

tabNavigator.path = "";

export default tabNavigator;
