import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import palette from '../../styles/palette';

const HomeScreen = () => {
    return(
        <ScrollView style={ styles.container }>
            <Text>Home Screen</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white[0],
    },
});

export default HomeScreen;