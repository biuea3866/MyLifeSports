import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';

const SendButton = () => {
    return <TouchableOpacity style={ styles.button }>
                <Icon name={ "ios-paper-plane" } 
                      color={ palette.blue[0] }
                      size={ 30 }
                />
           </TouchableOpacity>
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        backgroundColor: palette.gray[0]
    }
});

export default SendButton