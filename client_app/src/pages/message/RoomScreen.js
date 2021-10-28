import { useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, checkRoom, getRoom, initRoom } from '../../modules/room';
import RoomFooter from './components/RoomFooter';
import RoomFragment from './components/RoomFragment';
import RoomHeader from './components/RoomHeader';
import Loading from '../../styles/common/Loading';

const RoomScreen = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const { 
        nickname,
        user_a,
        user_b,
        roomId,
        room
    } = useSelector(({ 
        user,
        room
    }) => ({ 
        nickname: user.user.nickname,
        user_a: room.user_a,
        user_b: room.user_b,
        roomId: room.roomId,
        room: room.room
    }));

    useEffect(() => {
        dispatch(changeField({
            key: 'user_a',
            value: nickname,
        }));
    }, [dispatch, nickname]);

    useEffect(() => {
        dispatch(changeField({
            key: 'user_b',
            value: route.params.writer
        }))
    }, [dispatch, route.params.writer]);

    useEffect(() => {
        if(user_a && user_b) {
            dispatch(checkRoom({
                user_a,
                user_b
            }));
        }
    }, [dispatch, user_a, user_b]);

    useEffect(() => {
        if(roomId) {
            dispatch(getRoom(roomId));
        }
    }, [dispatch, roomId]);

    useEffect(() => {
        if(user_a && user_b) {
            if(!roomId) {
                dispatch(initRoom({
                    user_a,
                    user_b
                }));
            }
        }
    }, [dispatch, user_a, user_b, roomId]);

    return(
        <View style={ styles.container }>
            {
                room ?
                <View style={ styles.container }>
                    <RoomHeader />
                    <RoomFragment />
                    <RoomFooter />
                </View> :
                <Loading />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default RoomScreen;