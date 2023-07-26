import React, { useReducer } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <View> 
            <Text style = { styles.headerStyle }> Counter </Text>
            <Button
                title = 'Increase'
                onPress={() => dispatch({type: 'add', payload: 1})}
            />
            <Button
                title = 'Decrease'
                onPress= {() => dispatch({type: 'add', payload: -1})}
            />
            <Text style = { styles.textStyle }>Current Count: </Text>
            <Text style = { styles.counterStyle }> {state.count} </Text>
        </View>
    );
}

const reducer = (state, action) => {
    //state = {counter: number}
    //action = {type: 'add', payload: 1}

    if (action.type === 'add') {return ({...state, count: state.count + action.payload})}
    else {return state;} 
}

const styles = StyleSheet.create({
        headerStyle: {
            fontSize: 40,
            color: 'blue',
            marginBottom: 15
        },
        textStyle: {
            fontSize: 20,
            color: 'blue',
            marginVertical: 15
        },
        counterStyle: {
            fontSize: 25,
            color: 'black',
            marginVertical: 15
        }
    }
)

export default CounterWithReducer;
