import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import palette from '../../styles/palette';

const MyPostScreen = () => {
    return(
        <View style={ styles.container }>
            <Text>MyPostScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white[0],      
    },
});

export default MyPostScreen;