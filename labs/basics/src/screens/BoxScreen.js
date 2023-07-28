import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return(
        <View style = {styles.mainView}>
            
            <View style = {styles.textView}>
                <Text style = {styles.text}> App </Text>
            </View>

            <View style = {styles.viewView}>
                <View style = {styles.view1}/>
                <View style = {styles.view2} />
                <View style = {styles.view3} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    textView: {
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center'
    },
    text: {
        padding: 5,
        margin: 5,
        fontSize: 30
    },
    viewView: {
        flexDirection: 'row',
        height: 600,
        justifyContent: 'space-between'
    },
    view1: {
        borderWidth: 1,
        borderColor: 'red',
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    view2: {
        borderWidth: 1,
        borderColor: 'green',
        height: 100,
        width: 100,
        backgroundColor: 'green',
        top: 100
    },
    view3: {
        borderWidth: 1,
        borderColor: 'purple',
        height: 100,
        width: 100,
        right: 0,
        backgroundColor: 'purple',
    },
    mainView: {
        borderWidth: 1,
        borderColor: 'black'
    }


});

export default BoxScreen;