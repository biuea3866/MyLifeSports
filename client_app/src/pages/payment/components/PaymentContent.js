import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import palette from '../../../styles/palette';
import StyledTextInput from '../../../styles/common/StyledTextInput';
import { initialize } from '../../../modules/rentals';
import { changeField, requestPayment } from '../../../modules/payment';

const PaymentContent = rental => {
    const { 
        paymentName,
        payer,
        rentalId,
        price,
        payment,
        paymentError, 
    } = useSelector(({ 
        payment,
    }) => ({ 
        paymentName: payment.paymentName,
        payer: payment.payer,
        rentalId: payment.rentalId,
        price: payment.price,
        payment: payment.payment,
        paymentError: payment.paymentError,
    }));
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const onPayment = () => {
        dispatch(requestPayment({
            paymentName,
            payer,
            rentalId,
            price
        }));

        dispatch(initialize());
    };

    useEffect(() => {
        dispatch(changeField({
            key: 'paymentName',
            value: rental.rental.mapName
        }))
    }, []);

    useEffect(() => {
        dispatch(changeField({
            key: 'payer',
            value: rental.rental.borrower
        }))
    }, []);

    useEffect(() => {
        dispatch(changeField({
            key: 'rentalId',
            value: rental.rental.rentalId
        }))
    }, []);

    useEffect(() => {
        dispatch(changeField({
            key: 'price',
            value: rental.rental.price
        }))
    }, []);

    useEffect(() => {
        if(payment) {
            dispatch(initialize())

            navigation.navigate("MyPage");
        }

        if(paymentError) {
            // setError
        }
    }, [dispatch, payment, paymentError]);

    // useEffect(() => {
    //     if(error) {
    //         // setError
    //     }
    // }, [error]);

    return(
        <View>
            <View style={ styles.row } >
                <Text style={ styles.label } >
                    대관 번호
                </Text>
                <StyledTextInput placeholderTextColor={ palette.black[0] }
                                 value={ rental.rental.rentalId }
                />
            </View>
            <View style={ styles.row }>
                <Text style={ styles.label }>
                    결제 내역
                </Text>
                <StyledTextInput placeholderTextColor={ palette.gray[3] }
                                 value={ rental.rental.mapName }
                />
            </View>
            <View style={ styles.row }>
                <Text style={ styles.label }>
                    결제 금액
                </Text>
                <StyledTextInput placeholderTextColor={ palette.gray[3] }
                                 value={ rental.rental.price.toString() }
                />
            </View>
            <View style={ styles.row }>
                <Text style={ styles.label } >
                    사용자명
                </Text>
                <StyledTextInput placeholderTextColor={ palette.gray[3] }
                                 value={ rental.rental.borrower }
                />
            </View>
            <View style={ styles.row } >
                <Text style={ styles.label }>
                    체육관 전화번호
                </Text>
                <StyledTextInput placeholderTextColor={ palette.gray[3] }
                                 value={ rental.rental.tel }
                />
            </View>
            <View style={ styles.row } >
                <Text style={ styles.label } >
                    대관 날짜
                </Text>
                <StyledTextInput placeholderTextColor={ palette.gray[3] }
                                 value={ rental.rental.date + "\t" + rental.rental.time }
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
        </View>
    );
};

const styles = StyleSheet.create({
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

export default PaymentContent;