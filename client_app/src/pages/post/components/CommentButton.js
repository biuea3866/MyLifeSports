import React, { useEffect } from 'react';
import { StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, commentRegister, initialize } from '../../../modules/comment';
import palette from '../../../styles/palette';

const CommentButton = () => {
    const dispatch = useDispatch();
    const showToastForComment = e => {
        ToastAndroid.show(
            "Compeletely register comment", 
            ToastAndroid.SHORT
        );
    };
    const {
        _id,
        postId,
        userId,
        writer,
        content,
        message,
    } = useSelector(({
        posts,
        comment
    }) => ({
        _id: posts.post._id,
        postId: comment.postId, 
        userId: comment.userId,
        writer: comment.writer,
        content: comment.content,
        message: comment.message,
    }));

    const onChat = e => {
        dispatch(commentRegister({
            postId,
            userId,
            writer,
            content
        }));
    };

    useEffect(() => {
        dispatch(changeField({
            key: 'postId',
            value: _id
        }));
    }, [dispatch, _id]);

    useEffect(() => {
        if(message) {
            showToastForComment();

            dispatch(initialize());
        }
    }, [dispatch, message]);

    return <TouchableOpacity onPress={ onChat }>
                <Icon name={ 'ios-paper-plane-outline' }
                      size={ 30 }
                      color={ palette.blue[1] }
                />
           </TouchableOpacity>
};

const styles = StyleSheet.create({
    shape: {

    }
});

export default CommentButton;