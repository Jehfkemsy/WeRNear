import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthScreen from "../screens/Auth";

const AuthStack = createStackNavigator(
  { Auth: AuthScreen },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Main: MainTabNavigator
    },
    {
      initialRouteName: "Auth"
    }
  )
);
