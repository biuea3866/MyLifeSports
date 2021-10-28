import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import palette from '../../../styles/palette';
import CommentButton from './CommentButton';
import { changeField } from '../../../modules/comment';
import CommentList from './CommentList';
import { useNavigation } from '@react-navigation/core';

const DetailFooter = post => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {
        userId,
        nickname,
        content,
        writer,
    } = useSelector(({ 
        user,
        comment,
        posts
    }) => ({
        userId: user.user.userId,
        nickname: user.user.nickname,
        content: comment.content,
        writer: posts.post.writer
    }));
    const onChange = e => {
        dispatch(changeField({
            key: 'content',
            value: e.nativeEvent.text
        }));
    };
    const toMessage = e => {
        navigation.navigate("MessageRoom", {
            "writer": writer
        });
    };

    useEffect(() => {
        dispatch(changeField({
            key: 'userId',
            value: userId
        }))
    }, [dispatch, userId]);

    useEffect(() => {
        dispatch(changeField({
            key: 'writer',
            value: nickname
        }));
    }, [dispatch, nickname]);

    return(
        <View style={ styles.container }>
            <View style={ styles.message_box }>
                <TouchableOpacity style={ styles.button }
                                  onPress={ toMessage }
                >
                    <Text style={ styles.font }>
                        채팅으로 할래요
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={ styles.search_box }>
                <TextInput style={ styles.input }
                           multiline={ true }
                           onChange={ onChange }
                           value={ content }
                />
                <CommentButton />
            </View>
            <View style={ styles.comment_box }>
                <CommentList comments={ post.post.comments } />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        backgroundColor: palette.white[0]
    },
    search_box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 10,
        borderRadius: 10,
        backgroundColor: palette.gray[1]
    },
    input: {
        flex: 0.9,
        margin: 5,
    },
    comment_box: {
        flex: 1,
        margin: 10,
        backgroundColor: palette.white[0],
    },
    message_box: {
        flex: 1,
        borderRadius: 10,
        shadowColor: palette.black[0],
        shadowOpacity: 0.8,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 10,
        alignItems: 'flex-end',
        padding: 5,
        backgroundColor: palette.white[0]
    },
    button: {
        backgroundColor: palette.blue[0],
        padding: 10,
        borderRadius: 5
    },
    font: {
        fontWeight: 'bold',
        color: palette.white[0],
        fontSize: 14
    }
});

export default DetailFooter;