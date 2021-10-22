import { useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { readPost } from '../../modules/posts';
import palette from '../../styles/palette';
import Loading from '../../styles/common/Loading';
import DetailFragment from './components/DetailFragment';

const PostDetailScreen = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const { post } = useSelector(({ posts }) => ({ post: posts.post }));

    useEffect(() => {
        dispatch(readPost(route.params._id));
    }, [dispatch, route]);

    return(
        <ScrollView style={ styles.container }>
            {
                post ?
                <DetailFragment item={ post }/> : <Loading />
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.gray[2] 
    }
})

export default PostDetailScreen;