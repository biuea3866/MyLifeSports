import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import palette from '../../../styles/palette';
import Loading from '../../../styles/common/Loading';
import PaymentContent from './PaymentContent';
import { useRoute } from '@react-navigation/native';
import { getRental } from '../../../modules/rentals';

const PaymentFragment = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const { rental } = useSelector(({ rentals }) => ({ rental: rentals.rental }));

    useEffect(() => {
        dispatch(getRental(route.params.rentalId));
    }, [dispatch, route]);

    return(
        <View style={ styles.container }>
            { 
                rental ? 
                <PaymentContent rental={ rental }/> : 
                <Loading />
            }
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
});

export default PaymentFragment;