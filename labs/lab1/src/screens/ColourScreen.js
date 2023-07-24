import React, { useState } from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';

const ColourScreen = () => {
    const [colours, setColours] = useState([]);
    console.log(colours);
    return (
        <View>
            <Text style = {styles.HeaderStyle}>Random colours.</Text>
            <Button
                title = 'Add colour.'
                onPress = {
                    () => {
                        setColours([...colours, randomRGB()]);
                    }
                }    
            /> 

            <FlatList
                data = {colours}
                renderItem={
                    ({item}) => {
                        return (
                            <View 
                                style = {{height: 100, width: 100, backgroundColor: item}}
                            />            
                        )
                    }
                }
                keyExtractor={(item) => item }

            />
        </View>
    )
};

const randomRGB = () => {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    return(`rgb(${randomRed},${randomGreen}, ${randomBlue})`);

}

const styles = StyleSheet.create({
    HeaderStyle: {
        fontSize: 30,
        color: 'blue',
        padding: 20,
        margin: 10
    }
});

export default ColourScreen;