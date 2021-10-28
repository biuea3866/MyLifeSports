import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../../../styles/palette';

const MessageHeader = () => {
    const onPress = e => {};
    
    return(
        <View style={ styles.container }>
            <View style={ styles.searchBox }>
                <TextInput style={ styles.input } />
                <TouchableOpacity onPress={ onPress }>
                    <Icon name={ 'ios-search-outline' }
                          size={ 19 }
                          color={ palette.white[0] }
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: palette.blue[5],
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 50,
        backgroundColor: palette.blue[7],
        borderRadius: 30,
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 300,
        height: 50,
        backgroundColor: palette.blue[7],
        borderRadius: 30,
        color: palette.white[0],
        fontWeight: '400',
        fontSize: 16
    },
});

export default MessageHeader;