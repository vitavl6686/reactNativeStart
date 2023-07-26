import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    let array = [
        {name: "Friend1"},
        {name: "Friend2"},
        {name: "Friend3"}
    ]

    return <FlatList 
                data = {array}
                renderItem= {({item}) => {
                    return <Text>{item.name}</Text>
                }}
    
    />
}

const styles = StyleSheet.create({});

export default ListScreen;