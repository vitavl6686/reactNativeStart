import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


const indexScreen = ({navigation}) => {
    return(
        <View>
            <Text>Index</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('TrackDetails')}>
                <Text>One track</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default indexScreen;