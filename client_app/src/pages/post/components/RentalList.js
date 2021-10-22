import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getRentals } from '../../../modules/rentals';
import RentalCard from './RentalCard';

const RentalList = () => {
    const dispatch = useDispatch();
    const { 
        userId,
        rentals,
    } = useSelector(({ 
        user,
        rentals
    }) => ({
        userId: user.user.userId,
        rentals: rentals.rentals,
    }));

    useEffect(() => {
        dispatch(getRentals(userId))    
    }, [dispatch, userId]);

    return(
        <View style={ styles.container }>
            {
                rentals ?
                rentals.map((item, i) => {
                    return <RentalCard item={ item }/>
                }) : 
                <Text>
                    대관 내역이 없어요!
                </Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 370,
        justifyContent: 'center',
    }
});

export default RentalList;