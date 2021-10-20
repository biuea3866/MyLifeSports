import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getRentals } from '../../../modules/rentals';
import Loading from '../../../styles/common/Loading';
import palette from '../../../styles/palette';
import MyRenalCard from './MyRentalCard';

const MyRentalFramgment = () => {
    const dispatch = useDispatch();
    const { 
        userId,
        rentals
    } = useSelector(({ 
        user,
        rentals
    }) => ({
        userId: user.user.userId, 
        rentals: rentals.rentals 
    }));
    
    useEffect(() => {
        dispatch(getRentals(userId));
    }, [dispatch]);

    return(
        <View style={ styles.container }>
            {
                rentals ?
                rentals.map((item, i) => {
                    return <MyRenalCard i={ i }
                                        item={ item }
                            />
                }) : <Loading />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.gray[2],
    }
});

export default MyRentalFramgment;