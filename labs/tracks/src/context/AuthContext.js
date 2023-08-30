import React, { createContext, useContext, useState, useReducer } from 'react';
import tracker from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';
const AuthContext = createContext();

const reducer =  (state, action) => {
    switch(action.type) {
        
        case 'set_error_message': {
            return {...state, errorMessage: action.payload};
        }

        case 'sign_up': {
            return {errorMessage: "", token: action.payload};
        }

        case 'sign_in': {
            return {errorMessage: "", token: action.payload};
        }

        case 'sign_out': {
            return {...state, token: null};
        }

        case 'clear_error_message': {
            return {...state, errorMessage: ""};
        }

        default: {
            return state;
        }
    }
}


export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {errorMessage: "", token: null })

    const localLogin = async () => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            dispatch({type:"sign_in", payload: token});
            navigate('appFlow');
        }
        else {
            navigate('authFlow');
        }
    }
    const signIn = async (email, password) => {
        try {
            const response = await tracker.post('/signin', {email, password});
            console.log("Successful sign-in");
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({type: "sign_in", payload: response.data.token});
            navigate('appFlow');
        }
        catch(err) {
            console.log(err);
            dispatch({type: 'set_error_message', payload: "Sorry, you credentials don't match out records."});
        }
        
    
    }

    const signUp = async (email, password) => {
        try {
            const response = await tracker.post('/signup', {email, password});
            console.log("Successful sign up, token: ", response.data.token);    
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({type: "sign_up", payload: response.data.token});
            navigate('appFlow');
        }
        catch(err) {
            console.log(err.message);
            dispatch({type: 'set_error_message', payload: "Something went wrong with sign up"});
        }
    }


    const signOut = async () => {
        await AsyncStorage.removeItem("token");
        dispatch({type: "sign_out"});
        navigate("authFlow");
    }
    
    const clearErrorMessage = () => {
        dispatch({type: 'clear_error_message'});
    }
    return(
        <AuthContext.Provider
            value = {{action: {signIn, signOut, signUp, localLogin, clearErrorMessage}, data: {token: state.token, errorMessage: state.errorMessage}}}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;