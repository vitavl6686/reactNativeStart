import React, {useReducer} from 'react';
import {View} from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOUR_INCREMENT = 15;

const PaletteScreenWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    const { red, green, blue } = state; 
    return (
        <View> 
            <ColourCounter  colour = 'Red'
                            increase = {() => dispatch({colour: 'red', amount: COLOUR_INCREMENT})}
                            decrease = {() => dispatch({colour: 'red', amount: -1 * COLOUR_INCREMENT})}
                            current = { state.red }
            />  

            <ColourCounter colour = 'Green'
                            increase = {() => dispatch({colour: 'green', amount: COLOUR_INCREMENT})}
                            decrease = {() => dispatch({colour: 'green', amount: -1 * COLOUR_INCREMENT})}
                            current = { state.green } 
            />
            <ColourCounter colour = 'Blue' 
                            increase = {() => dispatch({colour: 'blue', amount: COLOUR_INCREMENT})}
                            decrease = {() => dispatch({colour: 'blue', amount: -1 * COLOUR_INCREMENT})}
                            current = { state.blue }
            />
            <View
                style = {{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
            />
        </View>
    );
};

const reducer = (state, action) => {
    //state = {red: number, green: number, blue: number}
    //action = { colour: 'red' || 'green || 'blue', amount: number}

    switch(action.colour) {
        case 'red':
            if (action.amount > 0 ){
                return {...state, red: Math.min(state.red + action.amount, 255)};
            }
            else {
                return {...state, red: Math.max(state.red + action.amount, 0)};
            }

        case 'green':
            if (action.amount > 0 ){
                return {...state, green: Math.min(state.green + action.amount, 255)};
            }
            else {
                return {...state, green: Math.max(state.green + action.amount, 0)};
            }
        case 'blue':
            if (action.amount > 0 ){
                return {...state, blue: Math.min(state.blue + action.amount, 255)};
            }
            else {
                return {...state, blue: Math.max(state.blue + action.amount, 0)};
            }
        default:
            return state;

    }
}



export default PaletteScreenWithReducer; 