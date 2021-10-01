import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { useSelector } from 'react-redux';
import palette from '../../../styles/palette';

const MyPageHeader = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));

    return(
        <View style={ styles.container }>
            <Text style={ styles.text }>
                { user ? user.nickname : null }
            </Text>
            <Text>
                { user ? user.email : null }
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