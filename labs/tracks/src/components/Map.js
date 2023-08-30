import React from "react";
import { View, StyleSheet, Text, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Map = () => {
    return(
        <View>
            <MapView
                style = {styles.map}
                initialRegion={{
                    latitude: 53.319263,
                    longitude: -6.201864,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.015,
                  }}
                
            />
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