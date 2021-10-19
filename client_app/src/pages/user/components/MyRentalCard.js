import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import palette from '../../../styles/palette';

const MyRenalCard = ({ item }) => {
    return(
        <View style={ styles.container }>
            <Text style={ styles.font }>
                { item.date + " " + item.time }
            </Text>
            <Text style={ styles.font }>
                { item.mapName }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 50,
        marginLeft: 30,
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 30,
        backgroundColor: palette.gray[3]
    },
    font: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default MyRenalCard;