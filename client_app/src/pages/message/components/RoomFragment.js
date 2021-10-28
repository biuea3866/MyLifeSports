import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import palette from '../../../styles/palette';
import MessageCard from './MessageCard';

const RoomFragment = () => {
    const { room } = useSelector(({ room }) => ({ room: room.room }));
    
    return(
        <ScrollView style={ styles.container }>
            {
                room.messages.map(message => { return <MessageCard message={ message } /> })
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        backgroundColor: palette.white[0],
    }
});

export default RoomFragment;