import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import palette from "../palette";

const Loading = () => {
    return (
        <View style={ styles.container }>
            <ActivityIndicator size="large" 
                               color={ palette.blue[0] }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Loading;