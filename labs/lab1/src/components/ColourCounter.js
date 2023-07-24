import React from 'react';
import {Text, View, Button} from 'react-native';

const ColourCounter = ({colour, increase, decrease, current}) => {
    return(
        <View>
            <Text>{colour}:{current}</Text>
                <Button 
                    title = {`More ${colour}`}
                    onPress={increase}
                />
                <Button 
                    title = {`Less ${colour}`}
                    onPress = {decrease}
                />
        </View>
        )
    }





export default ColourCounter;