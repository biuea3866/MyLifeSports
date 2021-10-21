import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons-ext';
import palette from '../../../styles/palette';

const WriteNav = () => {
    const values = [
        '함께해요', 
        '도와주세요'
    ];
    const onSelect = e => {
        console.log(e);
    };

    return(
        <View style={ styles.container }>
            <View style={ styles.label }>
                <Text style={ styles.font }>
                    게시글 종류를 정해주세요
                </Text>
            </View>
            <View style={ styles.radio }>
                <SegmentedControls options={ values }
                                   onSelection={ onSelect }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 370,
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginTop: 40,
    },
    label: {
        marginBottom: 10,
        marginLeft: 10,
    },
    font: {
        fontWeight: 'bold'
    },
    radio: {
        width: 200,
        marginBottom: 20
    }
});

export default WriteNav;