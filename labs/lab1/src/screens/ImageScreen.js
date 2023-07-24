import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title = "Forest" 
                photoSource = {require("../../assets/pictures/forest.jpg")} 
                score = "5"
            />
            <ImageDetail 
                title = "Beach" 
                photoSource = {require("../../assets/pictures/beach.jpg")} 
                score = "2" 
            />
            <ImageDetail 
                title = "Mountains" 
                photoSource = {require("../../assets/pictures/mountain.jpg")} 
                score = "7" 
            />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ImageScreen;