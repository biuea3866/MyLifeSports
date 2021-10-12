import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import palette from '../../../../styles/palette';

const TimeButton = ({ time }) => {
    const onSetTime = {
        // rental redux module
    };

    return <TouchableOpacity style={ styles.shape }
                             onPress={ onSetTime }
           >
                <Text style={ styles.font }>
                    { time }
                </Text>
           </TouchableOpacity>
};

const styles = StyleSheet.create({
    shape: {
        width: '20%',
        height: 40,
        backgroundColor: palette.blue[4],
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: palette.white[4],
        borderRightColor: palette.gray[4],
        borderWidth: 1
    },
    font: {
        fontWeight: 'bold',
        fontSize: 15,
        color: palette.white[0]
    },
});

export default TimeButton;