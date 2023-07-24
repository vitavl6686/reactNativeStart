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

      <Button
          title = "Go to Counter Screen"
          onPress= {() => navigation.navigate("Counter")}
      />
      <Button
          title = "Go to Colour Screen"
          onPress= {() => navigation.navigate("Colour")}
      />
      <Button
          title = "Go to Palette Screen"
          onPress= {() => navigation.navigate("Palette")}
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
