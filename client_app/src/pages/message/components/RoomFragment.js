import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import palette from '../../../styles/palette';
import MessageCard from './MessageCard';

const RoomFragment = messages => {
    const items = messages.messages;

    return(
        <ScrollView style={ styles.container }>
            {
                items.messages.map(message => { return <MessageCard message={ message } /> })
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.white[0],
    }
});

export default RoomFragment;