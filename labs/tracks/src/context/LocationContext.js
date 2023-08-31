import { createContext, useReducer } from "react";

const reducer = (state, action) => {
    
    switch(action.type) {
        case 'add_current_location':
            {   
                return {...state, currentLocation: action.payload}
            }
    }
    
};

const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {currentLocation: null, locations: [], recording: false});
    

    const addCurrentLocation = (location) => {
        dispatch({type: "add_current_location", payload: location});
    }

    return (
    <LocationContext.Provider
        value =  {{state, addCurrentLocation}}>
        {children} 
    </LocationContext.Provider> 
    );
};

export default LocationContext;