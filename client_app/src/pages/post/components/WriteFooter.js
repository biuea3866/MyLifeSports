import React from 'react';
import { StyleSheet, View } from 'react-native';
import WriteButton from './WriteButton';

const WriteFooter = () => {
    return(
        <View style={ styles.container }>
            <WriteButton />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 370,
        alignItems: 'flex-end',
        margin: 20,
    },
});

export default WriteFooter;