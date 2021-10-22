import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import palette from '../../../styles/palette';

const DetailHeader = post => {
    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>
                { post.post.title }
            </Text>
            <Text>
                { post.post.createdAt.substring(0, 15) }
            </Text>
            <Text>
                { post.post.writer }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white[0],
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default DetailHeader;