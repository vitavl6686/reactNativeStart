import React, { useContext, useState } from "react";
import { View,  StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Input, Text } from '@rneui/themed';
import AuthContext from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";


const signupScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {data, action} = useContext(AuthContext);
    

    return(
        <View style = {{flex: 1, justifyContent: 'center', marginBottom: 80}}>
            <NavigationEvents onWillFocus={action.clearErrorMessage}/>
            <Text style = {styles.block} h2 = {true}>Sign Up</Text>
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
            <Button title = "Sign up" 
                    type = "outline"
                    onPress={() => {
                        action.signUp(email, password);
                        }
                    }
            />
            </View>
            <View style = {styles.block}>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}>
                <Text h4>Have an account? Sign in!</Text>
            </TouchableOpacity>

            
            </View>

           

        </View>
    )
};

signupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    block: {
        margin: 15
    }
});

export default signupScreen;