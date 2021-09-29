import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import palette from '../palette';

const StyledFullButton = ({ 
    onPress, 
    text,
}) => {
    return(
        <TouchableOpacity style={ styles.button }
                          onPress={ onPress }
        >
            <Text style={ styles.buttonText }>
                { text }
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.blue[4],
        margin: 10,
    },
    buttonText: {
        fontSize: 15,
        color: palette.white[0],
    },
});

export default StyledFullButton;