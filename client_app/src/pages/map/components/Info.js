import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import palette from "../../../styles/palette";

const Info = () => {
    const { map } = useSelector(({ map }) => ({ map: map.map }));

    return(
        <View style={ styles.container } >
            <View style={ styles.title } >
                <Text style={ styles.place_name } >
                    { map.nm }
                </Text>
            </View>
            <View style={ styles.address } >
                <Text>
                    { map.addr }
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '45%',
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1,
    },
    title: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 15,
    },
    place_name: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    address: {
        justifyContent: 'flex-start',
        marginLeft: 15,
    },
});

export default Info;