import React from 'react';
import { StyleSheet } from 'react-native';
import NaverMapView from 'react-native-nmap';

const NaverMap = () => {
    const defaultLocation = {
        latitude: 37.6009735, 
        longitude: 126.9484764
    };

    return(
        <NaverMapView 
            style={ styles.container }
            showsMyLocationButton={ true }
            center={{
                ...defaultLocation,
                zoom: 15,
            }}
            scaleBar={ true }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
});

export default NaverMap;