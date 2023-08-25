import React, { createContext, useContext, useState, useReducer } from 'react';
import tracker from '../api/tracker';

const AuthContext = createContext();

const reducer =  (state, action) => {
    switch(action.type) {
        case 'add_token': {
            return {token: action.payload, errorMessage: ""}
        }
        case 'set_error_message': {
            console.log(action.payload)
            return {token: state.token, errorMessage: action.payload}
        }
        default: {
            return state
        }
    }
}


export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {token: "", errorMessage: "" })

    
    const signIn = async (email, password) => {
        
    
    }

    const signUp = async (email, password) => {
        try {
            const response = await tracker.post('/signup', {email, password});
            console.log(response.data);
            dispatch({type: 'add_token', payload: response.data.token});
        }
        catch(err) {
            console.log(err.message);
            dispatch({type: 'set_error_message', payload: "Something went wrong with sign up"});
        }
    }

    const signOut = () => {
        dispatch({type: "signOut"});
    }
    
    return(
        <AuthContext.Provider
            value = {{ signIn, signOut, signUp, errorMessage: state.errorMessage}}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;