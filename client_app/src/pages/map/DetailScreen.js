import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import DetailFooter from './components/DetailFooter';
import DetailHeader from './components/DetailHeader';
import DetailContent from './components/DetailContent';
import DetailNav from './components/DetailNav';

const DetailScreen = () => {
    const [error, setError] = useState('');

    return(
        <ScrollView style={ styles.container }>
            <DetailHeader />
            <DetailNav error={ error }/>
            <DetailContent />
            <DetailFooter setError={ setError }/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
});

export default DetailScreen;