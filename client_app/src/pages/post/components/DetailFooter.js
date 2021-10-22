import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import palette from '../../../styles/palette';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailFooter = post => {
    const onChat = e => {

    };

    return(
        <View style={ styles.container }>
            <View style={ styles.search_box }>
                <TextInput style={ styles.input }
                           multiline={ true }
                />
                <TouchableOpacity onPress={ onChat }>
                    <Icon name={ 'ios-paper-plane-outline' }
                          size={ 30 }
                          color={ palette.blue[1] }
                    />
                </TouchableOpacity>
            </View>
            <View style={ styles.comment_box }>
                {/* Add chat */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        backgroundColor: palette.white[0]
    },
    search_box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 10,
        borderRadius: 10,
        backgroundColor: palette.gray[1]
    },
    input: {
        flex: 0.9,
        margin: 5,
    },
    comment_box: {
        flex: 1,
        margin: 10,
        backgroundColor: palette.white[0]
    }
});

export default DetailFooter;