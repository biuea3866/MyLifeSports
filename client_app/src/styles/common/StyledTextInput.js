import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import palette from '../palette';

const StyledTextInput = ({
    inputAccessoryViewID,
    placeholder,
    placeholderTextColor,
    onChange,
    value
}) => {
    return(
        <TextInput style={ styles.input }
                   placeholder={ placeholder }
                   placeholderTextColor={ placeholderTextColor }
                   inputAccessoryViewID={ inputAccessoryViewID }
                   onChange={ onChange }
                   value={ value }
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