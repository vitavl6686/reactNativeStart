import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import signinScreen from "./src/screens/signinScreen";
import signupScreen from "./src/screens/signupScreen";
import trackDetailsScreen from "./src/screens/trackDetailsScreen";
import indexScreen from "./src/screens/indexScreen";
import accountDetailsScreen from "./src/screens/accoutDetailsScreen";
import createTrackScreen from "./src/screens/createTrackScreen";
import { AuthContextProvider } from "./src/context/AuthContext";



const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator({
              SignIn: signinScreen,
              SignUp: signupScreen
            }),
  
  appFlow: createMaterialBottomTabNavigator({
              trackList: createStackNavigator({
                Index: indexScreen,
                TrackDetails: trackDetailsScreen
              }),
              Account: accountDetailsScreen,
              CreateTrack: createTrackScreen,
              
            })
});

const App =  createAppContainer(switchNavigator);

export default () => { return (<AuthContextProvider><App /></AuthContextProvider>)}