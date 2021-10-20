import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PaymentButton from '../components/PaymentButton';
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
            {
                !item.payment &&
                <PaymentButton rentalId={ item.rentalId }/>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        marginLeft: 30,
        marginTop: 15,
        marginBottom: 5,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: palette.white[0]
    },
    font: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default MyRenalCard;