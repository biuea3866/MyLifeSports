import React from 'react';
import { StyleSheet, View } from 'react-native';
import palette from '../../../styles/palette';
import RentalCard from './RentalCard';

const RentalList = () => {
    return(
        <View style={ styles.container }>
            <RentalCard />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 370,
        marginLeft: 20,
        marginTop: 40,
    }
});

export default RentalList;