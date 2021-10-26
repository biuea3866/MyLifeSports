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
        margin: 5,
    }
});

export default RoomFooter;