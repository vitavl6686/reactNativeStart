import React from 'react';
import { View, Image, Text, StyleSheet, FlatList} from 'react-native';

const ResultsList = ({name, list}) => {
    return(
        <View>
            <Text style = {styles.textStyle}>{name}</Text>

            <FlatList
                horizontal
                data = {list}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return(
                        <View style = {styles.viewStyle}>
                            <Text>{item.name}</Text>
                            <Text>Rate: {item.rating}</Text>
                        </View>
                    )
                }}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',

    },
    viewStyle: {
        borderWidth: 1
    }
});

export default ResultsList;