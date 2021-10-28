import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, sendMessage } from '../../../modules/message';
import { getRoom } from '../../../modules/room';

const SendButton = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const {
        sender,
        receiver,
        content,
        result,
        roomId,
        nickname
    } = useSelector(({ 
        message,
        room,
        user 
    }) => ({
        sender: message.sender,
        receiver: message.receiver,
        content: message.content,
        result: message.result,
        roomId: room.roomId,
        nickname: user.user.nickname
    }));
    const onSend = e => {
        dispatch(sendMessage({
            sender,
            receiver,
            content
        }));

        setRefresh(true);
    }
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        dispatch(changeField({
            key: 'sender',
            value: nickname
        }));
    }, [dispatch, nickname]);

    useEffect(() => {
        dispatch(changeField({
            key: 'receiver',
            value: route.params.writer
        }));
    }, [dispatch, route.params.writer]);

    useEffect(() => {
        setRefresh(false);
        
        dispatch(initialize('content'));

        dispatch(getRoom(roomId));
    }, [dispatch, refresh]);

    return <TouchableOpacity style={ styles.button }
                             onPress={ onSend }
           >
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