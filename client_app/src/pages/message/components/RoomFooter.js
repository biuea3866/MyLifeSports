import React from 'react';
import { StyleSheet, View } from 'react-native';
import MessageInput from './MessageInput';

const RoomFooter = () => {
    return(
        <View style={ styles.container }>
            <MessageInput />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        margin: 5,
        bottom: 0,
        left: 0,
        right: 0,
    }
});

export default RoomFooter;