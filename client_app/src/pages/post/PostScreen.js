import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import palette from '../../styles/palette';
import PostContent from './components/PostContent';
import PostHeader from './components/PostHeader';
import PostNav from './components/PostNav';

const PostScreen = () => {
    return(
        <ScrollView style={ styles.container }>
            <PostHeader />
            <PostNav />
            <PostContent />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white[0],
    },
});

export default PostScreen;