import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return(
        <View>
            <Text style = {styles.HeaderStyle}>Counter</Text>
            <Button 
                title = "Increase"
                onPress={() => {setCounter(counter + 1)}}
            />
            <Button 
                title = "Decrease"
                onPress={() => {setCounter(counter - 1)}}
            />
            <Text style = {styles.TextStyle}>Current count: {counter}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    HeaderStyle: {
        fontSize: 40,
        color: "blue",
        padding: 12
    },
    TextStyle: {
        margin: 15,
        fontSize: 30
    }
});

export default CounterScreen;