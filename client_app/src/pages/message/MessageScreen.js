import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../../modules/rooms';
import Loading from '../../styles/common/Loading';
import MessageFragment from './components/MessageFragment';
import MessageHeader from './components/MessageHeader';

const MessageScreen = () => {
    const dispatch = useDispatch();
    const { 
        nickname,
        rooms
    } = useSelector(({ 
        user,
        rooms    
    }) => ({ 
        nickname: user.user.nickname,
        rooms: rooms.rooms
    }));

    useEffect(() => {
        dispatch(getRooms(nickname));
    }, [dispatch, nickname]);

    return(
        <ScrollView>
            {
                rooms ?
                <View>
                    <MessageHeader />
                    <MessageFragment />
                </View> : <Loading />
            }
        </ScrollView>
    );
};

export default MessageScreen;