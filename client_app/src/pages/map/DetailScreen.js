import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import DetailHeader from './components/DetailHeader';
import DetailNav from './components/DetailNav';

const DetailScreen = () => {
    return(
        <View style={ styles.container }>
            <DetailHeader />
            <DetailNav />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
});

export default DetailScreen;