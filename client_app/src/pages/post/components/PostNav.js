import React from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Text 
} from 'react-native';
import palette from '../../../styles/palette';
import { useNavigation } from '@react-navigation/core';

const PostNav = () => {
    const navigation = useNavigation();
    const onPress = e => {
        navigation.navigate(
            'PostWrite', {
                name: 'PostWrite'
            }
        );
    };

    return(
        <View style={ styles.container }>
            <TouchableOpacity style={ styles.writeButton }
                              onPress={ onPress }
            >
                <Text style={ styles.text }>
                    글쓰기
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 420,
        height: 50,
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 30
    },
    writeButton: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: palette.blue[4],
        borderWidth: 3,
        backgroundColor: palette.white[0],
    },
    text: {
        color: palette.blue[4],
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default PostNav;