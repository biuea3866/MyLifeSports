import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../../../styles/common/Loading';
import palette from '../../../styles/palette';
import RoomCard from './MessageRoomCard';

const MessageFragment = () => {
    const [room, setRoom] = useState(null);
    const dummy = [
        {
            "roomId": 1,
            "messages": [
                {
                    "sender": "biuea",
                    "receiver": "asd",
                    "content": "test-001 message that is send by biuea to asd",
                    "createdAt": Date("2021-10-26T04:24:37.295Z")
                },
                {
                    "sender": "biuea",
                    "receiver": "asd",
                    "content": "test-002 message that is send by biuea to asd",
                    "createdAt": Date("2021-10-26T04:24:37.295Z")
                },
                {
                    "sender": "asd",
                    "receiver": "biuea",
                    "content": "test-003 message that is send by asd to biuea",
                    "createdAt": Date("2021-10-26T04:24:37.295Z")
                }
            ],
            "createdAt": Date("2021-10-26T04:24:37.295Z")
        }
    ];

    // setRoom(
    //     dummy ?
    //     dummy.map(item => { 
    //         return <RoomCard item={ item }/> 
    //     }) : <Loading />
    // );

    return(
        <View style={ styles.container }>
            { 
                dummy ?
                dummy.map(item => { 
                    return <RoomCard item={ item }/> 
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