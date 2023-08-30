import { Button, Text } from "@rneui/base";
import React, { useContext } from "react";
import { View,  StyleSheet } from 'react-native';
import AuthContext from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";


const accountDetailsScreen = () => {
    const {data, action} = useContext(AuthContext);
    return(
        <View style = {{flex: 1, top: 80}}>
            <Text h2 = {true} style = {styles.block}>
            Account Details
            </Text>
            <Button
                title="Sign out"
                type = 'outline'
                style = {styles.block}
                onPress={() => {action.signOut()}}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
        margin: 10
    }
});

export default accountDetailsScreen;