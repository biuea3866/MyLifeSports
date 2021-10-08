import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MapConsumer } from "../context/MapContext";

const InfoRental = () => {
    const navigation = useNavigation();
    const onRental = state => {
        // navigation.navigate("Rental", {
        //     name: "Rental",
        //     data: state.map
        // })
        navigation.navigate("Register");
    };

    return(
        <View style={ styles.container } >
            <MapConsumer>
                {
                    ({ state }) => (
                        <TouchableOpacity style={ styles.rental_button } 
                                          onPress={ onRental(state) }
                        >
                            <Text style={ styles.rental_text } >
                                대관하기
                            </Text>
                        </TouchableOpacity>
                    )
                }
            </MapConsumer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '10%',
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
})