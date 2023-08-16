import React, { useContext } from 'react';
import BlogContext from '../context/BlogContext';
import { Text, View, StyleSheet } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BlogDetailsScreen = ({ navigation }) => {
    let blogs = useContext(BlogContext).data;
    let id = navigation.getParam('id');
    let item_to_render = blogs.find((blogPost) => blogPost.id === id )
    return(
        <View>
            <Text style = {styles.title}>{item_to_render.title}</Text>
            <Text style = {styles.content}>{item_to_render.content}</Text>
        </View>
        
    );
};

BlogDetailsScreen.navigationOptions = ({ navigation}) => {
    return(
        {headerRight: () => 
            (<TouchableOpacity onPress={() => {navigation.navigate('Edit', {id: navigation.getParam('id')})}}>
        <Entypo name="pencil" size={40} color="black" />
        </TouchableOpacity>
            )
        }
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '500',
        margin: 10
    },
    content: {
        fontSize:15,
        fontWeight: '300',
        margin: 10
    }

});

export default BlogDetailsScreen;