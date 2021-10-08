import React from "react";
import { StyleSheet, View } from "react-native";
import palette from "../../../styles/palette";
import InfoClose from "./InfoClose";
import Info from "./Info";

const MapFooter = () => {
    return(
        <View style={ styles.container }>
            <InfoClose />
            <Info />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '30%',
        backgroundColor: palette.white[0],
    }
});

export default MapFooter;