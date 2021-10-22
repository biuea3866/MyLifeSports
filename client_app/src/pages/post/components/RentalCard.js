import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../../modules/post';
import palette from '../../../styles/palette';

const RentalCard = ({ item }) => {
    const dispatch = useDispatch();
    const { rental } = useSelector(({ post }) => ({ rental: post.rental }));
    const onChange = e => {
        dispatch(changeField({
            key: 'rental',
            value: item
        }));
    };

    return (
        <View style={ 
            rental.rentalId !== item.rentalId ?
            styles.card :
            styles.select_card
        }>
            <TouchableOpacity onPress={ onChange }>
                <View>
                    <Text style={ 
                        rental.rentalId === item.rentalId &&
                        styles.select_font
                    }>
                        { item.mapName }
                    </Text>
                </View>
                <View>
                    <Text style={ 
                        rental.rentalId === item.rentalId &&
                        styles.select_font
                    }>
                        { item.date }
                    </Text>
                </View>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 350,
        height: 70,
        backgroundColor: palette.gray[2],
        margin: 10,
        padding: 15,
        borderRadius: 10
    },
    select_card: {
        width: 350,
        height: 70,
        backgroundColor: palette.blue[1],
        margin: 10,
        padding: 15,
        borderRadius: 10
    },
    select_font: {
        color: palette.white[0]
    }
});

export default RentalCard;