import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MapFooter from './components/MapFooter';
import MapHeader from './components/MapHeader';
import NaverMap from './components/NaverMap';

const MapScreen = () => {
    const { visible } = useSelector(({ marker }) => ({ visible: marker.visible }));

    return(
        <View style={ styles.container }>
            <MapHeader />
            <NaverMap />
            {
                visible &&
                <MapFooter />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
});

export default MapScreen;