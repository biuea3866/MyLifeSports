import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import palette from '../../../styles/palette';

const RoomHeader = () => {
    const { 
        room, 
        nickname 
    } = useSelector(({ 
        room,
        user 
    }) => ({
        room: room.room, 
        nickname: user.user.nickname 
    }));
    const otherMan = room.users[0] === nickname ? room.users[1] : room.users[0];

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
        flex: 0.1,
        backgroundColor: palette.white[0],
        padding: 10,
        borderBottomColor: palette.gray[2],
        borderBottomWidth: 2,
        justifyContent: 'center'
    },
    font: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default RoomHeader;