import React, {useState} from 'react';
import {View} from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOUR_INCREMENT = 15;
const MAX_COLOUR_VALUE = 255;
const MIN_COLOUR_VALUE = 0;
const PaletteScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    return (
        <View>
            <ColourCounter colour = 'Red' 
                            decrease = {() => {(setRed(Math.max(MIN_COLOUR_VALUE,red - COLOUR_INCREMENT)))}} 
                            increase = {() => {(setRed(Math.min(MAX_COLOUR_VALUE,red + COLOUR_INCREMENT)))}}
                            current = {red}
                            />
            <ColourCounter colour = 'Green' 
                            decrease = {() => {(setGreen(Math.max(MIN_COLOUR_VALUE,green - COLOUR_INCREMENT)))}} 
                            increase = {() => {(setGreen(Math.min(MAX_COLOUR_VALUE,green + COLOUR_INCREMENT)))}}
                            current = {green}
                            />
            <ColourCounter colour = 'Blue' 
                            decrease = {() => {(setBlue(Math.max(MIN_COLOUR_VALUE,blue - COLOUR_INCREMENT)))}} 
                            increase = {() => {(setBlue(Math.min(MAX_COLOUR_VALUE,blue + COLOUR_INCREMENT)))}}
                            current = {blue} 
                            />
            <View
                style = {{height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})`}} 
            />
        </View>
    );
};



export default PaletteScreen; 