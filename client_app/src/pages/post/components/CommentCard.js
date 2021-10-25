import React, { useEffect } from 'react';
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import palette from '../../../styles/palette';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../../modules/comment';

const CommentCard = ({ item }) => {
    const dispatch = useDispatch();
    const { 
        userId,
        message,
    } = useSelector(({ 
        user,
        comment,
    }) => ({ 
        userId: user.user.userId,
        message: comment.message,
    }));
    const showToastForDelete = e => {
        ToastAndroid.show(
            "Compeletely delete comment", 
            ToastAndroid.SHORT
        );
    };
    const onDelete = e => {
        dispatch(deleteComment(item._id));
    };

    useEffect(() => {
        if(message) {
            showToastForDelete();
        }
    }, [message]);

    return(
        <View style={ styles.card }>
            <Text style={ styles.writer }>
                { item.writer }
            </Text>
            <Text>
                { item.content }
            </Text>
            <View style={ styles.footer }>
                <Text style={ styles.date }>
                    { item.createdAt.substring(0, 15)}
                </Text>
                {
                    item.userId === userId &&
                    <TouchableOpacity onPress={ onDelete }>
                        <Icon name={ "ios-backspace"} 
                              color={ palette.red[1] }
                              size={ 20 }
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderBottomColor: palette.gray[2],
        borderBottomWidth: 2,
        padding: 5
    },
    writer: {
        fontWeight: 'bold',
        fontSize: 15
    }, 
    footer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        fontSize: 12
    }
});

export default CommentCard;