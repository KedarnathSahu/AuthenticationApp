//Import Library to create component
import React from 'react';
import { Text, View } from 'react-native';

//Create component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//make the component available to other parts of the app
export { Header };