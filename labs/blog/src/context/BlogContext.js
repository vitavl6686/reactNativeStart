import React, { useReducer, useState } from 'react';
import jsonServer from '../api/jsonServer';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost':
            return [...state, {title: action.payload.title, content: action.payload.content, id: Math.floor(Math.random()*99999)}]
        case 'delete_blogpost': {
            let post_to_delete = action.payload;
            let new_state = [];
            for (let i = 0; i < state.length; i++) {
                if (state[i].id !== post_to_delete) {
                    new_state.push(state[i]);
                }
            }
            return new_state;
        }

        case 'edit_blogpost': {
            let id = action.payload.id;
            let new_state = [];
            
            for (let i = 0; i < state.length; i++) {
                if (state[i].id !== id) {
                    new_state.push(state[i]);
                }
                if (state[i].id === id) {
                    new_state.push({id: id, content: action.payload.content, title: action.payload.title})
                }
            }
            return new_state;
        }

        case 'get_blogpost': {
            return action.payload;
        }

        default:
            return state
    }
}
export const BlogProvider = ({children}) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);
    const [networkError, setNetworkError] = useState('');

    const getBlogPosts = async () => {
        try {
        const response = await jsonServer.get('/blogposts');
        dispatch({type: 'get_blogposts', payload: response.data});
        } catch(e) {
            console.log("The error happened when trying to connect to the server: ", e);
            setNetworkError('Something went wrong');
        }
    };

    const addBlogPost = (title, content) => {
        dispatch({type: 'add_blogpost', payload: {title: title, content: content}})
    };

    const deleteBlogPost = (id) => {
        dispatch({type: 'delete_blogpost', payload: id});
    };

    const editBlogPost = (id, title, content) => {
        dispatch({type: 'edit_blogpost', payload: {id, title, content}})
    };

    return(
        <BlogContext.Provider 
            value={{data: blogPosts,
                    addBlogPost: addBlogPost,
                    deleteBlogPost: deleteBlogPost,
                    editBlogPost: editBlogPost,
                    networkError: networkError
                    }}
        >
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;