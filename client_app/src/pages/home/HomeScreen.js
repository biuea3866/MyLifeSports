import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import palette from '../../styles/palette';
import HomeContent from './components/HomeContent';

const HomeScreen = () => {
    return(
        <ScrollView style={ styles.container }>
            <HomeContent />
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