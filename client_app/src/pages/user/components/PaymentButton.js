import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import palette from '../../../styles/palette';
import { useDispatch } from 'react-redux';
import { deleteRental } from '../../../modules/rental';

const PaymentButton = rentalId => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const toPaymentPage = e => {
        navigation.navigate("Payment", {
            rentalId: rentalId
        });
    };
    const onCancel = e => {
        dispatch(deleteRental(rentalId.rentalId));
    };

    return (
        <View style={ styles.container }>
            <TouchableOpacity style={ styles.payment_shape }
                              onPress={ toPaymentPage } 
            >
                <Text style={ styles.font }>
                    결제하기
                </Text>
           </TouchableOpacity>
           <TouchableOpacity style={ styles.cancel_shape }
                             onPress={ onCancel } 
            >
                <Text style={ styles.font }>
                    취소하기
                </Text>
           </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    payment_shape: {
        width: '30%',
        height: 60,
        borderRadius: 6,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.blue[2],
    },
    cancel_shape: {
        width: '30%',
        height: 60,
        borderRadius: 6,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.red[0],
    },
    font: {
        fontSize: 18,
        color: palette.white[0]
    }
});

export default PaymentButton;