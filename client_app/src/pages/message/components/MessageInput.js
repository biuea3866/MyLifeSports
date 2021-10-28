import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../../modules/message';
import palette from '../../../styles/palette';
import SendButton from './SendButton';

const MessageInput = () => {
    const dispatch = useDispatch();
    const { content } = useSelector(({ message }) => ({ content: message.content }));
    const onChange = e => {
        dispatch(changeField({
            key: 'content',
            value: e.nativeEvent.text
        }));
    };
    
    return(
        <View style={ styles.container }>
            <TextInput style={ styles.input }
                       multiline={ true }
                       onChange={ onChange }
                       value={ content }
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