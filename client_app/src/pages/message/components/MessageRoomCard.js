import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import palette from '../../../styles/palette';

const RoomCard = item => {
    const navigation = useNavigation();
    const { nickname } = useSelector(({ user }) => ({ nickname: user.user.nickname }));
    const toRoom = e => {
        navigation.navigate("MessageRoom", {
            room: item.item
        });
    };
    const onAlert = e => {
        Alert.alert(
            '채팅방을 나가시겠어요?',
            null,
            [
                {
                    text: '네, 나갈래요',
                    onPress: () => console.log("Exit event")
                },
                {
                    text: '아니요',
                    onPress: () => { return; }
                }
            ]
        );
    };

    return(
        <View style={ styles.container }>
            <TouchableOpacity onPress={ toRoom }
                              onLongPress={ onAlert } 
            >
                <View style={ styles.row }>
                    <Text>
                        { item.item.messages[item.item.messages.length - 1].createdAt.substring(0, 24) }
                    </Text>
                </View>
                <View style={ styles.row }>
                    <Text style={ styles.font }>
                        { 
                            item.item.messages[0].sender === nickname ?
                            item.item.messages[0].receiver : item.item.messages[0].sender
                        } 님 과의 메시지
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white[0],
        padding: 10,
        margin: 10
    },
    row: {
        margin: 5
    },
    font: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default RoomCard;