import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import palette from '../../../styles/palette';
import SendButton from './SendButton';

const MessageInput = () => {
    return(
        <View style={ styles.container }>
            <TextInput style={ styles.input }
                       multiline={ true }
            />
            <SendButton />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
    },
    input: {
        width: '90%',
        backgroundColor: palette.gray[0],
    },
});

export default MessageInput;