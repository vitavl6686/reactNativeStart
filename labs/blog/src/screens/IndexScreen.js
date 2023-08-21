import React, { useContext, useEffect } from 'react';

import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = ({navigation}) => {
    const { data,  deleteBlogPost, networkError, getBlogPosts} =  useContext(BlogContext);
    useEffect(() => {
        getBlogPosts();
        const listener = navigation.addListener('didFocus', () => {getBlogPosts();});
        return () => {listener.remove();};
        }, []);
        
    return(
        <View style = {styles.mainView}>
            <Text>{networkError}</Text>
            <FlatList 
                data = {data}
                keyExtractor={(blogPost) => {return blogPost.title}}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('Details', {id: item.id} )}}
                        >
                        <View style = {styles.view}>
                            
                            <Text style = {styles.title}>{item.title}</Text>
                            
                            <TouchableOpacity 
                                style = {{right: 15}}
                                onPress = {() => {deleteBlogPost(item.id)}}    
                            >
                                <Entypo 
                                    name = "trash" 
                                    size= {24}
                                />
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (<TouchableOpacity onPress={() => {navigation.navigate('Create')}}>
        <AntDesign name="plussquare" size={40} color="black" />
        </TouchableOpacity>),
    }
};
const styles = StyleSheet.create({

    view: {
        borderColor: 'grey',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        margin: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 15,
        margin: 8
    }
});

export default IndexScreen;