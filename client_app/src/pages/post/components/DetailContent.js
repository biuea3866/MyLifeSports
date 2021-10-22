import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import palette from '../../../styles/palette';

const DetailContent = post => {
    return(
        <View style={ styles.container }>
            <Text>
                { post.post.content }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: palette.white[0]
    }
});

export default DetailContent;