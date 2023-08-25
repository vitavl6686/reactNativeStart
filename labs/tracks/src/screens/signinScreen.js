import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from '@rneui/themed';
import { TouchableOpacity } from "react-native-gesture-handler";

const signinScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <View style = {{flex: 1, justifyContent: 'center', marginBottom: 300}}>
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

            />
            </View>
            <View style = {styles.block}> 
            <Button title = "Sign in" 
                    type = "outline"
                    onPress={() => navigation.navigate('Index')}
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