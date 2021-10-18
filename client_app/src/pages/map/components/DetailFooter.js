import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, makeRental } from '../../../modules/rental';
import palette from '../../../styles/palette';
import user from '../../../modules/user';

const DetailFooter = ({ setError }) => {
    const dispatch = useDispatch();
    const {
        price,
        nickname,
        tel,
        userId,
        date,
        time,
        _id,
        nm,
        rental,
        rentalError
    } = useSelector(({
        user,
        map,
        rental
    }) => ({
        price: rental.price,
        nickname: user.user.nickname,
        tel: map.map.tel,
        userId: user.user.userId,
        date: rental.date,
        time: rental.time,
        _id: map.map._id,
        nm: map.map.nm,
        rental: rental.rental,
        rentalError: rental.rentalError
    }));
    const navigation = useNavigation();
    const onRental = () => {
        const borrower = nickname;
        const mapId = _id;
        const mapName = nm;

        dispatch(makeRental({
            price,
            borrower,
            tel,
            userId,
            date,
            time,
            mapId,
            mapName
        }));
    };

    useEffect(() => {
        dispatch(changeField({
            key: 'price',
            value: 100000,
        }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(changeField({
            key: 'borrower',
            value: nickname,
        }));
    }, [dispatch, nickname]);

    useEffect(() => {
        dispatch(changeField({
            key: 'tel',
            value: tel,
        }));
    }, [dispatch, tel]);

    useEffect(() => {
        dispatch(changeField({
            key: 'userId',
            value: userId,
        }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(changeField({
            key: 'mapId',
            value: _id,
        }));
    }, [dispatch, _id]);

    useEffect(() => {
        dispatch(changeField({
            key: 'mapName',
            value: nm,
        }));
    }, [dispatch, nm]);

    useEffect(() => {
        if(rental) {
            navigation.navigate("Payment");
        }

        if(rentalError) {
            setError(rentalError.message);

            navigation.goBack();
        }
    }, [dispatch, rental]);

    return(
        <View style={ styles.container }>
            <TouchableOpacity style={ styles.shape }
                              onPress={ onRental }
            >
                <Text style={ styles.font }>
                    대관하기
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20,
        backgroundColor: palette.white[0]
    },
    shape: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 50,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: palette.blue[4]
    },
    font: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default DetailFooter;