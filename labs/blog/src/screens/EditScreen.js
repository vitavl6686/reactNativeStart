import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import BlogContext from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    let id = navigation.getParam('id');
    let items = useContext(BlogContext).data;
    const edit = useContext(BlogContext).editBlogPost;
    const blogPost = items.find(item => item.id === id);

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content)

    return(
        <View>
            <View style = {styles.block}>
                <Text style = {styles.heading}>Heading</Text>
                <TextInput 
                    onChangeText={(newText) => setTitle(newText)}
                    value = {title}
                    placeholder='Title'
                    style = {styles.titleInput}
                    autoCorrect = {false}
                    autoCapitalize='none'  
                />
            </View>

            <View style = {styles.block}>
                <Text style = {styles.heading}>Content</Text>
                <TextInput 
                    onChangeText={(newText) => setContent(newText)}
                    value = {content}
                    placeholder='Content'
                    style = {styles.titleInput}
                    autoCorrect = {false}
                    autoCapitalize='none'    
                />
            </View>

            <View style = {styles.block}>
            <TouchableOpacity
                onPress={() => {
                    edit(blogPost.id, title, content)
                    navigation.pop();
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

export default EditScreen;