import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import BlogContext from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
    const add = useContext(BlogContext).addBlogPost;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    return(
        <View>
            <View style = {styles.block}>
                <Text style = {styles.heading}>Heading</Text>
                <TextInput 
                    placeholder='Title'
                    style = {styles.titleInput}
                    value={title}
                    autoCorrect = {false}
                    autoCapitalize='none'
                    onChangeText={(newText) => setTitle(newText)}    
                />
            </View>

            <View style = {styles.block}>
                <Text style = {styles.heading}>Content</Text>
                <TextInput 
                    placeholder='Content'
                    style = {styles.titleInput}
                    value={content}
                    onChangeText={(newText) => setContent(newText)}    
                />
            </View>

            <View style = {styles.block}>
            <TouchableOpacity
                onPress={() => {
                    add(title, content);
                    navigation.navigate('Index');
                    }}>
             <Entypo name="save" size={50} color="black" />
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        marginVertical: 15
    },
    titleInput: {
        height: 50,
        width: 400,
        fontSize: 20,
        borderWidth: 2,
        margin: 5,
        padding: 5
    },
    heading: {
        fontSize: 25,
        fontWeight: '600'
    }
});

export default CreateScreen;