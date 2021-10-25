import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, TextInput, View } from 'react-native';
import palette from '../../../styles/palette';
import CommentButton from './CommentButton';
import { changeField } from '../../../modules/comment';
import CommentList from './CommentList';

const DetailFooter = post => {
    const dispatch = useDispatch();
    const {
        userId,
        nickname,
        content,
    } = useSelector(({ 
        user,
        comment
    }) => ({
        userId: user.user.userId,
        nickname: user.user.nickname,
        content: comment.content
    }));
    const onChange = e => {
        dispatch(changeField({
            key: 'content',
            value: e.nativeEvent.text
        }));
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
        backgroundColor: palette.white[0]
    }
});

export default DetailFooter;