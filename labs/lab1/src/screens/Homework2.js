import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const Homework2 = () => {
    let array = [
        {name: "Friend 1", age: 1},
        {name: "Friend 1", age: 2},
        {name: "Friend 1", age: 3},
        {name: "Friend 1", age: 4},
        {name: "Friend 1", age: 5}
    ]

    return <FlatList
                keyExtractor = {(friend) => {friend.name}}
                data = {array}
                renderItem = {
                    ({item}) => {
                        return <Text>{item.name} - age: {item.age}</Text>
                    }
                }
                
            />

};

const styles = StyleSheet.create({});

export default Homework2;