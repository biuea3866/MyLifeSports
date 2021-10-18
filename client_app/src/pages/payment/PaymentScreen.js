import React from 'react';
import { StyleSheet, View } from 'react-native';
import PaymentFragment from './components/PaymentFragment';

const PaymentScreen = () => {
    return(
        <View style={ styles.container }>
            <PaymentFragment />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default PaymentScreen;