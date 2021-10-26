import { useRoute } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RoomFooter from './components/RoomFooter';
import RoomFragment from './components/RoomFragment';
import RoomHeader from './components/RoomHeader';

const MessageRoom = () => {
    const route = useRoute();
    const messages = route.params.room;

    return(
        <View style={ styles.container }>
            <RoomHeader messages={ messages } />
            <RoomFragment messages={ messages }/>
            <RoomFooter messages={ messages }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MessageRoom;