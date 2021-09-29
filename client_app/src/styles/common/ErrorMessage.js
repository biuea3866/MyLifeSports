import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import palette from '../palette';

const ErrorMessage = ({ text }) => {
    return <Text style={ styles.message }>
              { text }
           </Text>
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        margin: 10,
    },
    message: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: palette.red[6],
        fontSize: 15,
        margin: 10,
    }
});

export default ErrorMessage;