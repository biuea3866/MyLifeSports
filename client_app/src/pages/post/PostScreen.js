import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import palette from '../../styles/palette';

const PostScreen = () => {
    return(
        <ScrollView style={ styles.container }>
            <Text>Post Screen</Text>
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