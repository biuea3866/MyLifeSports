import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import palette from '../../../styles/palette';

const MessageCard = message => {
    const { nickname } = useSelector(({ user }) => ({ nickname: user.user.nickname }));
    message = message.message

    return(
        <View style={ styles.container }>
            <View style={
                nickname === message.sender ?
                styles.send_date : styles.recevie_date
            }>
                <Text>
                    { message.createdAt.substring(0, 21) }
                </Text>
            </View>
            <View style={ 
                nickname === message.sender ?
                styles.send : styles.receiver
            }>
                <Text style={
                    nickname === message.sender ? 
                    styles.sender_font : styles.receiver_font
                }>
                    { message.content }
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    send: {
        maxWidth: 300,
        padding: 10,
        marginLeft: 100,
        backgroundColor: palette.blue[0],
        borderColor: palette.blue[0],
        borderWidth: 1,
        borderRadius: 10
    },
    sender_font: {
        color: palette.white[0]
    },
    send_date: {
        marginLeft: 250,
    },
    receiver: {
        maxWidth: 300,
        padding: 10,
        backgroundColor: palette.white[0],
        borderColor: palette.blue[0],
        borderWidth: 1,
        borderRadius: 10,
    },
    receiver_font: {
        color: palette.blue[0]
    },
    recevie_date: {
        marginLeft: 10
    }
});

export default MessageCard;