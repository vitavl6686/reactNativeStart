import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const ImageDetail = ({score, photoSource, title}) => {
    
    return (
        <View>
            <Image source = {photoSource}/>
            <Text> {title} </Text>
            <Text> Image Score -- {score} </Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageDetail;