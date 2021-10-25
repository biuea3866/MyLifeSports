import React from 'react';
import { StyleSheet, View } from 'react-native';
import CommentCard from './CommentCard';

const CommentList = comments => {
    return(
        <View style={ styles.container }>
            {
                comments.comments &&
                comments.comments.map((item, i) => {
                    return <CommentCard item={ item }/>
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CommentList;