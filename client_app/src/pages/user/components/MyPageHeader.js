import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import palette from '../../../styles/palette';

const MyPageHeader = () => {
    return(
        <View style={ styles.container }>
            <Text style={ styles.text }>
                nickname
            </Text>
            <Text>
                email
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 420,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.gray[3],
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17,
    },
});

export default MyPageHeader;