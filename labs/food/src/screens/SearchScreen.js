import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {


    const [userSearch, setUserSearch] = useState('');
    const [errorMessage, searchAPI, results, best, good, bad] = useResults();

    return (
        <View style = { styles.mainStyle }>
            <SearchBar 
                userSearch = { userSearch } 
                change = { (x) => setUserSearch(x)}
                onSubmit = {() => searchAPI(userSearch)}
            />
            {errorMessage ? <Text style = {{color: 'red'}}>{errorMessage}</Text> : null }

            <ResultsList name = "Very Good" list = {best} />
            <ResultsList name = "Bit Worse" list = {good} />
            <ResultsList name = "Avoid" list = {bad} />
        </View>
    )
};

const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: 'white'
    }
});

export default SearchScreen;