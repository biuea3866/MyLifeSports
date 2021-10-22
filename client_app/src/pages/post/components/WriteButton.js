import React, { useEffect } from 'react';
import { StyleSheet, Text, ToastAndroid, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, writePost } from '../../../modules/post';
import palette from '../../../styles/palette';

const WriteButton = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {
        type,
        title,
        content,
        userId,
        writer,
        nickname,
        rental,
        post
    } = useSelector(({ 
        user,
        post 
    }) => ({
        type: post.type,
        title: post.title,
        content: post.content,
        userId: user.user.userId,
        nickname: user.user.nickname,
        writer: post.writer,
        rental: post.rental,
        post: post.post
    }));
    const showToastForError = e => {
        ToastAndroid.show(
            "Empty input! check inputs", 
            ToastAndroid.SHORT
        );
    };
    const onWrite = e => {
        if([
            type,
            title,
            content,
            userId,
            writer,
        ].includes(null)) {
            showToastForError();

            return;
        }

        dispatch(writePost({
            type,
            title,
            content,
            userId,
            writer,
            rental
        }));
    };

    useEffect(() => {
        dispatch(changeField({
            key: 'userId',
            value: userId
        }));
    }, [dispatch, userId]);

    useEffect(() => {
        dispatch(changeField({
            key: 'writer',
            value: nickname
        }));
    }, [dispatch, nickname]);

    useEffect(() => {
        if(post) {
            dispatch(initialize());

            navigation.navigate("Post");
        }
    }, [dispatch, post]);

    return <TouchableOpacity style={ styles.shape }
                             onPress={ onWrite }
            >
                <Text style={ styles.font }>
                    작성 완료
                </Text>
           </TouchableOpacity>;
};

const styles = StyleSheet.create({
    shape: {
        width: 120,
        height: 40,
        backgroundColor: palette.blue[1],
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        color: palette.white[0],
        fontWeight: 'bold'
    }
});

export default WriteButton;