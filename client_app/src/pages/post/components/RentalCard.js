import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RentalCard = () => {
    return (
        <View style={ styles.card }>
            <TouchableOpacity>
                <View>
                    <Text>
                        sample1
                    </Text>
                </View>
                <View>
                    <Text>
                        sample2
                    </Text>
                </View>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 370,
        height: 80
    }
});

export default RentalCard;