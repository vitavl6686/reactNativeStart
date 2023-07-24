import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hey</Text>
      <Button 
              title="Go to Components Demo" 
              onPress={() => {navigation.navigate("Components")}}
      />

      <Button 
            title = "Go to List Demo"
            onPress = {() => {navigation.navigate("List")}}
      /> 

      <Button
          title = "Go to Image Screen"
          onPress= {() => navigation.navigate("Images")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default HomeScreen;
