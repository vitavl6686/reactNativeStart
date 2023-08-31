import React, { useContext} from "react";
import { View, StyleSheet, Text, Dimensions} from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import LocationContext from "../context/LocationContext";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Map = () => {
    const { state } = useContext(LocationContext);
    if(!state.currentLocation) {
        return null;
    }
    return(
        <View>
            <MapView
                style = {styles.map}
                initialRegion={{
                    latitude: state.currentLocation.coords.latitude,
                    longitude:  state.currentLocation.coords.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.015,
                  }}
                  region = {{
                    latitude: state.currentLocation.coords.latitude,
                    longitude:  state.currentLocation.coords.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.015,
                  }}
        
            >
                <Circle 
                    center = {{latitude: state.currentLocation.coords.latitude,
                    longitude:  state.currentLocation.coords.longitude}}
                    radius = {5}
                    strokeColor = "rgb(0,0,0)"
                    fillColor = "rgb(0,0,0)"

                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: windowWidth,
        height: windowHeight/2
    }
});

export default Map;