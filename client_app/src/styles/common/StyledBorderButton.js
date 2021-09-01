import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import palette from '../palette';

const StyledBorderButton = ({ 
    text,
    onPress
}) => {
    return(
        <TouchableOpacity
            style={ styles.button }
            onPress={ onPress }
        >
            <Text
                style={ styles.buttonText }
            >
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
        backgroundColor: palette.white[0],
        borderColor: palette.blue[4],
        borderWidth: 2,
        margin: 10,
    },
    buttonText: {
        fontSize: 15,
        color: palette.blue[4],
    },
});

export default StyledBorderButton;