import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import StyledTextInput from '../../../styles/common/StyledTextInput';
import palette from '../../../styles/palette';

const PaymentContent = () => {
    const { rental } = useSelector(({ rental }) => ({ rental: rental.rental }));
    const onPayment = () => {

    };

    return(
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
        </View>
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

export default PaymentContent;