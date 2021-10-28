import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import Loading from '../../../styles/common/Loading';
import palette from '../../../styles/palette';
import RoomCard from './MessageRoomCard';

const MessageFragment = () => {
    const { rooms } = useSelector(({ rooms }) => ({ rooms: rooms.rooms }));

    return(
        <View style={ styles.container }>
            { 
                rooms ?
                rooms.map(room => { 
                    return <RoomCard item={ room }/> 
                }) : <Loading />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.gray[1]
    }
});

export default MessageFragment;