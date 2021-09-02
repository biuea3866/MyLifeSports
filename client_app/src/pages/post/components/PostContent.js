import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import palette from '../../../styles/palette';
import PostContentFragment from './PostContentFragment';

const PostContent = () => {
    return(
        <View style={ styles.container }>
            <PostContentFragment text={ "함께해요" } />
            <PostContentFragment text={ "도와주세요" }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white[0],
    },
});

export default PostContent;