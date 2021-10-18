import React from 'react';
import { StyleSheet, View } from 'react-native';
import PaymentContent from './components/PaymentFragment';

const PaymentScreen = () => {
    return(
        <View style={ styles.container }>
            <PaymentContent />
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