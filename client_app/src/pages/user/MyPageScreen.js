import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import palette from '../../styles/palette';

const MyPageScreen = () => {
    return(
        <View style={ styles.container }>
            <Text>MyPage Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.gray[1],
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyPageScreen;