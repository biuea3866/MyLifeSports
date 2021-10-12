import React from "react";
import { StyleSheet, View } from "react-native";
import TimeButton from "./TimeButton";

const timeArray = [
    '7~10', 
    '10~13', 
    '13~16', 
    '16~19', 
    '19~22'
];

const CustomTimePicker = () => {
    return(
        <View style={ styles.container }>
            <View style={ styles.content }>
                {
                    timeArray.map((time) => {
                        return <TimeButton time={ time } />
                    })
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
    },
    content: {
        flexDirection: 'row',
        height: 100
    }
});

export default CustomTimePicker;