import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const defaultScreen = () => {
    const { action } = useContext(AuthContext);
    useEffect(() => {action.localLogin()}, []);
    return null;
};
defaultScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default defaultScreen;