import React from "react";
import { View,  StyleSheet, StatusBar } from 'react-native';
import { Text } from "@rneui/base";
import { useContext } from "react";
import Map from "../components/Map";
import LocationContext from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
//import '../_mockLocation';


const statusBar = StatusBar.currentHeight;


const createTrackScreen = () => {
    
    const {addCurrentLocation} = useContext(LocationContext);
    const [err] = useLocation((location) => addCurrentLocation(location));
    return(
        <View style = {styles.mainView} >
            
            <Text h2>Create track.</Text>
            <Map />
            <Text style = {styles. error} h4>{err}</Text>
        </View>
    )
}; 

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        top: statusBar
    },
    error: {
        color: "red"
    }
});

export default createTrackScreen;