import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import palette from "../../../styles/palette";

const InfoRental = () => {
    const navigation = useNavigation();
    const onRental = state => {
        // navigation.navigate("Rental", {
        //     name: "Rental",
        //     data: state.map
        // })
    };

    return(
        <View style={ styles.container } >
            <TouchableOpacity style={ styles.rental_button } 
                              onPress={ onRental }
            >
                <Text style={ styles.rental_text } >
                    대관하기
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '15%',
        marginTop: 13,
        paddingRight: 10
    },
    rental_button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        borderColor: palette.blue[4],
        borderWidth: 3,
        borderRadius: 30
    },
    rental_text: {
        fontWeight: 'bold'
    }
});

export default InfoRental;