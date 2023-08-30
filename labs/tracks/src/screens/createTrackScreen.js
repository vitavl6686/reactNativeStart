import React, { useEffect, useState } from "react";
import { View,  StyleSheet, StatusBar } from 'react-native';
import { Text } from "@rneui/base";
import Map from "../components/Map";
import { requestForegroundPermissionsAsync } from 'expo-location';

const statusBar = StatusBar.currentHeight;

const createTrackScreen = () => {
    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
            setErr('You dont allow us to use your location');
        }
        }
        catch(e) {
            setErr(e);
        }
    }
    
    useEffect(() => {startWatching()}, []);
    
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