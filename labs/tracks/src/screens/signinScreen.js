import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from '@rneui/themed';
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthContext from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const signinScreen = ({navigation}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {data, action} = useContext(AuthContext);
    useEffect(() => {action.localLogin()}, []);
    return(
        <View style = {{flex: 1, justifyContent: 'center', marginBottom: 80}}>
            <NavigationEvents onWillFocus={action.clearErrorMessage} />
            <Text style = {styles.block} h2 = {true}>Sign In</Text>
            <View style = {styles.block}>
            <Input 
                placeholder="email"
                value={email}
                onChangeText={(newText) => {setEmail(newText)}}
                autoCapitalize="none"
                autoCorrect = {false}  
            />
            <Input 
                placeholder="password" 
                value={password}
                onChangeText={(newText) => {setPassword(newText)}}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect = {false}

            />
            </View>
            <View style = {styles.block}>
            <Text style = {{color: 'red', fontSize: 10}}>{data.errorMessage}</Text>
            </View>
            <View style = {styles.block}> 
            <Button title = "Sign in" 
                    type = "outline"
                    onPress={() => action.signIn(email, password)}
            />
            </View>
            <View style = {styles.block}>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}>
                <Text h4>Don't an account? Sign up!</Text>  
            </TouchableOpacity>
            </View>

        </View>
    )
};

signinScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    block: {
        margin: 10
    }
});

export default signinScreen;