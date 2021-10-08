import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import MapHeader from './components/MapHeader';
import NaverMap from './components/NaverMap';

const MapScreen = () => {
    return(
        <View style={ styles.container }>
            <MapHeader />
            <NaverMap />
            {
                ({ state }) => (
                    state.visible &&
                    <MapFooter />
                )
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