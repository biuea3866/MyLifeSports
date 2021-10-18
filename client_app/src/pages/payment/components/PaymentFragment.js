import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, requestPayment } from '../../../modules/payment';
import StyledTextInput from '../../../styles/common/StyledTextInput';
import palette from '../../../styles/palette';
import { getRental } from '../../../modules/rentals';
import Loading from '../../../styles/common/Loading';

const PaymentFragment = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const navigation = useNavigation();
    const { 
        paymentName,
        payer,
        rentalId,
        price,
        payment,
        paymentError,
        rental,
        error 
    } = useSelector(({ 
        rentals,
        payment,
    }) => ({ 
        paymentName: payment.paymentName,
        payer: payment.payer,
        rentalId: payment.rentalId,
        price: payment.price,
        payment: payment.payment,
        paymentError: payment.paymentError,
        rental: rentals.rental 
    }));
    const onPayment = () => {
        dispatch(requestPayment({
            paymentName,
            payer,
            rentalId,
            price
        }));
    };

    useEffect(() => {
        dispatch(getRental(route.params.rentalId));
    }, [dispatch, route]);

    useEffect(() => {
        dispatch(changeField({
            key: 'paymentName',
            value: rental.mapName
        }))
    }, [dispatch, rental]);

    useEffect(() => {
        dispatch(changeField({
            key: 'payer',
            value: rental.borrower
        }))
    }, [dispatch, rental]);

    useEffect(() => {
        dispatch(changeField({
            key: 'rentalId',
            value: rental.rentalId
        }))
    }, [dispatch, rental]);

    useEffect(() => {
        dispatch(changeField({
            key: 'price',
            value: rental.price
        }))
    }, [dispatch, rental]);

    useEffect(() => {
        if(payment) {
            navigation.goBack();

            dispatch(initialize())
        }

        if(paymentError) {
            // setError
        }
    }, [dispatch, payment]);

    useEffect(() => {
        if(error) {
            // setError
        }
    }, [error]);

    return(
        rental ?
        <View style={ styles.container }>
            <View style={ styles.row } >
                <Text style={ styles.label } >
                    대관 번호
                </Text>
                <StyledTextInput placeholderTextColor={ palette.black[0] }
                                value={ rental.rentalId }
                />
            </View>
            <View style={ styles.row }>
                <Text style={ styles.label }>
                    결제 내역
                </Text>
                <StyledTextInput placeholderTextColor={ palette.gray[3] }
                                value={ rental.mapName }
                />
            </View>
            <View style={ styles.row }>
                <Text style={ styles.label }>
                    결제 금액
                </Text>
                <StyledTextInput placeholderTextColor={ palette.gray[3] }
                                value={ rental.price.toString() }
                />
            </View>
            <View style={ styles.row }>
                <Text style={ styles.label } >
                    사용자명
                </Text>
                <StyledTextInput placeholderTextColor={ palette.gray[3] }
                                value={ rental.borrower }
                />
            </View>
            <View style={ styles.row } >
                <Text style={ styles.label }>
                    체육관 전화번호
                </Text>
                <StyledTextInput placeholderTextColor={ palette.gray[3] }
                                value={ rental.tel }
                />
            </View>
            <View style={ styles.row } >
                <Text style={ styles.label } >
                    대관 날짜
                </Text>
                <StyledTextInput placeholderTextColor={ palette.gray[3] }
                                value={ rental.date + "\t" + rental.time }
                />
            </View>
            <View style={ styles.button_container }>
                <TouchableOpacity style={ styles.shape }
                                onPress={ onPayment }
                >
                    <Text style={ styles.font }>
                        결제하기
                    </Text>
                </TouchableOpacity>
            </View>
        </View> : <Loading />
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '90%',
        height: '90%',
        backgroundColor: palette.white[0],
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    label: {
        fontWeight: 'bold',
        padding: 10,
    },
    button_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    shape: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 70,
        backgroundColor: palette.blue[2]
    },
    font: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: palette.white[0]
    }
});

export default PaymentFragment;