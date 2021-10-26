import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import palette from '../../../styles/palette';

const RoomHeader = messages => {
    messages = messages.messages;
    const { nickname } = useSelector(({ user }) => ({ nickname: user.user.nickname }));
    const otherMan = messages.messages[0].sender === nickname ? messages.messages[0].receiver : messages.messages[0].sender;

    return(
        <View style={ styles.container }>
            <Text style={ styles.font }>
                { otherMan } 님과의 채팅방
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        backgroundColor: palette.white[0],
        padding: 10,
        borderBottomColor: palette.gray[2],
        borderBottomWidth: 2,
    },
    font: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default RoomHeader;