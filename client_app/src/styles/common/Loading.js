import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import palette from "../palette";

const Loading = () => {
    <View style={ styles.container }>
        <ActivityIndicator size="large" 
                           color={ palette.bloe[0] }
        />
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Loading;