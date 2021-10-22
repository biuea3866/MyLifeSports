import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { listAll } from '../../../modules/posts';
import palette from '../../../styles/palette';
import Loading from '../../../styles/common/Loading';
import PostCard from './PostCard';
import { useIsFocused } from '@react-navigation/core';

const PostContent = () => {
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const { posts } = useSelector(({ posts }) => ({ posts: posts.posts }));

    useEffect(() => {
        dispatch(listAll());
    }, [dispatch, isFocused]);

    return(
        <View style={ styles.container }>
            {
                posts ?
                posts.map((item, i) => {
                    return <PostCard i={ i }
                                     item={ item } 
                           />
                }) : <Loading />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.gray[2],
    },
});

export default PostContent;