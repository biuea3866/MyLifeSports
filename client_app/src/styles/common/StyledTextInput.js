import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import palette from '../palette';

const StyledTextInput = ({
    name,
    placeholder,
    placeholderTextColor,
    inputAccessoryViewID,
    onChange,
}) => {
    return(
        <TextInput
            style={ styles.input }
            inputAccessoryViewID={ name }
            placeholder={ placeholder }
            placeholderTextColor={ placeholderTextColor }
            inputAccessoryViewID={ inputAccessoryViewID }
            onChange={ onChange }
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.white[0],
        color: palette.black[0],
        fontSize: 15,
        margin: 10,
    },
});

export default StyledTextInput;