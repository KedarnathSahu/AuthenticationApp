import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        textAlign: 'center',
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007AFF',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 20,
        height: 40
    }
};

export { Button };