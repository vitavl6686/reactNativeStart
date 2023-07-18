import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const HomeWork = () => {
    const name = 'Vita';
    return(
    <View>
        <Text style = {styles.greetingStyle}>Getting started with React Native</Text>
        <Text style = {styles.nameStyle}>author: {name}</Text>
    </View>)
}

const styles = StyleSheet.create({
    greetingStyle: {
        fontSize : 45,
    },
    nameStyle: {
        fontSize: 20
    }
})

export default HomeWork;