import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const NameShowerScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View>
        
        <Text style = {{fontSize: 40}}>Name screen</Text>

        <View>
            <TextInput 
                    style = {styles.inputStyle} 
                    autoCorrect={false}
                    value = {name}
                    placeholder='Name'
                    onChangeText={(newText) => {
                        setName(newText);
                    }}
            />
            <Text>Your name is: {name}</Text>
        </View>

        <View>
            <TextInput 
                    style = {styles.inputStyle}
                    autoCapitalize='none'
                    autoCorrect={ false }
                    value = { password }
                    placeholder='Password'
                    onChangeText={(newText) => {
                        setPassword(newText);
                    }}
            />
            {password.length < 6 && password !== '' ? <Text>Password is too short</Text> : null }
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default NameShowerScreen;