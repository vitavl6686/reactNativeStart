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
import defaultScreen from "./src/screens/defaultScreen";
import { AuthContextProvider } from "./src/context/AuthContext";
import { LocationContextProvider } from "./src/context/LocationContext";
import { setNavigator } from "./src/navigationRef";



const switchNavigator = createSwitchNavigator({
  Default: defaultScreen,
  authFlow: createStackNavigator({
              SignIn: signinScreen,
              SignUp: signupScreen
            }),
  
  appFlow: createMaterialBottomTabNavigator({
              trackList: createStackNavigator({
                Index: indexScreen,
                TrackDetails: trackDetailsScreen
              }),
              CreateTrack: createTrackScreen,
              Account: accountDetailsScreen,
              
            })
});

const App =  createAppContainer(switchNavigator);

export default () => {
   return (<LocationContextProvider><AuthContextProvider><App ref = {(navigator) => setNavigator(navigator) }  /></AuthContextProvider></LocationContextProvider>)}