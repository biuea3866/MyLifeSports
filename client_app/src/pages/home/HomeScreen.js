import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import palette from '../../styles/palette';
import HomeFragment from './components/HomeFragment';

const HomeScreen = () => {
    return(
        <ScrollView style={ styles.container }>
            <HomeFragment />
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